const ROADMAP_STAGES = [
  {
    week: "1주차",
    title: "클라우드와 AWS 기초",
    summary: "온프레미스와 클라우드 차이를 이해하고 핵심 서비스 지도를 익힙니다.",
    goals: [
      "AWS 글로벌 인프라(Region, AZ, Edge) 구조 이해",
      "EC2, S3, RDS, VPC 역할을 한 문장으로 설명",
      "공유 책임 모델(Shared Responsibility Model) 정리"
    ],
    check: "서비스 선택 이유를 비용/운영 관점으로 말할 수 있는지 확인"
  },
  {
    week: "2주차",
    title: "네트워크와 보안 기본기",
    summary: "VPC 설계와 IAM 최소 권한 원칙을 연결해서 학습합니다.",
    goals: [
      "퍼블릭/프라이빗 서브넷, 라우팅, NAT 동작 이해",
      "Security Group, NACL 차이와 사용 지점 구분",
      "IAM User/Role/Policy, STS AssumeRole 흐름 파악"
    ],
    check: "'왜 Role을 써야 하는지'를 키 관리 관점으로 설명"
  },
  {
    week: "3주차",
    title: "저장소와 데이터베이스",
    summary: "데이터 성격에 따라 S3/EBS/EFS/RDS/DynamoDB를 구분합니다.",
    goals: [
      "블록/파일/객체 스토리지 선택 기준 정리",
      "RDS Multi-AZ, Read Replica 차이 설명",
      "DynamoDB 파티션 키와 액세스 패턴 사고 훈련"
    ],
    check: "RPO/RTO 요구조건을 보고 백업 전략을 제시"
  },
  {
    week: "4주차",
    title: "고가용성/확장성 설계",
    summary: "서비스 장애를 가정한 아키텍처를 설계합니다.",
    goals: [
      "ALB, Auto Scaling, SQS 기반 느슨한 결합 설계",
      "CloudFront + 캐싱 전략으로 지연시간 감소",
      "장애 시나리오(인스턴스/가용영역) 대응 패턴 학습"
    ],
    check: "단일 장애 지점(SPOF)을 찾아내고 제거"
  },
  {
    week: "5주차",
    title: "비용 최적화와 운영",
    summary: "성능/가용성 요구를 깨지 않으면서 비용을 낮추는 연습을 합니다.",
    goals: [
      "On-Demand, Savings Plans, Spot 선택 기준 숙지",
      "S3 Lifecycle, 모니터링, 알람 자동화",
      "관리형 서비스 우선 원칙으로 운영 부담 축소"
    ],
    check: "요구사항이 바뀌어도 유연하게 비용 모델을 전환 가능한지 점검"
  },
  {
    week: "6주차",
    title: "실전 문제와 리뷰",
    summary: "시나리오 기반 문제를 빠르게 해석하고 오답 패턴을 교정합니다.",
    goals: [
      "키워드(least operational overhead, highest availability) 캐치",
      "오답 선택지 제거 규칙 만들기",
      "모의고사 반복 후 도메인 취약점 보완"
    ],
    check: "72% 이상 안정적으로 유지되는지 최종 점검"
  }
];

const GLOSSARY_TERMS = [
  {
    term: "Region",
    meaning: "AWS 리소스를 배치하는 지리적으로 분리된 물리적 영역입니다.",
    why: "지연시간, 데이터 주권, 재해복구 전략은 Region 선택에서 시작됩니다.",
    followUpQ: "Multi-Region이 항상 정답은 아닌 이유는?",
    followUpA: "운영 복잡도와 데이터 동기화 비용이 크게 증가하므로 요구사항 기반으로만 선택합니다."
  },
  {
    term: "Availability Zone (AZ)",
    meaning: "하나의 Region 안에 있는 독립 전원/네트워크를 가진 데이터센터 묶음입니다.",
    why: "AZ 분산은 단일 데이터센터 장애를 흡수하는 가장 기본적인 고가용성 패턴입니다.",
    followUpQ: "Multi-AZ와 Backup의 차이는?",
    followUpA: "Multi-AZ는 고가용성(자동 장애조치), Backup은 데이터 복구 목적입니다."
  },
  {
    term: "VPC",
    meaning: "AWS에서 논리적으로 격리된 가상 네트워크입니다.",
    why: "네트워크 경계와 라우팅 정책을 직접 통제해야 보안/확장 설계가 가능합니다.",
    followUpQ: "초보자가 가장 자주 실수하는 포인트는?",
    followUpA: "서브넷은 IGW에 직접 연결되지 않고 라우팅 테이블로 경로를 지정해야 합니다."
  },
  {
    term: "Security Group",
    meaning: "인스턴스/ENI 단위의 상태 저장(Stateful) 방화벽입니다.",
    why: "워크로드별 최소 허용 정책으로 공격면을 줄일 수 있습니다.",
    followUpQ: "Stateful이면 어떤 점이 쉬워지나?",
    followUpA: "인바운드 허용 시 응답 트래픽 아웃바운드는 별도 허용 규칙이 필요 없습니다."
  },
  {
    term: "NACL",
    meaning: "서브넷 단위의 상태 비저장(Stateless) 네트워크 필터입니다.",
    why: "서브넷 레벨 차단 정책이 필요할 때 SG와 계층적으로 사용합니다.",
    followUpQ: "SG만으로 충분하지 않은 경우는?",
    followUpA: "특정 IP 대역을 서브넷 전역에서 명시적으로 거부해야 할 때 NACL이 유용합니다."
  },
  {
    term: "IAM Role",
    meaning: "장기 액세스 키 없이 임시 자격 증명을 제공하는 권한 엔티티입니다.",
    why: "키 하드코딩을 막고 회전 부담을 줄여 보안 사고를 예방합니다.",
    followUpQ: "EC2에서 IAM User 대신 Role을 쓰는 이유는?",
    followUpA: "Role은 자동 갱신되는 임시 자격 증명을 사용하므로 키 유출 리스크가 낮습니다."
  },
  {
    term: "S3",
    meaning: "확장성과 내구성이 높은 객체 스토리지 서비스입니다.",
    why: "로그/백업/정적 콘텐츠/데이터레이크 등 광범위한 워크로드의 기본 저장소입니다.",
    followUpQ: "S3에 파일시스템처럼 랜덤 쓰기가 가능한가?",
    followUpA: "아니요. 객체 단위로 저장되므로 수정은 보통 객체 재업로드 패턴을 사용합니다."
  },
  {
    term: "EBS",
    meaning: "EC2에 연결하는 블록 스토리지 볼륨입니다.",
    why: "데이터베이스처럼 저지연 블록 스토리지가 필요한 워크로드에 적합합니다.",
    followUpQ: "EBS를 여러 인스턴스가 동시에 공유 가능한가?",
    followUpA: "일반적으로 단일 인스턴스 연결이 기본이며, 공유 파일이 필요하면 EFS를 검토합니다."
  },
  {
    term: "EFS",
    meaning: "여러 EC2가 동시에 마운트할 수 있는 관리형 NFS 파일 스토리지입니다.",
    why: "수평 확장되는 앱에서 공유 파일 영역을 단순하게 운영할 수 있습니다.",
    followUpQ: "EBS 대신 EFS를 쓰면 단점은?",
    followUpA: "일부 워크로드에서는 EBS 대비 지연시간/처리량 특성이 불리할 수 있습니다."
  },
  {
    term: "RDS Multi-AZ",
    meaning: "기본 DB와 동기식 대기 DB를 서로 다른 AZ에 두는 고가용성 구성입니다.",
    why: "인프라 장애 시 자동 장애조치로 다운타임을 줄일 수 있습니다.",
    followUpQ: "Read Replica와 혼동되는 포인트는?",
    followUpA: "Read Replica는 읽기 확장 목적이고 Multi-AZ는 가용성 목적입니다."
  },
  {
    term: "CloudFront",
    meaning: "전 세계 Edge에서 콘텐츠를 캐싱해 전달하는 CDN입니다.",
    why: "사용자 지연시간 감소와 오리진 부하 절감에 직접적인 효과가 있습니다.",
    followUpQ: "동적 API에도 의미가 있나?",
    followUpA: "캐싱 정책을 조정하면 일부 동적 트래픽 최적화와 TLS 오프로딩 이점이 있습니다."
  },
  {
    term: "SQS",
    meaning: "애플리케이션 컴포넌트를 비동기로 분리하는 메시지 큐 서비스입니다.",
    why: "트래픽 스파이크를 흡수해 시스템 전체 안정성과 확장성을 높입니다.",
    followUpQ: "큐 길이 기반 오토스케일링이 중요한 이유는?",
    followUpA: "실제 처리 적체를 기준으로 워커 수를 조절하므로 과소/과대 확장을 줄입니다."
  },
  {
    term: "SNS",
    meaning: "하나의 이벤트를 여러 구독자에게 팬아웃 전달하는 Pub/Sub 서비스입니다.",
    why: "이벤트 기반 아키텍처에서 소비자 추가를 유연하게 만들고 결합도를 낮춥니다.",
    followUpQ: "SNS만 쓰고 큐를 안 두면 생길 수 있는 문제는?",
    followUpA: "소비자 장애 시 메시지 재처리/버퍼링 유연성이 떨어질 수 있습니다."
  },
  {
    term: "NAT Gateway",
    meaning: "프라이빗 서브넷 인스턴스가 인터넷 아웃바운드 통신을 하게 하는 관리형 게이트웨이입니다.",
    why: "인스턴스를 퍼블릭으로 노출하지 않고도 패치/외부 API 호출을 처리할 수 있습니다.",
    followUpQ: "NAT 인스턴스보다 NAT Gateway가 자주 추천되는 이유는?",
    followUpA: "관리 부담이 낮고 확장/가용성 구성이 단순하기 때문입니다."
  },
  {
    term: "KMS",
    meaning: "암호화 키 생성/관리/감사를 제공하는 관리형 서비스입니다.",
    why: "데이터 암호화 표준화와 키 접근 통제, 감사 추적을 쉽게 구현할 수 있습니다.",
    followUpQ: "SSE-S3와 SSE-KMS 차이는?",
    followUpA: "SSE-KMS는 키 정책/감사 로깅/세밀한 권한 통제가 더 강력합니다."
  },
  {
    term: "Auto Scaling",
    meaning: "부하 변화에 따라 인스턴스 수를 자동 조절하는 기능입니다.",
    why: "성능과 비용을 동시에 맞추는 핵심 메커니즘입니다.",
    followUpQ: "CPU만으로 스케일링하면 놓치기 쉬운 상황은?",
    followUpA: "비동기 처리 시스템은 CPU보다 큐 적체가 실제 병목을 더 잘 반영할 수 있습니다."
  }
];

const QUESTION_BANK = [
  {
    id: 1,
    level: "기초",
    domain: "보안 설계",
    question: "VPC의 가장 핵심 목적은 무엇인가?",
    options: [
      "인터넷 대역폭을 자동으로 늘려 주기 위해",
      "AWS 리소스를 논리적으로 격리된 네트워크에 배치하기 위해",
      "EC2 인스턴스의 운영체제를 자동 업데이트하기 위해",
      "S3 버킷을 암호화하기 위해"
    ],
    answer: 1,
    explanation: "VPC는 네트워크 경계를 정의해 서브넷/라우팅/보안 정책을 통제하는 기반입니다.",
    followUpQ: "퍼블릭 서브넷과 프라이빗 서브넷을 나누는 실무적 이유는?",
    followUpA: "외부 노출 계층과 내부 핵심 계층을 분리해 공격면을 줄이고 정책 관리가 쉬워집니다."
  },
  {
    id: 2,
    level: "기초",
    domain: "비용 최적화",
    question: "대용량 로그 파일을 장기간 저비용으로 보관할 기본 서비스로 가장 적절한 것은?",
    options: ["Amazon S3", "Amazon EBS", "Amazon ElastiCache", "Amazon MQ"],
    answer: 0,
    explanation: "S3는 내구성이 높고 다양한 스토리지 클래스를 제공해 장기 보관에 적합합니다.",
    followUpQ: "보관 비용을 더 줄이려면 어떤 기능을 추가로 쓰나?",
    followUpA: "Lifecycle 정책으로 S3 Glacier 계열 클래스로 자동 전환합니다."
  },
  {
    id: 3,
    level: "기초",
    domain: "보안 설계",
    question: "EC2 애플리케이션이 S3에 접근할 때 권장되는 인증 방식은?",
    options: [
      "코드에 Access Key를 하드코딩",
      "IAM Role을 EC2에 연결",
      "공용 버킷으로 전환",
      "루트 계정 키 사용"
    ],
    answer: 1,
    explanation: "IAM Role은 임시 자격 증명을 제공해 장기 키 관리 부담과 유출 위험을 줄입니다.",
    followUpQ: "Role 기반 접근에서 감사 포인트는?",
    followUpA: "CloudTrail로 AssumeRole 및 API 호출 이벤트를 추적하고 이상 접근을 탐지합니다."
  },
  {
    id: 4,
    level: "기초",
    domain: "회복탄력성",
    question: "RDS Multi-AZ 구성의 주된 목적은 무엇인가?",
    options: ["읽기 성능 향상", "비용 절감", "고가용성 확보", "스키마 자동 변경"],
    answer: 2,
    explanation: "Multi-AZ는 동기식 스탠바이와 자동 장애조치로 DB 가용성을 높입니다.",
    followUpQ: "읽기 트래픽이 병목이면 어떤 기능을 검토해야 하나?",
    followUpA: "Read Replica를 사용해 읽기 부하를 분산합니다."
  },
  {
    id: 5,
    level: "기초",
    domain: "고성능 설계",
    question: "전 세계 사용자에게 정적 콘텐츠를 빠르게 제공하려면 우선적으로 고려할 서비스는?",
    options: ["Amazon CloudFront", "Amazon ECR", "Amazon Inspector", "AWS Glue"],
    answer: 0,
    explanation: "CloudFront는 Edge 캐시를 활용해 지연시간을 줄이고 오리진 부하를 완화합니다.",
    followUpQ: "CloudFront를 쓰면 보안 측면 이점은?",
    followUpA: "WAF 연계, TLS 종료, 오리진 직접 노출 최소화 등 보안 제어가 쉬워집니다."
  },
  {
    id: 6,
    level: "기초",
    domain: "보안 설계",
    question: "Security Group에 대한 설명으로 올바른 것은?",
    options: [
      "Stateless 규칙이다",
      "인스턴스 레벨에서 동작하는 Stateful 방화벽이다",
      "서브넷 단위에서만 동작한다",
      "Deny 규칙을 우선 적용한다"
    ],
    answer: 1,
    explanation: "Security Group은 상태 저장 방화벽으로 인스턴스/ENI 수준에서 허용 규칙 중심으로 동작합니다.",
    followUpQ: "Deny가 꼭 필요한 경우는 어디서 처리하나?",
    followUpA: "서브넷 레벨 NACL에서 명시적 거부 규칙을 설계할 수 있습니다."
  },
  {
    id: 7,
    level: "기초",
    domain: "회복탄력성",
    question: "마이크로서비스 간 결합도를 낮추고 트래픽 급증을 흡수하려면 어떤 구성이 적절한가?",
    options: ["SQS 큐 도입", "단일 대형 EC2로 통합", "동기 REST 호출만 사용", "모든 서비스 공유 DB 사용"],
    answer: 0,
    explanation: "SQS는 비동기 처리와 버퍼링을 제공해 서비스 간 장애 전파를 줄입니다.",
    followUpQ: "큐가 길어질 때 운영자는 무엇을 우선 봐야 하나?",
    followUpA: "처리 지연 시간, 가시성 타임아웃, DLQ 유입량을 함께 점검해야 합니다."
  },
  {
    id: 8,
    level: "기초",
    domain: "회복탄력성",
    question: "Route 53 Health Check와 Failover 라우팅을 쓰는 주된 이유는?",
    options: ["TLS 인증서 자동 발급", "정적 웹호스팅 비용 절감", "장애 엔드포인트 자동 우회", "IAM 권한 관리"],
    answer: 2,
    explanation: "비정상 엔드포인트를 감지하면 대체 리전에 트래픽을 라우팅해 가용성을 높일 수 있습니다.",
    followUpQ: "DNS 기반 장애조치의 한계는?",
    followUpA: "TTL과 클라이언트 DNS 캐시 영향으로 즉시 전환이 보장되지는 않습니다."
  },
  {
    id: 9,
    level: "기초",
    domain: "보안 설계",
    question: "암호화 키 접근 제어와 감사 로깅이 중요한 환경에서 주로 쓰는 서비스는?",
    options: ["AWS KMS", "AWS Budgets", "Amazon GuardDuty", "AWS Config"],
    answer: 0,
    explanation: "KMS는 키 정책, 권한 제어, CloudTrail 기반 감사 추적을 제공합니다.",
    followUpQ: "애플리케이션 계층에서 KMS를 보통 어떻게 쓰나?",
    followUpA: "데이터 키를 생성해 대용량 데이터 암호화(Envelope Encryption) 패턴으로 사용합니다."
  },
  {
    id: 10,
    level: "중급",
    domain: "회복탄력성",
    question: "프라이빗 서브넷 EC2가 외부 패키지 저장소에 접속해야 할 때 적절한 구성은?",
    options: [
      "프라이빗 서브넷에 Internet Gateway 연결",
      "퍼블릭 서브넷 NAT Gateway + 라우팅 설정",
      "모든 인스턴스에 퍼블릭 IP 부여",
      "S3 버킷 정책 수정"
    ],
    answer: 1,
    explanation: "NAT Gateway를 통해 아웃바운드만 허용하면 프라이빗 인스턴스 노출 없이 통신 가능합니다.",
    followUpQ: "고가용성을 위해 NAT 구성 시 주의할 점은?",
    followUpA: "AZ별로 NAT Gateway를 배치하고 각 서브넷 라우팅을 같은 AZ NAT로 보내야 합니다."
  },
  {
    id: 11,
    level: "중급",
    domain: "고성능 설계",
    question: "HTTP/HTTPS 웹 트래픽 L7 라우팅이 필요할 때 로드밸런서 선택은?",
    options: ["Network Load Balancer", "Gateway Load Balancer", "Application Load Balancer", "Classic VPN"],
    answer: 2,
    explanation: "ALB는 경로/호스트 기반 라우팅 등 L7 기능을 제공합니다.",
    followUpQ: "NLB가 더 적합한 경우는?",
    followUpA: "초저지연 L4 처리나 고정 IP, TCP/UDP 기반 워크로드에서 유리합니다."
  },
  {
    id: 12,
    level: "중급",
    domain: "회복탄력성",
    question: "SQS 큐를 소비하는 워커의 Auto Scaling 지표로 가장 적합한 것은?",
    options: ["CPU 사용률만 사용", "네트워크 송신량", "큐 메시지 수(Queue Depth)", "루트 볼륨 크기"],
    answer: 2,
    explanation: "큐 적체량은 처리 병목을 직접 반영하므로 비동기 워커 스케일링에 유효합니다.",
    followUpQ: "CPU 지표만 쓰면 어떤 문제가 생기나?",
    followUpA: "메시지가 계속 쌓여도 CPU가 낮게 보이면 확장이 지연될 수 있습니다."
  },
  {
    id: 13,
    level: "중급",
    domain: "비용 최적화",
    question: "트래픽 패턴 예측이 어려운 DynamoDB 워크로드의 기본 과금 모드로 적합한 것은?",
    options: ["Provisioned + 고정 용량", "On-Demand Capacity", "Reserved Queue", "Dedicated Host"],
    answer: 1,
    explanation: "On-Demand는 급격한 변동 트래픽에서도 용량 계획 부담을 줄입니다.",
    followUpQ: "Provisioned 모드가 더 유리한 상황은?",
    followUpA: "트래픽이 안정적이고 장기 예측 가능하면 비용 효율이 좋아질 수 있습니다."
  },
  {
    id: 14,
    level: "중급",
    domain: "비용 최적화",
    question: "S3 로그 데이터를 30일 후 저비용 계층으로 자동 전환하려면?",
    options: ["S3 Versioning", "S3 Lifecycle Rule", "S3 Inventory", "S3 Batch Operations"],
    answer: 1,
    explanation: "Lifecycle 규칙으로 스토리지 클래스 전환 및 만료를 자동화할 수 있습니다.",
    followUpQ: "수명주기 정책 설계에서 흔한 실수는?",
    followUpA: "복구 지연 시간 요구를 확인하지 않고 너무 저렴한 클래스로 일괄 이동하는 것입니다."
  },
  {
    id: 15,
    level: "중급",
    domain: "보안 설계",
    question: "여러 AWS 계정에서 공통 보안 가드레일을 강제하려면 무엇을 사용해야 하는가?",
    options: ["SCP(Service Control Policies)", "로컬 crontab", "CloudFront Function", "EBS Snapshot"],
    answer: 0,
    explanation: "Organizations의 SCP는 계정/OU 단위로 허용 가능한 API 경계를 제어합니다.",
    followUpQ: "SCP와 IAM 정책 관계를 한 문장으로 요약하면?",
    followUpA: "SCP는 최대 권한 경계, IAM 정책은 그 안에서 실제 권한을 부여합니다."
  },
  {
    id: 16,
    level: "중급",
    domain: "고성능 설계",
    question: "여러 EC2 인스턴스가 동일한 파일을 동시에 읽고 써야 할 때 적절한 저장소는?",
    options: ["Amazon EBS", "Amazon EFS", "Instance Store", "Amazon SQS"],
    answer: 1,
    explanation: "EFS는 다중 인스턴스 공유 파일시스템 요구를 관리형으로 충족합니다.",
    followUpQ: "컨테이너 환경에서 EFS를 쓰는 대표 장점은?",
    followUpA: "태스크 재배치 후에도 상태 파일을 지속적으로 공유할 수 있습니다."
  },
  {
    id: 17,
    level: "중급",
    domain: "보안 설계",
    question: "애플리케이션 DB 비밀번호를 주기적으로 자동 교체해야 할 때 가장 적합한 서비스는?",
    options: ["AWS Secrets Manager", "EC2 User Data", "IAM Access Analyzer", "AWS Artifact"],
    answer: 0,
    explanation: "Secrets Manager는 비밀값 저장, 접근 제어, 자동 로테이션을 통합 제공합니다.",
    followUpQ: "Parameter Store 대비 Secrets Manager 강점은?",
    followUpA: "관리형 회전 워크플로와 비밀관리 특화 기능이 더 풍부합니다."
  },
  {
    id: 18,
    level: "중급",
    domain: "회복탄력성",
    question: "다수 VPC와 온프레미스 네트워크를 중앙에서 단순 연결하려면 어떤 서비스가 적절한가?",
    options: ["VPC Peering만 반복", "AWS Transit Gateway", "NAT Gateway", "AWS WAF"],
    answer: 1,
    explanation: "Transit Gateway는 허브 앤 스포크 방식으로 다수 네트워크 연결 복잡도를 줄입니다.",
    followUpQ: "Peering을 계속 늘리는 방식의 문제는?",
    followUpA: "연결 수가 증가할수록 라우팅/운영 복잡도가 급격히 커집니다."
  },
  {
    id: 19,
    level: "실전",
    domain: "고성능 설계",
    question: "여러 대륙 지사에서 대용량 파일을 단일 S3 버킷으로 최대한 빠르게 업로드해야 한다. 운영 복잡도도 낮아야 한다. 가장 적절한 방법은?",
    options: [
      "각 지사마다 Storage Gateway를 수동 구성",
      "S3 Transfer Acceleration + Multipart Upload 사용",
      "모든 지사 트래픽을 단일 VPN 터널로 집약",
      "각 지사에서 먼저 EBS로 저장 후 복사"
    ],
    answer: 1,
    explanation: "장거리 업로드 가속과 대용량 분할 업로드 조합으로 성능과 단순성을 동시에 확보합니다.",
    followUpQ: "Transfer Acceleration 사용 전 확인해야 할 것은?",
    followUpA: "추가 비용 대비 체감 성능이 있는지, 지역/네트워크 조건에서 벤치마크가 필요합니다."
  },
  {
    id: 20,
    level: "실전",
    domain: "고성능 설계",
    question: "S3에 저장된 JSON 로그를 필요할 때만 SQL로 분석하고 운영 부담을 최소화하려면?",
    options: ["EMR 상시 클러스터 운영", "Athena로 S3 직접 조회", "RDS로 전량 적재", "EC2 배치 파서 개발"],
    answer: 1,
    explanation: "Athena는 서버리스 질의 서비스로 온디맨드 분석에 적합하며 운영 오버헤드가 낮습니다.",
    followUpQ: "Athena 비용을 줄이는 핵심 팁은?",
    followUpA: "파티셔닝과 컬럼형 포맷(Parquet 등)으로 스캔 데이터 양을 줄입니다."
  },
  {
    id: 21,
    level: "실전",
    domain: "회복탄력성",
    question: "하나의 이벤트를 여러 소비자 애플리케이션이 독립적으로 처리해야 한다. 각 소비자는 실패 시 재처리도 가능해야 한다. 어떤 패턴이 적합한가?",
    options: ["단일 SQS 큐를 공동 소비", "SNS 토픽 + 소비자별 SQS 구독", "모든 소비자를 동기 API 호출", "단일 EC2 크론잡"],
    answer: 1,
    explanation: "SNS 팬아웃과 SQS 버퍼를 결합하면 소비자 분리, 독립 장애 처리, 재시도 전략을 동시에 만족합니다.",
    followUpQ: "소비자별 필터링이 필요하면 무엇을 추가하나?",
    followUpA: "SNS 메시지 속성과 구독 필터 정책을 사용합니다."
  },
  {
    id: 22,
    level: "실전",
    domain: "회복탄력성",
    question: "작업 스케줄러와 다수 컴퓨트 노드로 구성된 레거시 시스템을 AWS로 현대화하려고 한다. 부하 변동이 크며 확장성과 복원력이 중요하다. 최적 설계는?",
    options: [
      "단일 대형 EC2에 모든 작업 통합",
      "SQS 큐 + Auto Scaling EC2 워커",
      "NFS 공유 폴더 폴링",
      "고정 수량 Lambda 예약 실행"
    ],
    answer: 1,
    explanation: "큐 기반 비동기 처리와 워커 오토스케일 조합이 변동 부하 대응과 장애 분리에 효과적입니다.",
    followUpQ: "이 구조에서 데이터 중복 처리 방지는 어떻게 하나?",
    followUpA: "Idempotency 키 설계와 적절한 visibility timeout/DLQ 구성이 필요합니다."
  },
  {
    id: 23,
    level: "실전",
    domain: "회복탄력성",
    question: "글로벌 사용자 대상 읽기 중심 Aurora 워크로드에서 리전 장애 시 빠른 복구가 필요하다. 운영팀 규모는 작다. 어떤 선택이 가장 현실적인가?",
    options: [
      "백업 파일 수동 복원만 사용",
      "Aurora Global Database + Route 53 Failover",
      "매시간 수동 스냅샷 복사",
      "단일 리전에 Read Replica만 추가"
    ],
    answer: 1,
    explanation: "Global Database는 교차 리전 복제 지연을 낮추고 장애 조치 시간을 단축하는 데 유리합니다.",
    followUpQ: "DR 설계 검증에서 꼭 해야 하는 활동은?",
    followUpA: "정기적인 장애조치 리허설과 RTO/RPO 측정 자동화를 실행해야 합니다."
  },
  {
    id: 24,
    level: "실전",
    domain: "비용 최적화",
    question: "연중 지속되는 기본 트래픽과 예측 불가한 단기 피크가 함께 있는 EC2 워크로드의 비용을 줄이려면?",
    options: [
      "전량 On-Demand 유지",
      "기본 용량은 Savings Plans, 피크는 Spot 혼합",
      "전량 Reserved Instance 3년 선결제",
      "전량 Spot으로 전환"
    ],
    answer: 1,
    explanation: "예측 가능한 베이스로드와 유연한 피크 워크로드를 분리해 비용과 안정성을 균형 있게 가져갈 수 있습니다.",
    followUpQ: "Spot 중단 대응 기본 원칙은?",
    followUpA: "중단 허용 워크로드만 배치하고, 체크포인트/재시도 전략을 설계해야 합니다."
  },
  {
    id: 25,
    level: "실전",
    domain: "보안 설계",
    question: "S3 정적 콘텐츠를 CloudFront로만 공개하고 버킷 직접 접근은 차단해야 한다. 가장 권장되는 구성은?",
    options: [
      "버킷을 퍼블릭으로 열고 CloudFront 사용",
      "CloudFront OAC(Origin Access Control) + 버킷 정책",
      "IAM 사용자 키를 프론트엔드 코드에 포함",
      "Route 53 정책만 설정"
    ],
    answer: 1,
    explanation: "OAC를 사용하면 CloudFront 경유 요청만 허용하도록 안전하게 제한할 수 있습니다.",
    followUpQ: "과거 OAI와 비교해 OAC 장점은?",
    followUpA: "신규 보안 기능 및 현대적 서명 방식 지원 등 확장성이 더 좋습니다."
  },
  {
    id: 26,
    level: "실전",
    domain: "보안 설계",
    question: "엄격한 규제로 인해 암호화 키를 전용 HSM에서 관리해야 한다. AWS 서비스 선택은?",
    options: ["AWS CloudHSM", "AWS Cost Explorer", "Amazon Macie", "AWS X-Ray"],
    answer: 0,
    explanation: "CloudHSM은 고객 전용 HSM 기반 키 제어 요구사항을 충족할 때 사용됩니다.",
    followUpQ: "KMS만으로 충분한 경우와 CloudHSM이 필요한 경우 차이는?",
    followUpA: "대부분은 KMS로 충분하지만, 규정상 전용 HSM 제어가 필수면 CloudHSM을 검토합니다."
  },
  {
    id: 27,
    level: "실전",
    domain: "회복탄력성",
    question: "RPO 15분, RTO 1시간 요구를 가진 업무 시스템 DR 전략으로 운영복잡도를 낮추면서 목표를 맞추려면?",
    options: [
      "Backup and Restore만 사용",
      "Pilot Light 전략으로 핵심 데이터 계층 상시 유지",
      "Multi-Site Active/Active를 무조건 도입",
      "장애 시 새 계정 생성 후 배포"
    ],
    answer: 1,
    explanation: "Pilot Light는 핵심 구성요소를 최소 운영해 복구 시간을 단축하면서 비용과 복잡도를 절충합니다.",
    followUpQ: "Warm Standby와 Pilot Light 선택 기준은?",
    followUpA: "복구 속도 요구가 더 빠를수록 Warm Standby가 유리하지만 비용이 증가합니다."
  }
];

window.AWS_SAA_DATA = {
  roadmap: ROADMAP_STAGES,
  glossary: GLOSSARY_TERMS,
  questions: QUESTION_BANK
};
