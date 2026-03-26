# 🐼 Panda Market - Vanilla JS

> 바닐라 JS로 구현한 중고 거래 플랫폼

🔗 **배포 링크** : [🐼 Panda Market](https://panda-market-vanilla.netlify.app/)

## 🛠 기술 스택

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

## 📸 미리보기

### 랜딩 페이지
| **PC** | **Tablet** | **Mobile** |
|--------|------------|------------|
| ![index_desktop](https://github.com/user-attachments/assets/6c502849-618c-4d1e-91c6-1bd5c0428ddb) | ![index_tablet](https://github.com/user-attachments/assets/c75e955c-6528-4190-82fb-d0457063938b) | ![index_mobile](https://github.com/user-attachments/assets/a860abbd-8d9f-45d6-9851-9498dba75c67) |

### 로그인 페이지
<img width="960" alt="image" src="https://github.com/user-attachments/assets/3b9a2f13-7d40-4f2d-862e-7f9a2e9093d7" />

### 회원가입 페이지
<img width="960" alt="image" src="https://github.com/user-attachments/assets/7084df5a-1e9a-4224-b257-a8854371c557" />

## 📁 디렉토리 구조

```
panda-market/
┣ 📂 css                    # 스타일시트
┃ ┣ auth.css                # 로그인·회원가입 페이지 스타일
┃ ┣ common.css              # 공통 스타일
┃ ┣ index.css               # 랜딩 페이지 스타일
┃ ┗ variables.css           # 색상 팔레트, 공통 변수
┣ 📂 fonts                  # 폰트
┣ 📂 images                 # 이미지 및 아이콘
┃ ┣ 📂 btn                  # 버튼 아이콘
┃ ┣ 📂 icons                # SNS 아이콘
┃ ┣ 📂 index                # 랜딩 페이지 이미지
┃ ┗ 📂 logo                 # 로고
┣ 📂 js                     # 자바스크립트
┃ ┣ auth.js                 # 공통 인증 로직
┃ ┣ login.js                # 로그인 유효성 검사
┃ ┗ signup.js               # 회원가입 유효성 검사
┣ index.html                # 랜딩 페이지
┣ items.html                # 상품 목록 페이지
┣ login.html                # 로그인 페이지
┣ signup.html               # 회원가입 페이지
┣ faq.html                  # FAQ 페이지
┗ privacy.html              # 개인정보처리방침 페이지
```

## ✨ 구현 기능

### 랜딩 페이지

- 반응형 레이아웃 (PC / Tablet / Mobile)
- SNS 링크 연결
- OG 메타 태그 설정

### 로그인 / 회원가입

- 유효성 검사 (이메일 형식, 비밀번호 8자 이상, 비밀번호 확인)
- 에러 메시지 표시
- 버튼 활성화/비활성화 처리
- 비밀번호 보기/숨기기 토글

| **유효성 검사** | **비밀번호 토글** |
|--------|------------|
| ![signup](https://github.com/user-attachments/assets/daeb8267-35bb-4140-9b3a-e37ccbba84a8) | ![password_toggle](https://github.com/user-attachments/assets/e29917d3-0738-4861-b0e4-aa5cd5f4eccd) |

## 💭 회고

- 바닐라 JS로 직접 DOM을 조작하며 작업하면서 React, Next.js 등 UI 라이브러리와 프레임워크의 필요성을 체감하였다.
- CSS 변수를 활용해 색상과 공통 스타일을 관리하면서 일관된 디자인 시스템 구성의 중요성을 알게 되었다.
- 코드 리뷰와 피드백을 주고받는 과정에서 팀 작업의 중요성을 느꼈다.

## 📝 Credits

본 프로젝트는 코드잇 부트캠프 과제를 기반으로 개인적으로 발전시킨 프로젝트입니다.
디자인 및 기획 : 코드잇 (Codeit)
