# AWS-SAA Learning Repository

초보자 기준으로 AWS 기초 개념부터 AWS SAA-C03 실전형 문제까지 단계적으로 학습할 수 있게 구성한 정적 웹 기반 학습 레포지토리입니다.

## What This Repo Solves

- AWS를 처음 접하는 학습자도 단계별로 따라갈 수 있는 구조 제공
- 시험형 시나리오 문제 + 꼬리질문으로 실전 답변력 강화
- PDF/TXT 원본 자료와 학습 데이터의 연결 추적 가능

## Project Structure

```text
.
├── web/                               # 학습 UI (정적 페이지)
│   ├── index.html
│   └── assets/
│       ├── app.js
│       └── styles.css
├── content/                           # 프론트가 읽는 학습 데이터(JSON)
│   ├── manifest.json
│   ├── roadmap/stages.json
│   ├── glossary/
│   │   ├── foundation.json
│   │   └── architecture.json
│   └── questions/
│       ├── foundation.json
│       ├── intermediate.json
│       ├── exam.json
│       ├── exam_txt_drills.json
│       └── mock_blueprint.json
├── curriculum/                        # 단계별 학습 가이드
│   ├── README.md
│   ├── stage-01-foundations/README.md
│   ├── stage-02-network-security/README.md
│   ├── stage-03-storage-database/README.md
│   ├── stage-04-resilience-performance/README.md
│   ├── stage-05-cost-operations/README.md
│   └── stage-06-exam-drills/README.md
├── references/
│   ├── raw/
│   │   ├── saa-c03-source.pdf
│   │   └── saa-c03-solution.txt
│   ├── legacy/
│   │   └── legacy-data.js
│   └── indexes/
│       ├── source-map.md
│       ├── txt-question-index.md
│       └── txt-drill-summary.md
└── scripts/
    ├── build_content_from_legacy.js
    ├── build_txt_index.sh
    └── build_txt_drills.py
```

## Learning Flow (Recommended)

1. `curriculum/stage-01` ~ `stage-03`로 개념/용어 기반 학습
2. `web` 문제은행에서 `유형(객관식/TXT 실전 드릴)` + 단계 + 난이도 필터로 문제 풀이
3. `stage-04` ~ `stage-05`에서 설계/비용 트레이드오프 정리
4. `stage-06` + 모의고사(20문항)로 실전 점검

## Run Locally

```bash
cd /mnt/d/aws
python3 -m http.server 8080
```

브라우저 접속:

- `http://localhost:8080/` (리다이렉트)
- `http://localhost:8080/web/`

## Data Maintenance

기존 `references/legacy/legacy-data.js` 기반 데이터를 다시 JSON으로 분리할 때:

```bash
node scripts/build_content_from_legacy.js
scripts/build_txt_index.sh
scripts/build_txt_drills.py
```

## Notes

- 본 레포 문제는 학습용 재구성 문항입니다.
- 실제 시험 대비 시 AWS 공식 문서와 콘솔 실습을 함께 진행하세요.
