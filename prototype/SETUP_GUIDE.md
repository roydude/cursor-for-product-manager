# 메디컬 잡다 프로토타입 설정 가이드

## 🚀 빠른 시작

### 1단계: 의존성 설치

```bash
cd cursor-for-product-manager/prototype
npm install
```

설치되는 패키지:

- `react`, `react-dom` - React 라이브러리
- `react-router-dom` - 라우팅
- `typescript` - 타입 시스템
- `vite` - 빌드 도구
- `@vitejs/plugin-react` - React 플러그인

### 2단계: 개발 서버 실행

```bash
npm run dev
```

서버가 시작되면 자동으로 브라우저가 열립니다:

- URL: `http://localhost:3000`
- HMR(Hot Module Replacement) 활성화
- 코드 변경 시 자동 새로고침

### 3단계: 프로젝트 탐색

1. **기본 페이지 확인**

   - 프로필 관리 페이지가 표시됩니다
   - 기본 정보 섹션 작동 확인
   - 프로필 완성도 표시 확인

2. **컴포넌트 수정 테스트**
   - `src/features/profile/components/BasicInfo.tsx` 파일 열기
   - 텍스트 변경 후 저장
   - 브라우저에서 즉시 반영 확인

## 📦 프로젝트 구조 이해

### 핵심 폴더

```
src/
├── components/common/    ← 재사용 가능한 UI 컴포넌트
├── features/profile/     ← 프로필 기능 관련 코드
├── pages/               ← 페이지 컴포넌트
└── styles/              ← 디자인 시스템, 글로벌 CSS
```

### 파일 네이밍 규칙

- 컴포넌트: `PascalCase.tsx` (예: `Button.tsx`)
- 스타일: `ComponentName.module.css`
- 타입: `*.types.ts`
- 유틸: `*.utils.ts`

## 🎨 새로운 컴포넌트 추가하기

### 예제: Select 컴포넌트 추가

1. **컴포넌트 파일 생성**

```bash
# src/components/common/Select.tsx
```

2. **컴포넌트 코드 작성**

```tsx
import React from "react";
import styles from "./Select.module.css";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Array<{ value: string; label: string }>;
  fullWidth?: boolean;
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
  fullWidth,
  ...props
}) => {
  return (
    <div className={`${styles.container} ${fullWidth ? styles.fullWidth : ""}`}>
      {label && <label className={styles.label}>{label}</label>}
      <select className={styles.select} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
```

3. **스타일 파일 생성**

```bash
# src/components/common/Select.module.css
```

4. **사용하기**

```tsx
import Select from "@components/common/Select";

<Select
  label="병원 규모"
  options={[
    { value: "tertiary", label: "상급종합병원" },
    { value: "general", label: "종합병원" },
  ]}
  fullWidth
/>;
```

## 🔧 Path Alias 설정 활용

프로젝트에 Path Alias가 설정되어 있습니다:

```typescript
// ❌ 상대 경로 (사용하지 말 것)
import Button from "../../../components/common/Button";

// ✅ Path Alias (권장)
import Button from "@components/common/Button";
```

사용 가능한 Alias:

- `@/*` → `src/*`
- `@components/*` → `src/components/*`
- `@features/*` → `src/features/*`
- `@pages/*` → `src/pages/*`
- `@styles/*` → `src/styles/*`

## 📝 프로필 섹션 추가하기

### 예제: 학력 정보 컴포넌트 추가

1. **타입 확인** (`src/features/profile/types/profile.types.ts`)

```typescript
export interface Education {
  id: string;
  schoolType: string;
  schoolName: string;
  major: string;
  // ...
}
```

2. **컴포넌트 생성**

```bash
# src/features/profile/components/Education.tsx
```

3. **BasicInfo.tsx 참고해서 구현**

```tsx
import React from "react";
import Card from "@components/common/Card";
import Input from "@components/common/Input";
import Button from "@components/common/Button";
import type { Education as EducationType } from "../types/profile.types";

export interface EducationProps {
  data: EducationType[];
  onChange: (data: EducationType[]) => void;
}

const Education: React.FC<EducationProps> = ({ data, onChange }) => {
  const addEducation = () => {
    // 구현
  };

  return (
    <Card>
      <h3>학력 정보</h3>
      {/* 폼 구현 */}
    </Card>
  );
};

export default Education;
```

4. **ProfileManagement.tsx에 추가**

```tsx
import Education from "./components/Education";

// ...

<Education
  data={profile.education}
  onChange={(data) => setProfile({ ...profile, education: data })}
/>;
```

## 🎯 Claude에게 작업 요청하는 방법

### ✅ 효과적인 요청 예시

**1. 구체적인 컴포넌트 생성 요청**

```
"BasicInfo 컴포넌트와 동일한 구조로 Experience 컴포넌트를 만들어줘.
- profile.types.ts의 Experience 타입 사용
- 경력 추가/삭제 기능 포함
- 의료기관 경력인 경우 추가 필드 표시 (isMedicalInstitution 체크 시)"
```

**2. 기존 컴포넌트 수정 요청**

```
"Button 컴포넌트에 icon props를 추가해줘.
- icon은 React.ReactNode 타입
- 아이콘은 텍스트 왼쪽에 표시
- 아이콘만 있는 경우도 지원"
```

**3. 스타일 개선 요청**

```
"Card 컴포넌트의 hover 효과를 개선해줘.
- 마우스 오버 시 약간 위로 올라오는 애니메이션
- 그림자 진하게
- 트랜지션 부드럽게"
```

### ❌ 비효과적인 요청 예시

```
"학력 폼 만들어줘"  → 너무 모호함
"스타일 예쁘게 해줘" → 구체적이지 않음
"버그 고쳐줘" → 어떤 버그인지 명시 필요
```

## 🐛 문제 해결

### 포트가 이미 사용 중일 때

```bash
# vite.config.ts에서 포트 변경
server: {
  port: 3001,  // 다른 포트로 변경
}
```

### 타입 에러가 발생할 때

```bash
# TypeScript 서버 재시작 (VSCode)
Ctrl+Shift+P → "TypeScript: Restart TS Server"
```

### CSS가 적용되지 않을 때

```bash
# 브라우저 캐시 삭제 후 재시작
Ctrl+Shift+R (Windows)
Cmd+Shift+R (Mac)
```

### Path Alias가 작동하지 않을 때

```bash
# TypeScript 서버 재시작
# tsconfig.json 확인
# vite.config.ts의 alias 설정 확인
```

## 📚 추가 학습 자료

### React

- [React 공식 문서](https://react.dev)
- [TypeScript + React](https://react-typescript-cheatsheet.netlify.app)

### Vite

- [Vite 공식 문서](https://vitejs.dev)

### CSS Modules

- [CSS Modules GitHub](https://github.com/css-modules/css-modules)

## 💡 유용한 VSCode 확장

프로젝트 작업에 도움이 되는 확장:

- **ES7+ React/Redux/React-Native snippets**
- **TypeScript Vue Plugin (Volar)**
- **CSS Modules**
- **ESLint**
- **Prettier**

## 🎉 다음 단계

1. 프로필 섹션 하나씩 구현하기
2. 커스텀 훅 만들기 (useProfile, useForm)
3. 폼 검증 로직 추가
4. API 연동 준비
5. 에러 핸들링 개선

---

문제가 발생하면 README.md의 "문의" 섹션을 참고하세요!
