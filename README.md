
<h2 align-items="center"> ✈️ 대한항공 REDESIGN ver. </h2>

![thumbnail](https://github.com/SOPT-33th-JointSeminar-3/Client-Web/assets/81505421/d5755850-ac09-4ed4-85d8-5a07e43e65ae)


<br/>

## 👥 Team

### 👨‍💻 팀원 정보

<table align="center">
    <tr align="center">
        <td style="min-width: 300px;">
            <a href="https://github.com/lydiacho">
              <img src="https://github.com/lydiacho.png" width="300">
              <br />
              <b>조승희</b>
            </a> 
        </td>
        <td style="min-width: 300px;">
            <a href="https://github.com/qwp0">
              <img src="https://github.com/qwp0.png" width="300">
              <br />
              <b>박소영</b>
            </a>
        </td>
        <td style="min-width: 300px;">
            <a href="https://github.com/ExceptAnyone">
              <img src="https://github.com/ExceptAnyone.png" width="300">
              <br />
              <b>장정안</b>
            </a> 
        </td>
    </tr>
    <tr align="center">
        <td>
            Web Lead
        </td>
        <td>
            Web FE
        </td>
        <td>
            Web FE
        </td>
    </tr>
</table>

<br/>

### 👨‍💻 팀원 역할 분담

#### ▶️ View & API

|               | View         | API                        |
| ------------- | ------------ | -------------------------- |
| 🐵 **조승희** | CalendarPage |
|               | FinishPage   |                            |
| 🐰 **박소영** | MainPage     | Main 게시물 불러오기 `GET` |
|               | SearchPage   | Search 공항 검색 `GET`     |
| 🐼 **장정안** | FlightPage   | Flight 항공편 검색 `GET`   |
|               | PaymentPage  | Payment 예약하기 `POST`    |

<br />

#### ▶️ Setting

|               | Category | Role              |
| ------------- | -------- | ----------------- |
| 🐵 **조승희** | Init     | 프로젝트 생성     |
|               | Init     | 디렉토리 세팅     |
|               | Init     | SVGR 세팅         |
|               | Final    | Vercel 세팅       |
| 🐰 **박소영** | Init     | GlobalStyle,theme |
| 🐼 **장정안** | Init     | ESLint,Prettier   |
|               | Final    | Vercel 배포       |

<br/>

## 📄 컨벤션 및 브랜치 전략

[🔗 컨벤션 Full ver.](https://lydiacho.notion.site/CONVENTION-f791c862b3284ccd8f7673470313437b?pvs=4)

<br/>

## 🎋 브랜치 전략

- **Issue** 먼저 생성하고 **해당 이슈 번호** 브랜치 생성
▶️ **브랜치명**
  - `main`: 최종 Merge를 하는 곳 (배포 브랜치)
  - `develop` : 개발할때 Merge하는 곳
  - `feature` : 기능을 개발하면서 각자 페이지별로 사용할 브랜치
  - `test` : 개인 연습 브랜치
 
▶️ **브랜치 전략**
  - `feature/페이지명`
    - feature/SelectPage _(파스칼)_
  - `페이지명/#이슈번호-기능설명`
    - SelectPage/#3-select-custom _(-로 연결)_

  ```
  develop
  ㄴ feature/SelectPage
  	ㄴ SelectPage/#3-select-custom
  ```

- 🚨 반드시 **직속 상위 브랜치**로 머지
- ↩️ PR은 1명 이상이 확인하면 merge (모두가 코드리뷰할 필요 없으나 반드시 한명은 확인해야 함)

<br />

### 📚 커밋 컨밴션

커밋 단위는 반드시 최소한의 작업 단위로 쪼개서, 한 PR당 10커밋 이상 넘어가지 않도록 합니다.

| 커밋     | 역할                                                                  |
| -------- | --------------------------------------------------------------------- |
| feat     | 기능 구현과 관련된 커밋                                               |
| style    | 코드 순서, css등의 포맷에 관한 커밋 (기능에 변화X)                    |
| design   | UI 구현 (css 구체화) 커밋                                             |
| fix      | 버그를 고친 경우                                                      |
| refactor | 더 좋은 코드로 개선한 경우 (기능에 변화가 없는 경우) ex-코드리뷰 반영 |
| docs     | README.md 등 문서를 작성한 경우                                       |
| chore    | 주석 추가, 자잘한 문서 수정                                           |

<br/>

## 📁 폴더 구조

```
├── 📁 node_modules
├── 📁 public
└── 📁 src
    ├── 📁 api
    └── 📁 assets
         ├── 📁 fonts
         ├── 📁 icon
         ├── 📁 image
         ├── custom.d.ts
         └── index.ts
    ├── 📁 components
    ├── 📁 constants
    ├── 📁 hooks
    ├── 📁 pages
    ├── 📁 api
    └── 📁 recoil
        └── atom.ts
    └── 📁 style
        ├── GlobalStyle.ts
        └── theme.ts
    ├── App.tsx
    ├── main.tsx
    └── Router.tsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── vite.config.ts
└── yarn.lock

```

📁 **src > assets**

- 필요한 아이콘 파일은 Figma 에서 **svg로 export** 한 후 `assets/icon`

  > ic_arrow.svg

- 필요한 이미지 파일은 Figma 에서 **png로 export** 한 후 `assets/image`폴더에 넣기

  > img_picture.png

- index.ts에서 svg 컴포넌트화 하여 export → 컴포넌트에서 import 시 컴포넌트처럼 불러오기
  > 파일명 : `ic_arrow.svg` _(snake case)_
  >
  > 컴포넌트명 (사용할 때) : `IcArrow.svg` _(Pascal case)_

📁 **src > components**

- **common 폴더**

  > 여러 페이지에서 사용할 공통 컴포넌트 (ex- Button, Header)

- **각 페이지별 폴더**

  > 각 페이지별 폴더 생성 후, 내부에 연관 컴포넌트 파일 생성하기

📁 **src > pages**
> 페이지의 최상단 컴포넌트. 각 컴포넌트를 하나의 페이지에서 호출하는 곳

📁 **src > api**
> 서버 합동 세미나에서 사용
> api 함수 모아놓는곳

📁 **src > hooks**
> custom hooks 정의하는 경우 이곳에서 정의 후 사용

📁 **src > constants**
> 상수 데이터 파일 분리하여 사용하는 경우 이곳에서 정의 후 사용

<br/>

## 🛠 기술 스택

| 역할                 | 종류                                                                                                                                                                                                              |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Library              | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)                                                                                                                |
| Programming Language | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)                                                                                             |
| Styling              | ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)                                                                           |
| Data Fetching        | ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white)                                                                                                                |
| Formatting           | ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white) |
| Package Manager      | ![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)                                                                                                                   |
| Version Control      | ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)  |
| State Management     | ![Recoil](https://img.shields.io/badge/recoil-f26b00?style=for-the-badge)                                                                                                                                         |

<br />

## 💡 주요 라이브러리

```
"vite-plugin-svgr": "^4.2.0"
```

<br />

## 🎀 시연 영상

[서비스명](영상링크)
