# 🚀 Codeit Bootcamp FE 19 - Sprint Missions

> Sprint Missions 기록 저장소

---

## 📁 브랜치 구조

- Basic-강지현 : 개인 기본 브랜치
- Basic-강지현-sprint1 : Sprint 1 과제 브랜치
- Basic-강지현-sprint2 : Sprint 2 과제 브랜치
- Basic-강지현-sprint3 : Sprint 3 과제 브랜치

---

## 🚀 Sprint 진행 현황

| Sprint | 브랜치명 | 상태 |
|--------|----------|------|
| Sprint 1 | `Basic-강지현-sprint1` | ✅ 완료 |
| Sprint 2 | `Basic-강지현-sprint2` | 🔧 진행 중 |
| Sprint 3 | `Basic-강지현-sprint3` | ⏳ 예정 |

---

## 🧾 커밋 메시지 컨벤션

| Gitmoji | 타입     | 설명 |
|:-------:|:--------:|------|
| ✨     | feat     | 새로운 기능 추가 |
| 📦️     | chore    | 컴파일된 파일 추가/수정 |
| 🐛     | fix      | 버그 수정 |
| 🎨     | style    | 스타일 변경 (UI 수정, 코드 정렬, 파일/폴더 구조 변경 등) |
| ♻️     | refactor | 코드 리팩토링 (기능 변경 없이 코드 개선) |
| 📝     | docs     | 문서 수정 (README, 주석 등) |
| 🔥     | remove   | 불필요한 코드/파일 삭제 |
| ⏪️     | revert   | 이전 커밋 되돌리기 |

---

## 🛠 프로젝트 디렉토리 구조
```
19-Sprint-Mission/
┣ 📂 css
┃ ┗ 🎨 style.css
┣ 📂 images
┃ ┣ 📂 icons
┃ ┃ ┣ 🔷 ic-facebook.svg
┃ ┃ ┣ 🔷 ic-instagram.svg
┃ ┃ ┣ 🔷 ic-twitter.svg
┃ ┃ ┗ 🔷 ic-youtube.svg
┃ ┣ 📂 index
┃ ┃ ┣ 🖼️ img-hero-bottom.png
┃ ┃ ┣ 🖼️ img-hero-top.png
┃ ┃ ┣ 🖼️ img-hot-item.png
┃ ┃ ┣ 🖼️ img-register..png
┃ ┃ ┗ 🖼️ img-search.png
┃ ┣ 🔷 favicon.svg
┃ ┣ 🔷logo-icon.svg
┃ ┗ 🔷logo-text.svg
┣ 📄 faq.html
┣ 📄 index.html
┣ 📄 items.html
┣ 📄 login.html
┣ 📄 privacy.html
┗ 📄 README.md
```

---

## 👩‍💻 Sprint Mission

### Sprint 1

#### 기본 요구사항
- 피그마 디자인에 맞게 페이지를 만들어 주세요.
- React와 같은 UI 라이브러리를 사용하지 않고 진행합니다.
- HTML, CSS 파일을 Netlify로 배포해 주세요.
- PC사이즈만 고려해 주어진 디자인으로 구현합니다.

#### 기본 체크리스트
- [x] 랜딩 페이지의 url path는 루트('/')로 설정합니다.
- [x] title은 "판다마켓"로 설정합니다.
- [x] 화면의 너비가 `1920px` 이상이면 하늘색 배경색은 너비를 꽉 채우도록 채워지고, 내부 요소들의 위치는 고정되고, 여백만 커지도록 합니다.
- [x] 화면의 너비가 `1920px` 보다 작아질 때, "판다마켓" 로고의 왼쪽 여백 `200px`"로그인" 버튼의 오른쪽 여백 `200px`이 유지되고, 화면의 너비가 작아질수록 두 요소간 거리가 가까워지도록 설정합니다.
- [x] 클릭으로 기능이 동작해야 하는 경우, 사용자가 클릭할 수 있는 요소임을 알 수 있도록 CSS 속성 `cursor: pointer` 로 설정합니다.
- [x] "판다마켓" 클릭 시 루트 페이지('/')로 이동합니다.
- [x] '로그인'버튼 클릭 시 로그인 페이지('/login')로 이동합니다 (빈 페이지)
- [x] "구경하러가기"버튼 클릭 시('/items')로 이동합니다.(빈 페이지)
- [x] "Privacy Policy", "FAQ"는 클릭 시 각각 Privacy 페이지('/privacy'), FAQ 페이지('/faq')로 이동합니다.(모두 빈 페이지)
- [x] 페이스북, 트위터, 유튜브, 인스타그램 아이콘을 클릭 시 각각의 홈페이지로 새로운 창이 열리면서 이동합니다.

#### 심화 체크리스트
- [x] 사용자의 브라우저가 크고 작아짐에 따라 페이지의 요소간 간격, 요소의 크기, font-size 등 모든 크기와 관련된 값이 크고 작아지도록 설정해 보세요.(설정값은 자유입니다)

---

### Sprint 2

#### 기본 요구사항
- Github에 PR(Pull Request)을 만들어서 미션을 제출합니다.
- Netlify에 파일 배포가 아닌 포크한 Github 레포지토리로 연결합니다.
- 피그마 디자인에 맞게 페이지를 만들어 주세요.
- React와 같은 UI 라이브러리를 사용하지 않고 진행합니다.

#### 기본 체크리스트

##### 공통
- [ ] 아래로 스크롤 해도 상단 네비게이션 바(Global Navigation Bar)가 최상단에 고정됩니다.
- [ ] "판다마켓" 클릭 시 루트 페이지("/")로 이동합니다.(새로고침)
- [ ] 로그인 페이지, 회원가입 페이지 모두 로고 위 상단 여백이 동일합니다.
- [ ] SNS 아이콘들은 클릭시 각각 실제 서비스 홈페이지로 이동합니다.

##### 로그인 페이지
- [ ] "회원가입"버튼 클릭 시 "/signup" 페이지로 이동합니다.

##### 회원가입 페이지
- [ ] "로그인"버튼 클릭 시 "/login" 페이지로 이동합니다.

#### 심화 체크리스트
- [ ] palette에 있는 color값들을 css 변수로 등록하고 사용해 주세요.
- [ ] 비밀번호 input 요소 위에 비밀번호를 확인할 수 있는 아이콘을 추가해 주세요.

---