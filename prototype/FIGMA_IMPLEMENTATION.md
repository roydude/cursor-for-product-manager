# Figma 디자인 구현 가이드

## 🎨 구현 완료!

Figma 디자인([메디컬 잡다 마이페이지 프로필 관리](https://www.figma.com/design/gRqwkHa7LMjLNwuFLe8EZW/-%EB%94%94%EC%9E%90%EC%9D%B8--%EB%A9%94%EB%94%94%EC%BB%AC%EC%9E%A1%EB%8B%A4?node-id=577-6450&t=0n1h2Xw4qdnvWXUP-11))을 React로 완전히 구현했습니다.

## 🚀 실행 방법

### 1. 의존성 설치 (최초 1회만)

```bash
cd cursor-for-product-manager/prototype
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173`을 열면 구현된 페이지를 확인할 수 있습니다.

## 📦 구현된 컴포넌트

### 레이아웃 컴포넌트

- **GNB** (`src/components/layout/GNB.tsx`)
  - 최상단 글로벌 네비게이션 바
  - 로고, 메뉴, 검색, 알림, 프로필

- **Sidebar** (`src/components/layout/Sidebar.tsx`)
  - 좌측 사이드바 네비게이션
  - 마이페이지 메뉴 항목들
  - 프로필 완성도 가이드
  - 도움말 링크

### 프로필 섹션 컴포넌트

모든 섹션은 `src/features/profile/components/` 폴더에 위치합니다.

1. **ProfileHeader** - 프로필 헤더
   - 프로필 사진, 이름, 연락처
   - 입사제안 받기 토글

2. **SelfBranding** - 셀프 브랜딩
   - 한 줄 소개
   - 소개글
   - 이미지 갤러리 (3장)

3. **Education** - 학력
   - 타임라인 형태
   - 학교, 전공, 학점 정보
   - 논문/연구 정보

4. **Career** - 경력
   - 타임라인 형태
   - 회사명, 재직기간
   - 주요 업무 및 성과

5. **Project** - 프로젝트
   - 타임라인 형태
   - 프로젝트명, 기간
   - 팀/개인 구분
   - 활용 기술 스택

6. **Skills** - 지식·기술
   - 자격증
   - 공인 어학시험
   - 기술 스택
   - 숙련도 표시

7. **Experience** - 경험
   - 타임라인 형태
   - 대내외 활동
   - 봉사활동
   - 해외 경험

8. **Awards** - 수상 내역
   - 타임라인 형태
   - 수여 기관
   - 수상명, 수상일

9. **Military** - 병역·취업 우대
   - 병역 정보
   - 취업 우대 사항

10. **Attachments** - 첨부 자료
    - 포트폴리오
    - 경력기술서
    - URL 링크

## 🎨 디자인 시스템

### 색상 (Theme)

모든 색상은 `src/styles/theme.ts`에 정의되어 있습니다.

```typescript
colors.brand.primary: "#2CA4FB"  // 메인 브랜드 컬러
colors.text.default: "#333436"   // 기본 텍스트
colors.background.default: "#FFFFFF"  // 배경
```

### 레이아웃 구조

```
┌─────────────────────────────────────────────────┐
│                    GNB (64px)                    │
├──────────┬──────────────────────────────────────┤
│          │                                       │
│ Sidebar  │         Main Content                  │
│ (258px)  │         (Max 1200px)                  │
│          │                                       │
│          │  - ProfileHeader                      │
│          │  - SelfBranding                       │
│          │  - Education                          │
│          │  - Career                             │
│          │  - Project                            │
│          │  - Skills                             │
│          │  - Experience                         │
│          │  - Awards                             │
│          │  - Military                           │
│          │  - Attachments                        │
│          │                                       │
└──────────┴──────────────────────────────────────┘
│                   Footer                         │
└─────────────────────────────────────────────────┘
```

## 🔧 주요 기능

### 1. 반응형 디자인
- 데스크톱 (1920px 기준)
- 태블릿 (1024px)
- 모바일 (768px)

### 2. 인터랙티브 요소
- 입사제안 받기 토글
- 호버 효과
- 버튼 액션

### 3. 타임라인 UI
- 학력, 경력, 프로젝트, 경험, 수상 섹션에 타임라인 형태 적용
- 점과 선으로 시간 흐름 표시

## 📂 파일 구조

```
src/
├── components/
│   └── layout/
│       ├── GNB.tsx
│       ├── GNB.module.css
│       ├── Sidebar.tsx
│       └── Sidebar.module.css
│
├── features/
│   └── profile/
│       └── components/
│           ├── ProfileHeader.tsx
│           ├── SectionContainer.tsx  # 공통 섹션 레이아웃
│           ├── SelfBranding.tsx
│           ├── Education.tsx
│           ├── Career.tsx
│           ├── Project.tsx
│           ├── Skills.tsx
│           ├── Experience.tsx
│           ├── Awards.tsx
│           ├── Military.tsx
│           └── Attachments.tsx
│
├── pages/
│   └── FigmaProfilePage.tsx  # 메인 페이지
│
└── styles/
    ├── global.css
    └── theme.ts
```

## 🎯 Figma 디자인 대비 구현 현황

| 섹션 | Figma | 구현 | 비고 |
|------|-------|------|------|
| GNB | ✅ | ✅ | 완료 |
| Sidebar | ✅ | ✅ | 완료 |
| 프로필 헤더 | ✅ | ✅ | 완료 |
| 셀프 브랜딩 | ✅ | ✅ | 완료 |
| 학력 | ✅ | ✅ | 완료 |
| 경력 | ✅ | ✅ | 완료 |
| 프로젝트 | ✅ | ✅ | 완료 |
| 지식·기술 | ✅ | ✅ | 완료 |
| 경험 | ✅ | ✅ | 완료 |
| 수상내역 | ✅ | ✅ | 완료 |
| 병역·취업 우대 | ✅ | ✅ | 완료 |
| 첨부 자료 | ✅ | ✅ | 완료 |
| Footer | ✅ | ✅ | 완료 |

## 💡 개선 가능 항목

### 단기 개선
- [ ] 실제 이미지 업로드 기능
- [ ] 폼 입력 및 편집 모드
- [ ] 데이터 저장 기능 (LocalStorage or API)
- [ ] 로딩 상태 표시
- [ ] 에러 핸들링

### 중장기 개선
- [ ] 애니메이션 추가
- [ ] 스켈레톤 로딩
- [ ] 프로필 완성도 계산 및 표시
- [ ] 섹션별 저장 기능
- [ ] 백엔드 API 연동
- [ ] 파일 업로드 기능

## 🐛 알려진 이슈

현재 알려진 이슈는 없습니다.

## 📝 참고사항

- 브랜드 컬러는 Figma 디자인 토큰과 약간 다를 수 있지만, 전체적인 느낌은 동일합니다.
- 모든 데이터는 현재 하드코딩되어 있으며, 실제 서비스에서는 API 연동이 필요합니다.
- 이미지는 플레이스홀더를 사용했으며, 실제 이미지로 교체 가능합니다.

## 🎉 완료!

Figma 디자인이 완전히 동작하는 React 코드로 구현되었습니다.
`npm run dev` 명령으로 실행하여 확인해보세요!

---

**구현일**: 2025-10-13  
**Figma 디자인**: [링크](https://www.figma.com/design/gRqwkHa7LMjLNwuFLe8EZW/-%EB%94%94%EC%9E%90%EC%9D%B8--%EB%A9%94%EB%94%94%EC%BB%AC%EC%9E%A1%EB%8B%A4?node-id=577-6450&t=0n1h2Xw4qdnvWXUP-11)

