# 메디컬 잡다 프로토타입 (React)

메디컬 잡다 서비스의 모든 기능을 구현하는 React 기반 프로토타입 저장소입니다. 프로필 관리, 공고 탐색, 매칭 등 메디컬 잡다의 핵심 기능들을 프로토타입으로 개발 및 검증합니다.

## 🎯 프로젝트 개요

이 프로토타입은 **Vite + React + TypeScript**를 사용하여 구축되었으며, Claude Sonnet 4.5가 효율적으로 작업할 수 있도록 설계되었습니다.

### 핵심 기술 스택

- **React 18.3** - UI 라이브러리
- **TypeScript 5.6** - 타입 안정성
- **Vite 5.4** - 빌드 도구 (빠른 HMR)
- **CSS Modules** - 스타일링
- **React Router 6** - 라우팅

## 📁 프로젝트 구조

```
prototype/
├── src/
│   ├── components/              # 재사용 가능한 공통 컴포넌트
│   │   ├── common/
│   │   │   ├── Button.tsx       # 버튼 컴포넌트
│   │   │   ├── Input.tsx        # 입력 필드 컴포넌트
│   │   │   ├── Card.tsx         # 카드 컴포넌트
│   │   │   └── Toggle.tsx       # 토글 스위치
│   │   └── layout/
│   │       ├── Header.tsx       # 헤더
│   │       ├── Footer.tsx       # 푸터
│   │       └── PageLayout.tsx   # 페이지 레이아웃
│   │
│   ├── features/                # 기능별 모듈 (Feature-based)
│   │   └── profile/
│   │       ├── components/      # 프로필 전용 컴포넌트
│   │       │   ├── BasicInfo.tsx
│   │       │   ├── ProfileCompletion.tsx
│   │       │   └── ... (추가 구현 예정)
│   │       ├── types/
│   │       │   └── profile.types.ts  # TypeScript 타입 정의
│   │       └── ProfileManagement.tsx # 메인 프로필 페이지
│   │
│   ├── pages/                   # 페이지 컴포넌트
│   │   └── ProfilePage.tsx
│   │
│   ├── styles/                  # 글로벌 스타일
│   │   ├── theme.ts             # 디자인 시스템
│   │   └── global.css           # 글로벌 CSS
│   │
│   ├── App.tsx                  # 메인 앱 컴포넌트
│   └── main.tsx                 # 엔트리 포인트
│
├── public/                      # 정적 파일
├── index.html                   # HTML 템플릿
├── package.json                 # 의존성 관리
├── tsconfig.json                # TypeScript 설정
├── vite.config.ts               # Vite 설정
└── README.md                    # 프로젝트 문서
```

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 자동으로 `http://localhost:5173`이 열립니다 (Vite 기본 포트).

### 현재 구현된 페이지

- **프로필 관리 페이지** (`/`) - 간호사 프로필 관리 전체 기능
  - 기본 정보 입력
  - 간호사 면허 관리
  - 학력 정보
  - 경력 관리
  - 희망 근무조건 설정
  - 매칭 설정

### 3. 빌드

```bash
npm run build
```

빌드된 파일은 `dist/` 폴더에 생성됩니다.

### 4. 프리뷰

```bash
npm run preview
```

빌드된 프로젝트를 미리 볼 수 있습니다.

## 🎨 디자인 시스템

### 메디컬 잡다 브랜드 컬러 (Figma Design Tokens 기반)

```typescript
colors = {
  brand: {
    primary: "#2CA4FB",      // 메디컬 브랜드 블루
    primaryHover: "#2497F3", // 호버 상태
    primaryLight: "#F0F9FF", // 연한 배경
  },
  text: {
    default: "#333436",      // 기본 텍스트
    strong: "#18191B",       // 강조 텍스트
    subtle: "#838486",       // 보조 텍스트
    brand: "#2497F3",        // 브랜드 텍스트
  },
  accent: {
    red: { default: "#F1392C" },
    green: { default: "#02C551" },
  },
  status: {
    error: "#FB4E4E",
    success: "#41AC4D",
    warning: "#F59E0B",
  },
};
```

모든 디자인 토큰은 `src/styles/theme.ts`에 정의되어 있으며, Figma 디자인 시스템과 동기화되어 있습니다.

## 📦 컴포넌트 라이브러리

### 공통 컴포넌트

#### Button

```tsx
import Button from "@components/common/Button";

<Button variant="primary" size="md" onClick={handleClick}>
  클릭
</Button>;
```

**Props:**

- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
- `size`: 'sm' | 'md' | 'lg'
- `fullWidth`: boolean
- `loading`: boolean

#### Input

```tsx
import Input from "@components/common/Input";

<Input
  label="이름"
  value={name}
  onChange={handleChange}
  required
  fullWidth
  error="에러 메시지"
/>;
```

#### Card

```tsx
import Card from "@components/common/Card";

<Card padding="md" shadow="base">
  컨텐츠
</Card>;
```

#### Toggle

```tsx
import Toggle from "@components/common/Toggle";

<Toggle checked={isEnabled} onChange={setIsEnabled} label="매칭 활성화" />;
```

## 📝 TypeScript 타입 정의

모든 프로필 관련 타입은 `src/features/profile/types/profile.types.ts`에 정의되어 있습니다.

```typescript
import type {
  Profile,
  BasicInfo,
  Education,
} from "@features/profile/types/profile.types";
```

### 주요 타입

- `Profile` - 전체 프로필
- `BasicInfo` - 기본 정보
- `Education` - 학력 정보
- `Experience` - 경력 정보
- `NurseLicense` - 간호사 면허
- `ClinicalExperience` - 임상 경험
- `WorkPreferences` - 희망 근무 조건
- `MatchingSettings` - 매칭 설정

## 🔧 Path Alias 설정

TypeScript와 Vite에서 Path Alias가 설정되어 있습니다:

```typescript
import Button from "@components/common/Button";
import { Profile } from "@features/profile/types/profile.types";
import ProfilePage from "@pages/ProfilePage";
import theme from "@styles/theme";
```

## 🌟 개발 가이드

### 새로운 컴포넌트 추가

1. **공통 컴포넌트**: `src/components/common/`에 추가
2. **기능별 컴포넌트**: `src/features/{feature}/components/`에 추가
3. **CSS Modules 사용**: `ComponentName.module.css` 형식

### 컴포넌트 작성 패턴

```tsx
import React from "react";
import styles from "./MyComponent.module.css";

export interface MyComponentProps {
  title: string;
  onClick?: () => void;
}

const MyComponent: React.FC<MyComponentProps> = ({ title, onClick }) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      {onClick && <button onClick={onClick}>클릭</button>}
    </div>
  );
};

export default MyComponent;
```

### 상태 관리

현재는 `useState`를 사용한 로컬 상태 관리를 사용합니다.
추후 필요시 Context API 또는 상태 관리 라이브러리 추가 가능.

## 🔄 다음 단계 (구현 예정)

### 추가 구현이 필요한 프로필 섹션

- [ ] 셀프 브랜딩 (SelfBranding.tsx)
- [ ] 학력 정보 (Education.tsx)
- [ ] 경력 정보 (Experience.tsx)
- [ ] 간호사 면허 (NurseLicense.tsx)
- [ ] 임상 경험 (ClinicalExperience.tsx)
- [ ] 간호교육 이수 (NursingEducation.tsx)
- [ ] 자격증 (Certifications.tsx)
- [ ] 희망 근무 조건 (WorkPreferences.tsx)
- [ ] 매칭 설정 (MatchingSettings.tsx)
- [ ] 섹션 네비게이션 (SectionNavigation.tsx)

### 기능 개선

- [ ] 커스텀 훅 구현 (useProfile, useProfileCompletion)
- [ ] 유틸리티 함수 (validation.ts, completion.ts)
- [ ] API 연동 준비
- [ ] 폼 검증 강화
- [ ] 에러 핸들링
- [ ] 로딩 상태 관리

## 🎓 Claude Sonnet 4.5 활용 팁

이 프로젝트는 Claude가 효율적으로 작업할 수 있도록 설계되었습니다:

1. **명확한 타입 정의**: TypeScript로 모든 데이터 구조 정의
2. **컴포넌트 분리**: 단일 책임 원칙에 따라 작은 컴포넌트로 분리
3. **Feature-based 구조**: 도메인 중심으로 코드 구성
4. **일관된 네이밍**: 파일명, 변수명 일관성 유지
5. **CSS Modules**: 스타일 충돌 방지

### Claude에게 작업 요청하는 방법

✅ **좋은 예:**

```
"BasicInfo 컴포넌트를 참고해서 Education 컴포넌트를 만들어줘.
학력 정보를 추가/삭제할 수 있어야 하고, profile.types.ts의 Education 타입을 사용해."
```

❌ **나쁜 예:**

```
"학력 폼 만들어줘"
```

## 📱 반응형 디자인

모바일 우선(Mobile-first) 접근 방식을 사용합니다.

```css
/* 모바일 기본 스타일 */
.container {
  padding: 1rem;
}

/* 태블릿 이상 */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

/* 데스크톱 */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
  }
}
```

## 🧪 테스트

현재는 테스트가 구현되지 않았습니다. 추후 추가 예정:

- Vitest (단위 테스트)
- React Testing Library (컴포넌트 테스트)

## 🎬 빠른 시작 가이드

처음 프로젝트를 클론했다면:

```bash
# 1. 프로젝트 디렉토리로 이동
cd cursor-for-product-manager/prototype

# 2. 의존성 설치 (최초 1회)
npm install

# 3. 개발 서버 실행
npm run dev
```

개발 서버가 실행되면 브라우저에서 `http://localhost:5173`을 열어 프로필 관리 페이지를 확인할 수 있습니다.

## 🎨 디자인 시스템 사용법

프로젝트는 Figma 디자인 토큰과 동기화되어 있습니다. 색상을 사용할 때:

```typescript
import theme from '@styles/theme';

// ✅ 권장
style={{ color: theme.colors.text.default }}
style={{ backgroundColor: theme.colors.brand.primary }}

// ❌ 비권장 (하드코딩)
style={{ color: '#333436' }}
```

## 📄 라이선스

이 프로젝트는 메디컬 잡다 내부 프로토타입용입니다.

## 📞 문의

- **PRD 관련**: 제품팀
- **개발 관련**: 개발팀
- **디자인 관련**: 디자인팀

---

**마지막 업데이트**: 2025-10-12
**버전**: 1.1.0  
**상태**: 프로필 관리 페이지 완성 (Figma 디자인 토큰 적용)
