# 기아 비즈 FAQ 페이지 프로젝트

## 기술 스택

### 프론트엔드

- **React**: 사용자 인터페이스 구축
- **TypeScript**: 타입 안정성 확보
- **Styled-components**: 컴포넌트 기반 스타일링
- **Tanstack Query**: 서버 상태 관리 및 데이터 페칭

### 개발 환경

- **Vite**: 빠른 개발 서버 및 빌드 도구
- **MSW (Mock Service Worker)**: API 모킹
- **Git**: 버전 관리

## 프로젝트 구조

```
src/
├── components/           # 컴포넌트 디렉토리
│   ├── AppDownload/     # 앱 다운로드 관련 컴포넌트
│   ├── FAQ/             # FAQ 관련 컴포넌트
│   ├── Process/         # 이용 프로세스 관련 컴포넌트
│   ├── ServiceInquiry/  # 서비스 문의 관련 컴포넌트
│   ├── Footer.tsx       # 푸터 컴포넌트
│   └── Header.tsx       # 헤더 컴포넌트
├── mocks/               # MSW 모킹 설정
├── pages/               # 페이지 컴포넌트
├── queryOptions/        # Tanstack Query 옵션
├── services/            # API 서비스
├── styles/              # 전역 스타일
└── types/               # 타입 정의
```

## 설치 및 실행 방법

### 필수 조건

- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
npm install
# 또는
yarn install
```

### 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
```

### 빌드

```bash
npm run build
# 또는
yarn build
```
