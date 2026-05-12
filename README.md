# K-Move Sydney 채용 웹사이트

KOTRA K-Move Sydney의 공식 채용 공고 웹사이트입니다. 노션 데이터베이스와 연동되어 실시간으로 채용 공고를 관리할 수 있습니다.

---

## 기술 스택

| 항목 | 기술 |
|------|------|
| 프레임워크 | Next.js 16 (App Router) |
| CMS | Notion API |
| 스타일링 | Vanilla CSS (CSS Modules) |
| 데이터 갱신 | ISR (60초 자동 갱신) |
| 배포 | Vercel |

---

## 주요 기능

- 노션 데이터베이스에서 채용 공고 자동 연동
- 지역 / 고용형태 필터링 및 실시간 검색
- 공고 상세 페이지 (직무 설명, 지원 링크)
- ISR 방식으로 노션 수정 시 60초 내 자동 반영
- 반응형 디자인 (모바일 지원)

---

## 페이지 구조

| 페이지 | 경로 | 설명 |
|--------|------|------|
| 메인 | `/` | 히어로, 최신 공고 6개, 특장점 |
| 채용 목록 | `/jobs` | 전체 공고 + 검색 + 필터 |
| 공고 상세 | `/jobs/[id]` | 직무 설명, 지원 버튼 |
| 소개 | `/about` | K-Move 프로그램 소개 |

---

## 로컬 실행 방법

### 1. 저장소 클론

```bash
git clone https://github.com/BrightCloud05/K-MOVE-JOB-POSTING.git
cd K-MOVE-JOB-POSTING
```

### 2. 패키지 설치

```bash
npm install
```

### 3. 환경 변수 설정

`.env.local` 파일을 생성하고 아래 내용을 입력합니다:

```
NOTION_API_KEY=your_notion_integration_token
NOTION_DATABASE_ID=your_notion_database_id
REVALIDATE_SECRET=your_revalidate_secret
```

### 4. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

---

## 노션 연동 방법

1. [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations) 에서 Integration 생성
2. 채용공고 데이터베이스에 Integration 연결 (데이터베이스 `...` → 연결 추가)
3. `.env.local`에 API 키와 데이터베이스 ID 입력

### 노션 데이터베이스 속성

| 속성명 | 타입 | 필수 |
|--------|------|------|
| 직무명 | Title | ✅ |
| 회사명 | Text | ✅ |
| 지역 | Select | ✅ |
| 고용형태 | Select | ✅ |
| 마감일 | Date | |
| 급여 | Text | |
| 상태 | Status | ✅ |
| 설명 | Text | |
| 지원링크 | URL | |
| 태그 | Multi-select | |

---

## Vercel 배포

1. [vercel.com](https://vercel.com) 에서 GitHub 저장소 Import
2. Environment Variables에 아래 3개 추가:
   - `NOTION_API_KEY`
   - `NOTION_DATABASE_ID`
   - `REVALIDATE_SECRET`
3. Deploy 클릭

---

## 채용 공고 관리 방법

노션 데이터베이스에서 직접 공고를 추가/수정/삭제하면 **60초 이내** 웹사이트에 자동 반영됩니다.

- **상태 → `In progress`**: 웹사이트에 공고 표시
- **상태 → `Done`**: 웹사이트에서 공고 숨김

---

## 문의

📞 02 8233 4066 / 4077  
📧 K-Move@kotra.org.au
