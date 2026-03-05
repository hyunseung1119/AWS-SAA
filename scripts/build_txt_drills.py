#!/usr/bin/env python3
"""Generate practical drill cards from saa-c03-solution.txt.

Output:
- content/questions/exam_txt_drills.json
- references/indexes/txt-drill-summary.md
"""

from __future__ import annotations

import json
import re
from collections import Counter
from datetime import datetime
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[1]
SRC = REPO_ROOT / "references" / "raw" / "saa-c03-solution.txt"
OUT_JSON = REPO_ROOT / "content" / "questions" / "exam_txt_drills.json"
OUT_SUMMARY = REPO_ROOT / "references" / "indexes" / "txt-drill-summary.md"

QUESTION_RE = re.compile(r"^\s*(\d+)\]\s*(.*\S)?\s*$")
ANS_RE = re.compile(r"^\s*ans\s*[-.:]\s*(.+)\s*$", re.IGNORECASE)
CORRECT_RE = re.compile(r"^\s*Correct answer\s*([A-D])\s*:\s*(.+)\s*$", re.IGNORECASE)
CHOICE_RE = re.compile(r"^\s*([A-D])\.\s*(.+)\s*$")
CHOICE_VERB_RE = re.compile(
    r"^\s*([A-D])\s+(Create|Use|Turn|Deploy|Configure|Set|Store|Take|Choose|Publish|Enable|Attach|Move|Install|Run|Migrate|Provision|Replace|Implement|Launch|Add|Copy|Delete|Build|Send|Receive|Define|Monitor|Extend)\b(.+)$",
    re.IGNORECASE,
)
SEPARATOR_RE = re.compile(r"^[-=]{4,}\s*$")

DOMAIN_KEYWORDS = {
    "보안 설계": [
        "iam",
        "kms",
        "security group",
        "nacl",
        "waf",
        "shield",
        "secrets manager",
        "cloudhsm",
        "principalorgid",
        "encryption",
        "certificate",
        "guardduty",
        "inspector",
        "access",
        "policy",
    ],
    "회복탄력성": [
        "multi-az",
        "failover",
        "backup",
        "restore",
        "dr",
        "recovery",
        "high availability",
        "sqs",
        "sns",
        "route 53",
        "durable",
        "disaster",
        "replica",
        "resil",
    ],
    "고성능 설계": [
        "latency",
        "throughput",
        "cloudfront",
        "performance",
        "auto scaling",
        "elb",
        "alb",
        "nlb",
        "kinesis",
        "cache",
        "millisecond",
        "real-time",
    ],
    "비용 최적화": [
        "cost",
        "billing",
        "savings",
        "spot",
        "lifecycle",
        "glacier",
        "least operational overhead",
        "operational overhead",
        "budget",
        "cost explorer",
        "storage class",
        "price",
    ],
}

FOLLOW_UP = {
    "보안 설계": (
        "같은 요구사항에서 최소 권한(Least Privilege)을 보장하려면 어떤 추가 제어를 넣을까?",
        "리소스 정책 범위를 축소하고 조건 키를 추가하며, 감사 로그(CloudTrail/Config)로 변경 추적을 구성한다.",
    ),
    "회복탄력성": (
        "이 설계에서 장애가 나면 어떤 지표를 보고 얼마나 빨리 복구해야 할까?",
        "RTO/RPO 목표를 먼저 정하고, 큐 적체/복제 지연/헬스체크 실패를 모니터링해 자동 복구를 검증한다.",
    ),
    "고성능 설계": (
        "성능 개선이 실제로 효과가 있었는지 어떤 방식으로 검증할까?",
        "지연시간 p95/p99, 처리량, 에러율을 기준선과 비교하고 캐시 적중률/오토스케일 반응 시간을 함께 측정한다.",
    ),
    "비용 최적화": (
        "비용을 더 낮출 수 있어도 이 선택을 유지해야 하는 기준은 무엇일까?",
        "가용성/성능/SLA를 깨지 않는 범위에서만 비용 절감안을 적용하고, 월별 비용-성능 지표로 지속 검토한다.",
    ),
}


def is_separator(line: str) -> bool:
    s = line.strip()
    return not s or bool(SEPARATOR_RE.match(s))


def normalize_space(text: str) -> str:
    return " ".join(text.split())


def guess_domain(text: str) -> str:
    hay = text.lower()
    scores: dict[str, int] = {}
    for domain, terms in DOMAIN_KEYWORDS.items():
        score = 0
        for term in terms:
            if term in hay:
                score += 1
        scores[domain] = score

    winner, max_score = max(scores.items(), key=lambda item: item[1])
    if max_score == 0:
        return "회복탄력성"
    return winner


def extract_answer(lines: list[str]) -> tuple[str, int, str]:
    for idx, raw in enumerate(lines):
        s = raw.strip()
        if not s:
            continue
        m = ANS_RE.match(s)
        if m:
            return normalize_space(m.group(1)), idx, "ans"

    for idx, raw in enumerate(lines):
        s = raw.strip()
        if not s:
            continue
        m = CHOICE_RE.match(s)
        if m:
            return normalize_space(f"{m.group(1).upper()}. {m.group(2)}"), idx, "choice"

    for idx, raw in enumerate(lines):
        s = raw.strip()
        if not s:
            continue
        m = CORRECT_RE.match(s)
        if m:
            return normalize_space(f"{m.group(1).upper()}. {m.group(2)}"), idx, "correct"

    for idx, raw in enumerate(lines):
        s = raw.strip()
        if not s:
            continue
        m = CHOICE_VERB_RE.match(s)
        if m:
            return normalize_space(f"{m.group(1).upper()}. {m.group(2)}{m.group(3)}"), idx, "choice_verb"

    return "", -1, "none"


def extract_explanation(lines: list[str], answer_idx: int) -> str:
    if answer_idx < 0:
        return "원문에서 답안 라인을 찾지 못했습니다. 요구사항 키워드 기준으로 정답 근거를 직접 정리하세요."

    picked: list[str] = []
    for raw in lines[answer_idx + 1 :]:
        s = raw.strip()
        if not s or SEPARATOR_RE.match(s):
            continue
        if s.lower().startswith("keywords"):
            continue
        picked.append(normalize_space(s))
        if len(picked) == 3:
            break

    if not picked:
        return "요구사항(가용성, 성능, 보안, 비용, 운영복잡도) 기준으로 선택 근거를 복기하세요."

    return " ".join(picked)


def extract_prompt(question_head: str, lines: list[str], answer_idx: int) -> str:
    prompt_lines: list[str] = []
    if question_head.strip():
        prompt_lines.append(question_head.strip())

    limit = answer_idx if answer_idx >= 0 else len(lines)
    for raw in lines[:limit]:
        s = raw.strip()
        if not s:
            continue
        if s.lower().startswith("ans"):
            continue
        if CHOICE_RE.match(s):
            continue
        if CORRECT_RE.match(s):
            continue
        if SEPARATOR_RE.match(s):
            continue
        prompt_lines.append(s)

    if not prompt_lines:
        return "원문 시나리오를 확인하세요."

    merged = normalize_space(" ".join(prompt_lines))
    if not merged.endswith("?"):
        merged = f"{merged}"
    return merged


def parse_blocks(text: str):
    blocks = []
    current = None

    for line_no, raw in enumerate(text.splitlines(), start=1):
        m = QUESTION_RE.match(raw)
        if m:
            if current is not None:
                blocks.append(current)
            current = {
                "number": int(m.group(1)),
                "start_line": line_no,
                "head": (m.group(2) or "").strip(),
                "lines": [],
            }
            continue

        if current is not None:
            current["lines"].append(raw)

    if current is not None:
        blocks.append(current)

    return blocks


def main() -> None:
    raw_text = SRC.read_text(encoding="utf-8", errors="ignore")
    blocks = parse_blocks(raw_text)

    drills = []
    domain_counter = Counter()
    answer_type_counter = Counter()
    extracted_answer_count = 0

    for block in blocks:
        answer_text, answer_idx, answer_type = extract_answer(block["lines"])
        prompt = extract_prompt(block["head"], block["lines"], answer_idx)
        explanation = extract_explanation(block["lines"], answer_idx)
        combined = f"{prompt} {answer_text} {explanation}"
        domain = guess_domain(combined)
        follow_q, follow_a = FOLLOW_UP[domain]

        if answer_text:
            extracted_answer_count += 1

        answer_type_counter[answer_type] += 1
        domain_counter[domain] += 1

        drills.append(
            {
                "id": f"TXT-{block['number']}",
                "legacyNumber": block["number"],
                "level": "실전",
                "domain": domain,
                "stage": "stage-06-exam-drills",
                "type": "drill",
                "question": prompt,
                "recommendedAnswer": answer_text
                or "원문에서 답안을 추출하지 못했습니다. 요구사항 기반으로 정답을 직접 구성하세요.",
                "answerExtracted": bool(answer_text),
                "explanation": explanation,
                "followUpQ": follow_q,
                "followUpA": follow_a,
                "source": f"txt:q{block['number']}",
                "sourceLine": block["start_line"],
            }
        )

    OUT_JSON.write_text(json.dumps(drills, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    lines = [
        "# TXT Drill Summary",
        "",
        f"- Source: `references/raw/saa-c03-solution.txt`",
        f"- Generated at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S %Z')}",
        f"- Total parsed questions: {len(blocks)}",
        f"- Drills generated: {len(drills)}",
        f"- Drills with extracted answer line: {extracted_answer_count}",
        "",
        "## Domain Distribution",
        "",
    ]

    for domain, count in domain_counter.most_common():
        lines.append(f"- {domain}: {count}")

    lines.extend(["", "## Answer Pattern Distribution", ""])
    for answer_type, count in answer_type_counter.most_common():
        lines.append(f"- {answer_type}: {count}")

    lines.extend(["", "## Sample Drills", ""])
    for drill in drills[:5]:
        lines.append(
            f"- {drill['id']} ({drill['domain']}): {drill['question'][:120]}..."
        )

    OUT_SUMMARY.write_text("\n".join(lines) + "\n", encoding="utf-8")

    print(f"Generated {len(drills)} drills -> {OUT_JSON}")
    print(f"Summary -> {OUT_SUMMARY}")


if __name__ == "__main__":
    main()
