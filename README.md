![https://user-images.githubusercontent.com/60960130/148967729-538fbb0d-045f-4cc3-a175-e8bb5f5e547f.png](https://user-images.githubusercontent.com/60960130/148967729-538fbb0d-045f-4cc3-a175-e8bb5f5e547f.png)

## ↗️Grow to

맛있는 음식과 좋은 옷 대신 ‘성장’을 택한 사람들이 더 쉽게 자신에게 맞는 강의를 찾으면 좋겠어요

광고 없는 정직한 IT강의 비교 서비스, 그로투 

## 🛠️기술 스택

| HTML | CSS | React | Typescript | Next.js |
| --- | --- | --- | --- | --- |
| Recoil | Eslint | prettier | axios | styled-components |

```json
{
  "name": "growto",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@types/react-responsive": "^8.0.5",
    "@types/styled-components": "^5.1.19",
    "axios": "^0.24.0",
    "babel-plugin-module-resolver": "^4.1.0",
    "next": "12.0.7",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "react-responsive": "^9.0.0-beta.5",
    "recoil": "^0.5.2",
    "recoil-persist": "^4.0.0",
    "styled-components": "^5.3.3",
    "styled-reset": "^4.3.4"
  },
  "devDependencies": {
    "@svgr/webpack": "^6.1.2",
    "@types/node": "17.0.8",
    "@types/react": "17.0.38",
    "@typescript-eslint/eslint-plugin": "^5.9.0",
    "@typescript-eslint/parser": "^5.9.0",
    "babel-plugin-styled-components": "^2.0.2",
    "eslint": "^8.6.0",
    "eslint-config-next": "12.0.7",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-import": "^2.25.4",
    "eslint-plugin-jsx-a11y": "^6.5.1",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-react": "^7.28.0",
    "eslint-plugin-react-hooks": "^4.3.0",
    "eslint-plugin-simple-import-sort": "^7.0.0",
    "prettier": "2.5.1",
    "typescript": "4.5.4"
  }
}
```

:

## 🗂️폴더 구조

📦Team-GrowTo-Client <br />
 ┣ 📂components  <br />
 ┣ 📂category <br />
 ┃ ┣ 📂CardBox <br />
 ┃ ┃ ┣ 📂LargeCardBox <br />
 ┃ ┃ ┣ 📂SmallCardBox <br />
 ┃ ┃ ┗ 📜index.tsx <br />
 ┃ ┣ 📂CardListContainer <br />
 ┃ ┣ 📂CategoryAndSkillList <br />
 ┃ ┃ ┣ 📂CategoryList <br />
 ┃ ┃ ┣ 📂SkillList <br />
 ┃ ┃ ┣ 📜index.tsx <br />
 ┃ ┃ ┗ 📜style.ts <br />
 ┃ ┣ 📂RedirectProcessButton <br />
 ┃ ┣ 📂Result <br />
 ┃ ┣ 📂SortingBox <br />
 ┃ ┗ 📂SortingBtn <br />
 ┣ 📂common <br />
 ┃ ┣ 📂BlueButton
 ┃ ┣ 📂Modal <br />
 ┃ ┣ 📂NavBar <br />
 ┃ ┃ ┣ 📂LargeNavBar <br />
 ┃ ┃ ┣ 📂SmallNavBar <br />
 ┃ ┃ ┗ 📜index.tsx <br />
 ┃ ┣ 📜Layout.tsx <br />
 ┃ ┗ 📜Test.tsx <br />
 ┣ 📂main <br />
 ┃ ┣ 📂Banner <br />
 ┃ ┣ 📂Footer <br />
 ┃ ┣ 📂LectureCategory <br />
 ┃ ┃ ┣ 📂Category <br />
 ┃ ┃ ┣ 📜index.tsx <br />
 ┃ ┃ ┗ 📜style.ts <br />
 ┃ ┣ 📂MainReport <br />
 ┃ ┃ ┣ 📂ReportSection <br />
 ┃ ┃ ┣ 📜index.tsx <br />
 ┃ ┃ ┗ 📜style.ts <br />
 ┃ ┣ 📂MainReview <br />
 ┃ ┃ ┣ 📂Review <br />
 ┃ ┃ ┣ 📜index.tsx <br />
 ┃ ┃ ┗ 📜style.ts <br />
 ┃ ┗ 📂Share <br />
 ┣ 📂process <br />
 ┃ ┣ 📂CardTitle <br />
 ┃ ┣ 📂TagButton <br />
 ┃ ┣ 📂Title <br />
 ┃ ┗ 📂TypeButton <br />
 ┣ 📂request <br />
 ┃ ┣ 📂RequestBanner <br />
 ┃ ┣ 📂RequestCurrentLecture <br />
 ┃ ┃ ┣ 📂CurrentLecture <br />
 ┃ ┃ ┣ 📜index.tsx <br />
 ┃ ┃ ┗ 📜style.ts <br />
 ┃ ┣ 📂RequestLecture <br />
 ┃ ┃ ┣ 📂Email <br />
 ┃ ┃ ┣ 📂LectureCategory <br />
 ┃ ┃ ┣ 📂LectureType <br />
 ┃ ┃ ┣ 📜index.tsx <br />
 ┃ ┃ ┗ 📜style.ts <br />
 ┃ ┗ 📂RequestWeeklyRank <br />
 ┃ ┃ ┣ 📂Rank <br />
 ┃ ┃ ┣ 📜index.tsx <br />
 ┃ ┃ ┗ 📜style.ts <br />
 ┗ 📂result <br />
 ┃ ┣ 📂MiddleNotification <br />
 ┃ ┣ 📂ProcessResult <br />
 ┃ ┃ ┣ 📂ResultCard <br />
 ┃ ┃ ┃ ┣ 📂Info <br />
 ┃ ┃ ┃ ┣ 📂SubInfo <br />
 ┃ ┃ ┃ ┣ 📂Tags <br />
 ┃ ┃ ┃ ┣ 📜index.tsx <br />
 ┃ ┃ ┃ ┗ 📜style.ts <br />
 ┃ ┃ ┣ 📜index.tsx <br />
 ┃ ┃ ┗ 📜style.ts <br />
 ┃ ┣ 📂Question <br />
 ┃ ┃ ┣ 📂QuestionButton <br />
 ┃ ┃ ┣ 📂QuestionModal <br />
 ┃ ┃ ┃ ┣ 📂DescriptionInput <br />
 ┃ ┃ ┃ ┣ 📂DropdownInput <br />
 ┃ ┃ ┃ ┣ 📂EmailInput <br />
 ┃ ┃ ┃ ┣ 📂InputForm <br />
 ┃ ┃ ┃ ┣ 📂LectureNameInput <br />
 ┃ ┃ ┃ ┣ 📂QuestionReported <br />
 ┃ ┃ ┃ ┣ 📜index.tsx <br />
 ┃ ┃ ┃ ┗ 📜style.ts <br />
 ┃ ┃ ┣ 📜index.tsx <br />
 ┃ ┃ ┗ 📜style.ts <br />
 ┃ ┗ 📂ResultShareButton <br />
┣ 📂libs<br /> <br />
┃ ┗ 📜axios.ts<br />
┣ 📂pages<br />
┃ ┣ 📂apis<br />
┃ ┣ 📂category<br />
┃ ┣ 📂choice<br />
┃ ┣ 📂processPrice<br />

┃ ┣ 📂processTag<br />

┃ ┣ 📂processTime<br />
┃ ┣ 📂result<br />

┃ ┣ 📂request<br />
┃ ┣ 📜index.tsx<br />
┃ ┣ 📜_app.tsx<br />
┃ ┗ 📜_document.tsx<br />
┣ 📂public<br />
┃ ┣ 📂assets<br />
┃ ┃ ┣ 📂fonts<br />
┃ ┃ ┃ ┗ 📜font.css<br />
┃ ┃ ┣ 📂icons<br />
┃ ┗ ┗ 📂images<br />
┣ 📂styles<br />
┃ ┣ 📜colors.ts<br />
┃ ┣ 📜GlobalStyles.ts<br />
┃ ┗ 📜theme.ts<br />
┣ 📂types<br />

┃ ┣ 📜count.type.ts<br />

┃ ┣ 📜info.type.ts<br />

┃ ┣ 📜lectures.type.ts<br />
┃ ┗ 📜index.ts<br />

┣ 📂store<br />
┃ ┗ 📜state.ts<br />
┣ 📜.babelrc<br />
┣ 📜.eslintrc.json<br />
┣ 📜.gitignore<br />
┣ 📜.prettierrc.json<br />
┣ 📜next-env.d.ts<br />
┣ 📜next.config.js<br />
┣ 📜package-lock.json<br />
┣ 📜package.json<br />
┣ 📜README.md<br />
┗ 📜tsconfig.json<br />

## ✅구현 기능

### 🔹Main


그로투의 메인 페이지입니다!
![localhost_3000_processPrice (2)](https://user-images.githubusercontent.com/60960130/150528190-f8a16c90-edb3-4d05-aad3-89a1a7f0c752.png)

초기 페이지로 IT 교육강의 서비스임을 인지시키고, 유저들이 비교를 시작할 수 있게 만들어주는 목적으로 개발하였습니다.

1. N**av Bar** 
    
    버튼 클릭 시 연결된 페이지로 이동
    
    - 전체 강의 → Category 초기 페이지
    - 강의 요청 → Request 페이지
    - About → 그로투 소개 노션 링크
    - 페이지 이동 시, 슬라이딩 바 구현
2. **강의 분야**
    - 해당 버튼 클릭 시 Category 페이지로 이동
    - 해당 분야 선택 및 해당 분야의 스킬 목록을 보여줌
3. **Report**
    - 총 비교 중인 강의 수 노출
    - Choice 페이지 맞춤 강의 찾기 기능 총 클릭 횟수 노출
    - Request 비교요청 버튼 총 클릭 횟수 노출
4. **유저 후기**
5. **Grow 스토리 보러가기**
    
    버튼 클릭 시 그로투 소개 노션 링크로 이동
    
6. **공유하기**
    
    버튼 클릭 시
    
    - 그로투 Home Page Referal UTM 링크 자동복사
    - 복사 완료 모달창 노출
7. **Footer**
    
    버튼 클릭 시 연결된 페이지로 이동
    
    - About → 그로투 소개 노션 링크
    - 기업 참여 & 문의하기 → 메일창으로 이동 (주소: help.growto@gmail.com)
    - Social → 그로투 Instagram 공식계정

### 🔹 Category
![image](https://user-images.githubusercontent.com/60960130/150528447-9239b1c5-0405-4a6a-8343-3fbfa6f6b7e1.png)


그로투의 카테고리 페이지 입니다!

유저에게 스킬 선택을 유도하기 위한 페이지 입니다. 만약 본인이 원하는 스킬이 없을 때에는 스킬을 요청할 수 있도록, 유저를 유도시키는 목적을 갖고 있습니다.

1. **분야(마케팅) - 스킬(데이터분석, 앱마케팅...) 보여주기**
    
    이전 Main 페이지에서 선택한 강의 분야에 해당하는 스킬들을 보여준다. 
    
2. **스킬**
    
    클릭 시
    
    - Choice 페이지로 이동
    - 해당 스킬의 강의들을 보여준다
3. **추가 강의 비교 요청**
    
    클릭 시 Request 페이지로 이동
    
4. **버튼 비활성화**
    
    총소요시간이나 가격과 같은 소팅 버튼을 해당 페이지에서는 클릭 비활성화
    

### 🔹 Choice

![image](https://user-images.githubusercontent.com/60960130/150528478-48f203f8-4e11-4cb4-9209-bf48bc6e9729.png)
그로투의 초이스 페이지 입니다!

현재 해당 스킬에 얼마나 많은 강의를 비교하고 있는지를 보여주고, 많은 강의들 중 유저가 본인에게 맞는 맞춤강의를 선택할 수 있도록 유도하는 페이지입니다.

1. **맞춤 강의**
    
    해당 버튼 클릭 시
    
    - Process 페이지의 첫 페이지로 이동
    - Category 페이지에서 선택한 분야와 스킬에 따른 맞춤 강의 찾기 Process를 진행
2. **분야 - 스킬(보여주기)**
    
    선택된 분야와 스킬의 색상 변경
    
3. **스킬 - 강의수(보여주기)**
    
    해당 스킬 강의의 개수를 보여주고, 선택된 스킬명 보여주기
    
4. **추가 강의 비교 요청**
    
    클릭 시 Request 페이지로 이동
    
5. **소팅**
    - 각각의 항목 클릭 시, 드롭다운 내려옴
    - 드롭다운에서 클릭시, 해당 기준으로 소팅. 소팅 기준으로 표기 활성화
    - 다른 버튼 누르고, 드롭다운 선택시 기존 소팅 해제 & 바뀐 상태로 소팅 진행 (중복 소팅 불가능)
6. **해당 강의로 이동**
    
    버튼 클릭 시, 해당 카드의 강의 페이지(DB에 입력되어 있는 해당 강의 페이지 주소)로 새 창 Open 처리
    
7. **고정 영역 처리**
    
    Nav Bar와 맞춤 강의 찾기 부분은 스크롤 있을 때도 고정 처리
    

### 🔹Process

![image](https://user-images.githubusercontent.com/60960130/150528546-e116b4e3-6e0d-4257-b01e-9e5bebb442e6.png)
Process1

그로투의 프로세스 페이지 입니다!

유저가 최대한 자신에게 맞는 강의를 찾을 수 있도록 유도하는 페이지입니다. 사용자는 찾고 싶은 분야에 대한 카테고리와 스킬 선택 후 3가지 질문에 대한 답변으로 맞춤 강의를 제공받을 수 있습니다. Process 1,2,3 페이지는 각각 별도 페이지로 처리하며, 그 이유는 추후 데이터 수집 시 불안정 할 수 있음을 예방하기 위함이다. 

1. **분야 (ex. 개발, 디자인, 기획 ... )**
    
    Main 페이지에서 선택한 분야를 해당 구간에서 노출
    
2. **스킬 (ex. 파이썬, 플라스크 ... )**
    
    Category 페이지에서 선택한 skill을 해당 구간에서 노출
    
3. **Progress bar**
    
    Process 1,2,3 페이지는 각각 별도 페이지로, 고정 요소를 보여준다.
    
4. **특성 선택**
    - 버튼 한 번 누르면 선택, 두 번 누르면 취소.
    - 버튼을 두 개만 선택할 수 있고, 추후에 선택을 하기 위해서는 같은 버튼을 한 번 더 눌러서 취소해야 함
    - 선택시 색상 변경
    - 유저가 뒤로가기를 눌렀을 때, 이전 선택값을 가지고 있도록 유지 처리 (ex. Process2로 넘어간 경우 뒤로 가기를 누름. 기존에 내가 선택한 앱마케팅, 실습 프로젝트 특성이 눌려있음 → 실습 프로젝트를 한 번 더 눌러 취소한 뒤 다른 특성을 선택해서 반영)
    - 요소를 한 개만 선택시, 다음 버튼 비활성화
5. **뒤로 가기**
    - 해당 버튼 클릭 시 각각의 이전 페이지로 이동
    - Process 1,2,3 페이지에 모두 있음.
6. **다음**
    - 해당 버튼 클릭 시 다음 페이지로 이동(Process 2)
    - 특성 2개 선택 완료 시에만 활성화
    - 해당 선택사항 결과 추출 로직에 반영
    
![image](https://user-images.githubusercontent.com/60960130/150528568-fc6227ca-6aaa-4217-b019-50cab42e4acb.png)
Process2

1. **완강시간 선택**
    - 해당 선택지 중 하나 클릭 시, 색상 변경 처리
    - 자동으로 다음 페이지로 이동(Process 3)
    - 해당 선택 사항 결과 추출 로직에 반영(중복 선택 X)
    

![image](https://user-images.githubusercontent.com/60960130/150528593-46c81b60-9530-4dc8-84bf-00d9f6f4b33f.png)
1. **가격 선택**
    - 클릭 시 색상 변경 처리
    - 해당 선택 사항 결과 추출 로직에 반영(중복 선택 X)
2. **완료하기**
    - 가격 선택이 완료되었을 때만 활성화
    - 버튼 클릭 시, Result 페이지로 이동(로딩 2.5초 반영)

### 🔹Result

![image](https://user-images.githubusercontent.com/60960130/150528624-0677014b-d2cb-447b-89e1-21f8adbd2669.png)
1. **분야 - 스킬 (보여주기)**
    
    소팅된 해당 스킬 강의의 갯수를 보여주고, Category 페이지에서 선택된 스킬을 표시
    
2. **결과 (보여주기)**
    - 유저가 Process에서 선택한 사항을 바탕으로 결과를 보여줌
    - 좌측에서부터 1순위, 2순위, 3순위
    - 맞춤 강의 갯수가 3개가 안될 때는 카드의 갯수와 ‘나에게 딱맞는 ()가지 강의’에서 강의 갯수가 바뀜.
    - 0개가 나오면 에러처리
3. **강의이동**
    
    버튼 클릭 시 해당 카드의 강의 페이지(DB에 입력되어 있는 해당 강의 원래 페이지 주소)로 이동
    
4. **공유하기**
    
    현재 페이지 결과를 URL로 클립보드에 복사
    
5. **다른 강의 비교하기**
    
    버튼 클릭 시, Category 페이지에서 아무것도 선택안된 초기 페이지로 이동
    
6. **강의 정보가 다른가요?** 
    - 해당 버튼 클릭 시 팝업 노출
        
        ![localhost_3000_ (9)](https://user-images.githubusercontent.com/60960130/150528931-46ce2751-8c18-4041-a51b-152b4ad2aa38.png)

        노출 팝업
        
        ![localhost_3000_ (10)](https://user-images.githubusercontent.com/60960130/150529014-9da03c24-6528-4eb2-8443-b51414d2ed1a.png)

        완료 팝업
        
    

### 🔹Request

![image](https://user-images.githubusercontent.com/60960130/150528824-50ad815d-e6a1-4ba0-a28b-40e322003f9d.png)
그로투의 리퀘스트 페이지 입니다!

강의 비교를 요청할 수 있고,  후에 100명 이상이 요청했을 시 유저가 입력한 이메일로 수신받을 수 있습니다. 또한 여러 데이터를 보여주는 페이지 입니다.

1. **강의분야**
    - 버튼 클릭 시, 드롭다운
    - 사전 노출 문구
2. **강의 종류**
    - 해당 부분 클릭 시, 강의 종류 입력 가능
    - 사전 노출 문구
3. **이메일**
    - 해당 부분 클릭 시, 이메일 입력 가능
    - 사전 노출 문구
4. **강의 비교 요청하기**
    - 1,2,3의 내용이 모두 기입되어 있지 않을 때 버튼 클릭 비활성화
    - 해당 버튼 클릭 시, DB에 이메일로 비교요청 강의 목록 저장
5. **비교요청 주간 인기순위**
    - 강의 비교 요청에 대한 결과를 보여줌
    - 요청 정보는 주간 업데이트(휴먼 최적화)
6. **비교 강의(보여주기)**
    
    현재 DB에 저장되어 있는 총 강의의 수
    
7. **현재 비교중인 강의(보여주기)**
    - 100명의 요청으로 현재 비교하고 있는 강의 목록 노출
    - 분야 스킬 정보만 나타냄
