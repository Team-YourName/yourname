# 🧐 영어이름 추천 서비스 What Is Your Name?
> **What Is Your  Name?**  
> 왓이즈유어네임은 사용자의 성격, 선호하는 느낌을 바탕으로 영어이름을 추천하는 이름추천서비스입니다.

<img width="1920" alt="Image" src="https://github.com/user-attachments/assets/9e63ec35-7970-430f-aaae-27876802aebd" />  
<https://drxbhkylkp73h.cloudfront.net/>

## 목차
[1. 프로젝트 소개](#프로젝트-소개)  
[2. 기술스택](#기술스택)  
[3. 이름추천과정](#이름추천과정)  
[4. 데모시연](#시연영상)

## 프로젝트 소개
+ 프로젝트 이름 : What Is Your Name?
+ 프로젝트 기간 : 2024.12-2025.06
+ 개발 엔진 및 언어 : HTML, CSS, Javascript, Vue.js(Axios, router, pinia), Github Action, S3
+ 멤버 : 강보영 이승연

### 서비스 목적
>이름 추천 결과를 SNS 공유형 콘텐츠로 활용  
>“개인화된 브랜드”로서의 영어이름

최근 MZ세대를 중심으로 ‘자기 정체성 표현’과 ‘개인화된 콘텐츠 소비’가 강력한 트렌드로 자리잡고 있습니다.  
‘What is your name?’ 프로젝트는 이러한 흐름에 맞춰, 사용자의 성향과 키워드를 기반으로 맞춤형 영어 이름을 추천합니다.  
영어 이름의 단순한 추천을 넘어, 이름이 가진 의미를 함께 제시함으로써 자기표현의 재미와 몰입을 높이고자 했습니다.

## 🔧기술스택
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white">
<img src="https://img.shields.io/badge/Amazon%20S3-569A31?style=for-the-badge&logo=Amazon%20S3&logoColor=white">
<img src="https://img.shields.io/badge/githubactions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white">

## 이름추천과정
본 서비스에 사용되는 이름데이터는 **미국 사회보장청(SSA)** 의 이름 등록 데이터 중 1980년대와 2020년대의 이름 데이터를 수집하여 병합했습니다.

### 메인화면
<img width="200" alt="Image" src="https://github.com/user-attachments/assets/e4296667-7af7-4791-b5c2-9dc540ffd747" />  

'start' 버튼을 클릭하여 시작합니다.


### 👩‍💻이름추천과정
사용자는 **성별, 유행정도, 느낌, MBTI** 총 4가지 요소를 선택합니다.  
사용자가 선택한 위 4가지 요소를 종합하여 해당 조건과 일치하는 이름들을 필터링 및 가중치 부여하고, 가장 높은 적합도를 가진 이름을 추천합니다.

#### 1) 성별
<img width="200" alt="Image" src="https://github.com/user-attachments/assets/51c59548-fc88-4215-8abe-0ca646402088" />  

**이름 지으려는 사람의 성별을 '남성', '여성' 중 선택합니다.**  
미국 사회보장청 등록 기준, 지정된 성별을 바탕으로 필터링됩니다. 

#### 2) 유행정도
<img width="200" alt="Image" src="https://github.com/user-attachments/assets/f53a0aab-0235-4636-855e-6980aab07cfc" />  

**이름의 유행 정도를 아래 기준에 따라 분류하고, 사용자가 '클래식한', '트렌디한', '독특한', '무난한' 중 선택할 수 있도록 설계했습니다.**
|구분|기준|
|------|---|
|클래식 (Classic)|1990년 기준 상위 50% 인기 이름|
|트렌디 (Trendy)|2020년 기준 상위 50% 인기 이름|
|독특한 (Rare)|두 시점 모두 상위 50% 밖|
|무난한 (All-time)|두 시점 모두 상위 50% 안|

#### 3) 느낌 (의미)
<img width="200" alt="Image" src="https://github.com/user-attachments/assets/f94a1eb8-cf3d-4170-ab86-c604dae0ad20" />  

**사용자는 15가지로 정리된 ‘느낌’ 중 원하는 키워드를 선택할 수 있습니다.**  
각 이름은 사전적 의미를 바탕으로 총 30개의 ‘의미 태그’로 분류되며,
이 '의미 태그'들은 15가지의 '느낌' 키워드와 중복가능하도록 연결되어 있습니다.

#### 4) MBTI 
<img width="200" alt="Image" src="https://github.com/user-attachments/assets/8736d66a-e92e-4364-9258-177db6013616" />  

**사용자의 성격유형인 16가지 MBTI 중 하나를 선택합니다.**  
위에서 정의한 30개의 '의미 태그'는 MBTI 16가지 유형과 중복매칭되어 있습니다. 


### 결과
<img width="200" alt="Image" src="https://github.com/user-attachments/assets/38263ea3-e8fe-4bbe-8b69-32614b084296" />  

위 네가지 요소를 종합하여 해당 조건과 일치하는 이름들을 필터링하고, 가장 높은 적합도를 가진 이름을 추천합니다.  
데이터와 사용자 성향을 기반으로 한 복합 탐색 결과로서, 최적의 영어이름을 5순위까지 추천합니다. 

## 시연영상
![유어네임 영상압축 (1)](https://github.com/user-attachments/assets/0d2a445e-8839-42df-baeb-4c7013bf1a00)

