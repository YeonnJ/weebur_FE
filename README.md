# WEEBUR

#### 기술 스택

- **Framework**: [Next.js(App Router)](https://nextjs.org/docs/app)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **패키지 매니저** : [pnpm](https://pnpm.io/ko/)
- **Form 관리**: [React Hook Form](https://react-hook-form.com/)
- **스타일링**: [vanilla-extract](https://vanilla-extract.style/)

## 실행 방법

```bash
# 1. 설치
pnpm install

# 2. local 실행
pnpm run dev

# 3. 접속
https://localhost:3000/
```

### 폴더 구조 (App Router)

```tsx
src
├── app
│   ├── (products)
│   │   ├── _components
│   │   ├── _hooks
│   │   ├── _utils
│   │   ├── new
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
├── components
│   ├── button
│   ├── formInput
│   └── radio
├── providers
│   └── HydrationBoundary.tsx
├── styles
│   └── global.css.ts
├── utils
│   ├── fetchAPI.ts
│   └── string.ts
public
├── favicon.ico

```

`app`: Next.js App Router 구조의 루트 디렉토리입니다.

`components`: 버튼, 입력 등 공용 UI 컴포넌트를 담고 있습니다.

`providers`: 전역 provider 및 context 관련 파일들.

`styles`: 전역 스타일 설정.

`utils`: 공통 함수 유틸 모음.

## 상품 리스트 페이지 (`/`)

- `/` 페이지에 최초 진입한 사용자에게 50% 확률로 'list' 또는 'grid' 뷰 방식을 랜덤 지정
- 사용자는 지정된 뷰 방식만을 볼 수 있으며, 이후 24시간 동안 동일한 방식이 유지
- 로컬스토리지에 저장된 시간과 현재시간을 비교하여, 24시간이 지났다면, 다시 진입 시 새로운 뷰 방식이 랜덤으로 지정

### 해결 방안

- 로컬스토리지를 활용하여 진입시점에 뷰 방식을 결정
- 사용자의 로컬스토리지에 현재시간과 viewMode 값을 객체로 저장하여, 시간을 비교하여 24시간이 지난경우 랜덤함수호출을 통해 새로운 viewMode로 변경해줍니다.

## 상품 생성 페이지 (`/new`)

### 사용 기술

- `React Hook Form`
  - `Controller`를 통한 유효성 검사

필드별 유효성:

| 필드명               | 필수 여부 | 유효성 조건                         |
| -------------------- | --------- | ----------------------------------- |
| `title`              | ✅        | 15자 이내                           |
| `description`        | ❌        |                                     |
| `price`              | ✅        | 1,000 이상 입력                     |
| `discountPercentage` | ❌        | 100이내로 입력                      |
| `brand`              | ✅        | Apple, Samsung, Weebur 중 하나 선택 |

## 개발 중 고려 사항 및 이슈

### `FormInput`

- react-hook-form에서 maxLength를 안먹는 이슈발생
- Reack Hook Form의 [Controller](https://www.react-hook-form.com/api/usecontroller/controller/)를 활용
- Controller를 통해 15자 이내인경우 아예 15글자이상 쓰지못하도록 막음으로써 명확하게 유효성검사로직작성

### `컴포넌트 재사용성`

- Button, FormInput, Radio, RadioGroup 등을 공통 컴포넌트로 분리하여 작업

### `react-hook-form`의 register와 `RadioGroup`의 충돌로 인한 버그

- Button, FormInput, Radio, RadioGroup 등을 공통 컴포넌트로 분리하여 작업
