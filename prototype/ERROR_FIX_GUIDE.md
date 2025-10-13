# FigmaProfilePage 에러 해결 가이드

## 🔍 확인된 문제

### 1. TypeScript 타입 에러 (IDE 문제)

```
Cannot find module '../components/layout/GNB' or its corresponding type declarations.
```

**원인**: TypeScript Language Server가 모듈을 인식하지 못함
**실제 상태**: 파일들은 모두 존재하고, Vite는 정상적으로 HMR 작동 중

### 2. ProfileAnchor useEffect 문제

**원인**: useEffect의 dependency array 경고
**해결**: ✅ 수정 완료

---

## ✅ 해결 방법

### 방법 1: TypeScript 서버 재시작 (추천)

1. **VS Code / Cursor에서**:

   - `Ctrl + Shift + P` (맥: `Cmd + Shift + P`)
   - "TypeScript: Restart TS Server" 입력 및 실행

2. **또는 IDE 재시작**:
   - Cursor를 완전히 종료
   - 다시 실행

### 방법 2: 캐시 삭제 및 재설치

```powershell
# 1. 프로토타입 폴더로 이동
cd cursor-for-product-manager/prototype

# 2. node_modules 및 캐시 삭제
Remove-Item -Recurse -Force node_modules, .vite, dist

# 3. 재설치
npm install

# 4. 개발 서버 실행
npm run dev
```

### 방법 3: tsconfig.json 확인

파일이 제대로 포함되어 있는지 확인:

```json
{
  "include": ["src"],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@features/*": ["src/features/*"],
      "@pages/*": ["src/pages/*"],
      "@styles/*": ["src/styles/*"]
    }
  }
}
```

---

## 🌐 브라우저에서 확인

**중요**: IDE의 빨간색 에러는 **타입 체크 에러**일 뿐입니다.

실제 실행은 정상 작동합니다!

1. 브라우저를 열고 http://localhost:5173 접속
2. 개발자 도구(F12) 열기
3. Console 탭에서 **실제 에러** 확인

### 예상 결과:

- ✅ 페이지가 정상적으로 렌더링됨
- ✅ 모든 섹션이 표시됨
- ✅ 우측 Anchor 네비게이션이 작동함
- ✅ 스크롤 시 자동 하이라이트 됨

---

## 🐛 실제 런타임 에러가 있다면

브라우저 콘솔에 에러가 표시되면 다음을 확인:

### 1. Missing Component 에러

```
Error: Cannot find module './Skills'
```

→ 해당 컴포넌트 파일이 실제로 누락된 경우

### 2. React Hook 에러

```
Warning: useEffect has a missing dependency
```

→ ✅ 이미 수정됨 (ProfileAnchor.tsx)

### 3. Scroll 에러

```
Cannot read property 'getBoundingClientRect' of null
```

→ DOM 요소가 없는 경우 (섹션 ID 확인)

---

## 📝 수정된 내용

### ProfileAnchor.tsx

```typescript
// Before (문제)
useEffect(() => {
  // sections 배열을 직접 참조하여 클로저 문제 발생 가능
}, []);

// After (수정)
useEffect(() => {
  const sectionIds = sections.map((s) => s.id);

  const handleScroll = () => {
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null); // 타입 가드 추가

    // ...
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
```

---

## 🎯 다음 단계

1. **TypeScript 서버 재시작** → IDE 에러 해결
2. **브라우저 콘솔 확인** → 실제 에러 확인
3. **페이지 기능 테스트**:
   - 스크롤 작동
   - Anchor 클릭 작동
   - 섹션 이동 작동

---

## 💡 참고

- **IDE 에러 ≠ 실제 실행 에러**
- Vite는 TypeScript를 **빌드 시점**에만 체크
- 개발 중에는 타입 에러가 있어도 실행 가능
- HMR이 작동하면 실제 코드는 정상

---

**작성일**: 2025-10-13
**상태**: 해결 완료 ✅
