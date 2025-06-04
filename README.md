# WEEBUR

### 🔗 [배포 사이트 바로가기](https://weebur-assignment-git-main-yeonnjs-projects.vercel.app/)

---

## 📦 기술 스택

- **Framework**: [Next.js(App Router)](https://nextjs.org/docs/app)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **패키지 매니저**: [pnpm](https://pnpm.io/ko/)
- **Form 관리**: [React Hook Form](https://react-hook-form.com/)
- **스타일링**: [vanilla-extract](https://vanilla-extract.style/)

---

## 🛠️ 실행 방법

```bash
# 1. 패키지 설치
pnpm install

# 2. 로컬 서버 실행
pnpm run dev

# 3. 접속
https://localhost:3000/
```

---

## 📁 폴더 구조 (App Router 기준)

```bash
src
├── app
│   ├── (products)
│   │   ├── _components        # 상품 도메인 전용 컴포넌트
│   │   ├── _hooks             # 상품 도메인 전용 훅
│   │   ├── _utils             # 상품 도메인 전용 유틸
│   │   ├── new                # 상품 생성 페이지
│   │   │   ├── _apis.ts
│   │   │   ├── _queries.ts
│   │   │   ├── _types.ts
│   │   │   ├── layout.tsx
│   │   │   ├── loading.tsx
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── providers.tsx
│   ├── layout.tsx
│   ├── loading.tsx
│   └── page.tsx
├── components                # 공용 UI 컴포넌트
│   ├── button
│   ├── formInput
│   └── radio
├── providers                 # 전역 context/provider
│   └── HydrationBoundary.tsx
├── styles                    # 전역 스타일
│   └── global.css.ts
├── utils                     # 공통 유틸 함수
│   ├── fetchAPI.ts
│   └── string.ts
public
└── favicon.ico
```

> **개발자 경험(Developer Experience, DX) 향상을 위해**  
> 도메인 기반으로 관련된 컴포넌트, 훅, 유틸리티 함수를 그룹화하고, 전역적으로 사용하는 아토믹 단위의 코드들은 루트 레벨에서 관리하여 유지보수성과 가독성을 높였습니다.

---

## 🛒 상품 리스트 페이지 (`/`)

- 최초 방문 시 50% 확률로 `list` 또는 `grid` 뷰 방식이 랜덤 지정됩니다.
- 사용자는 지정된 뷰 방식만을 볼 수 있으며, 이후 24시간 동안 동일한 방식이 유지됩니다.
- 24시간 경과 후 다시 접속하면 새로운 뷰 방식이 무작위로 다시 설정됩니다.

### ✅ 구현 방식

- `localStorage`를 활용하여 사용자 진입 시점의 뷰 타입을 저장합니다.
- 저장된 시간과 현재 시간을 비교하여 24시간이 지났는지 확인 후, 새로운 랜덤 뷰로 교체합니다.

---

## 📝 상품 생성 페이지 (`/new`)

### ✅ 주요 기술

- `React Hook Form` 기반의 폼 처리
  - `Controller`를 통해 커스텀 컴포넌트(FormInput, Radio 등)의 상태 제어
  - 각 필드별 유효성 검사 적용

### 📋 유효성 조건

| 필드명               | 필수 여부 | 유효성 조건                          |
| -------------------- | --------- | ------------------------------------ |
| `title`              | ✅        | 최대 15자 이내 입력                  |
| `description`        | ❌        | -                                    |
| `price`              | ✅        | 1,000 이상 입력                      |
| `discountPercentage` | ❌        | 0 ~ 100 사이 입력                    |
| `brand`              | ✅        | `Apple`, `Samsung`, `Weebur` 중 택 1 |

---

## ⚙️ 개발 중 고려 사항 및 해결 이슈

### 📂 폴더 구조 고민

- 도메인 중심의 구조 설계
  - 예: `products` 도메인에 관련된 모든 컴포넌트, 훅, 유틸 함수들을 한곳에 그룹화하여 도메인 독립성과 유지보수성 강화
- 전역에서 재사용되는 공통 요소(Button, FormInput 등)는 `components`, `utils` 등 루트에서 관리

### ❗ `react-hook-form` maxLength 미적용 이슈

- `input` 요소의 `maxLength`가 동작하지 않는 문제 발생
- `Controller`를 통해 입력 값을 제어하고, 15자를 초과하는 입력 자체를 막아 명확한 유효성 검사 구현

### ♻️ 컴포넌트 재사용성 강화

- `Button`, `FormInput`, `Radio`, `RadioGroup` 등을 공통 컴포넌트로 분리
- 다양하게 재사용 가능하도록 설계

---
