# Event Loop 데모

Vite를 사용하여 JavaScript 이벤트 루프를 시각적으로 보여주는 웹 애플리케이션입니다.

## 설치 및 실행

### 개발 서버 실행

```bash
npm run dev
```

### 프로덕션 빌드

```bash
npm run build
```

### 빌드된 파일 미리보기

```bash
npm run preview
```

## 프로젝트 구조

```
eventloop/
├── index.html          # 메인 HTML 파일
├── src/
│   └── main.js        # 메인 JavaScript 파일
├── vite.config.js      # Vite 설정 파일
├── package.json        # 프로젝트 의존성 및 스크립트
└── README.md          # 프로젝트 설명서
```

## 기능

- JavaScript 이벤트 루프의 실행 순서를 시각적으로 표시
- 동기 코드, 마이크로태스크, 매크로태스크의 실행 순서 데모
- 콘솔을 통한 실행 과정 확인

## 개발 서버

개발 서버는 기본적으로 `http://localhost:3000`에서 실행됩니다.
브라우저가 자동으로 열리며, 코드 변경 시 자동으로 새로고침됩니다.
