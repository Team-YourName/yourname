<template>
    <div>
      <h2 class="title">So, 
            <br>What’s your name?</h2>
            <p class="title2">I am...</p>
    </div>
    <div class="container">
        <div class="line"></div>
        <div>
            <h1 class="name">Colin</h1>
            <div class="content-container">
                <p class="content mb-4">Colin 은 강하고 씩씩하다는 뜻의 
                이름이예요. 호불호없이 무난한 이름으로, 당신의 독립적인 성격과 매우 잘 어울리네요! 선택하신 #도전적인 #밝은 #멋진 느낌들을 반영해보았어요!</p>
            </div>
            
            <p class="other-names mb-2">또 다른 이름이 궁금하신가요?</p>
            <a href="https://www.example.com" class="link-button">또 다른 이름 보기</a>
        </div>

        <div class="button-container">
            <div class="save-share-container">
            <button class="save-button">Save</button>
            <button class="share-button">Share</button>
            </div>
            <button class="go-back-to-start-button">Go Back To Start</button>
            <button class="go-back-to-start-button" @click="goToIntro">Go Back To Start</button>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goToIntro = () => {
  router.push('/'); 
};
</script>

<style scoped>
@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/nanumsquare.css); 

.container {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  margin-top: 288px;
}

.title {
  position: absolute;
  width: 328px;
  height: 96px;
  left: 10px;
  top: 30px;

  font-family: 'San Francisco', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 48px;
  display: flex;
  align-items: center;

  color: #B4B4B4;
}
.title2 {
  position: absolute;
  width: 99px;
  height: 48px;
  left: 10px;
  top: 136px;

  font-family: 'San Francisco', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 48px;
  display: flex;
  align-items: center;

  color: #252525;
}

.line {
  width: 10000px;
  top: 204px;
  height: 2px;
  background-color: black;
  position: absolute;
  left: -3px;
}
.name {
  position: absolute;
  width: 163px;
  height: 76px;
  left: 115px;
  top: 234px;

  font-family: 'San Francisco', sans-serif; 
  font-style: normal;
  font-weight: 900;
  font-size: 64px;
  line-height: 76px;

  color: #252525;
}
.content-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
  margin-left: 70px;
  margin-right: 70px;
}
.content {
  text-align: center;
  width: 272;
  height: 180;
  top: 340px;
  left: 60px;
  font-family: 'NanumSquare', sans-serif;
  font-weight: 700;
  size: 24px;
  font-size: large;
  color: #252525;
  display: flex;
  margin-top: 50px;
}
.other-names {
  text-align: center;
  font-family: 'NanumSquare', sans-serif;
  font-weight: 700;
  size: 20px;
  font-size: large;
  color: #252525;
}
.link-button {
  width: 250px;
  font-family: 'NanumSquare', sans-serif;
  font-weight: 100;
  font-size: 10px;
  size: 10px;
  color: black; 
  text-decoration: underline;
  font-size: 14px; 
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px; 
  margin-top: 52px;
  margin-bottom: 24px;
}
.custom-button {
  padding: 8px 32px;
  width: 220px;
  border-width: 1.5px; 
  border-color: black;
  border-radius: 9999px; 
  font-family: 'NanumSquare', sans-serif;
  font-weight: 700;
  size: 24px;
  color: black; 
  font-size: 18px; 
  transition: background-color 0.3s ease;
}

.custom-button:hover {
  background-color: black; 
  color: white;
}

.save-share-container {
  display: flex;
  flex-direction: row;
  justify-content: center; 
  gap: 10px;
}
.save-button {
  padding: 10px 22px;
  border-radius: 9999px; 
  width: 120px;
  font-family: 'NanumSquare', sans-serif;
  font-weight: 100;
  font-size: 10px;
  size: 10px;
  color: white; 
  background-color: black;
  font-size: 18px; 
  transition: background-color 0.3s ease;
}

.save-button:hover {
  background-color: #333;
}

.share-button {
  padding: 10px 22px;
  border-radius: 9999px; 
  width: 120px;
  font-family: 'NanumSquare', sans-serif;
  font-weight: 100;
  font-size: 10px;
  size: 10px;
  color: white; 
  background-color: #B4B4B4;
  font-size: 18px; 
  transition: background-color 0.3s ease;
}

.share-button:hover {
  background-color: #252525; 
}

.go-back-to-start-button {
  padding: 10px 22px;
  border-radius: 9999px; 
  width: 250px;
  font-family: 'NanumSquare', sans-serif;
  font-weight: 100;
  font-size: 10px;
  size: 10px;
  color: white; 
  background-color: #B4B4B4;
  font-size: 18px; 
  transition: background-color 0.3s ease;
}

.go-back-to-start-button:hover {
  background-color: #252525; 
}
</style>