# AWS-SAA Learning Lab

AWS SAA-C03 합격을 목표로, **초보자 기초 개념부터 실전형 시나리오 문제까지** 브라우저에서 바로 학습할 수 있는 정적 웹 레포지토리입니다.

## 목표

- AWS가 무엇인지부터 시작해 핵심 용어를 체계적으로 익히기
- SAA 도메인(보안/회복탄력성/고성능/비용최적화) 기반 사고 훈련
- 문제 풀이 + 해설 + 꼬리질문(면접형 질문)으로 응용력 강화

## 포함 기능

- `AWS 기초 소개`: 시험 관점에서 무엇을 공부해야 하는지 정리
- `6주 로드맵`: 초보자 기준 단계별 학습 계획
- `용어집`: 핵심 개념 + 왜 필요한지 + 꼬리질문/답변
- `문제은행`: 기초/중급/실전 난이도 필터 + 즉시 채점
- `모의고사`: 20문항 랜덤, 40분 타이머, 점수 및 도메인별 약점 분석

## 파일 구조

```text
.
├── index.html
├── assets
│   ├── styles.css
│   ├── data.js
│   └── app.js
├── README.md
├── AWS Certified Solutions Architect Associate SAA-C03.pdf
└── AWS SAA-03 Solution.txt
```

## 로컬 실행

정적 페이지이므로 간단한 HTTP 서버로 실행하면 됩니다.

```bash
cd /mnt/d/aws
python3 -m http.server 8080
```

브라우저에서 `http://localhost:8080` 접속.

## 학습 추천 순서

1. `기초 섹션`으로 AWS 전체 그림 이해
2. `용어집`에서 하루 5~10개씩 학습
3. `문제은행`에서 난이도별 오답 노트 축적
4. `모의고사` 반복 후 취약 도메인 보완

## GitHub 빈 레포 연결

질문에 적어주신 원격 저장소 기준 명령은 아래 순서로 사용하면 됩니다.

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/hyunseung1119/AWS-SAA.git
git push -u origin main
```

이미 `origin`이 있다면 아래로 갱신합니다.

```bash
git remote set-url origin https://github.com/hyunseung1119/AWS-SAA.git
```

## 참고

- 본 레포의 문제는 학습용 재구성 문제입니다.
- 실제 시험 합격률을 높이려면 서비스 공식 문서/Hands-on 실습을 병행하는 것이 좋습니다.
