<template>
    <div class="container">
      <div class="text-container mb-6">
        <h2 class="title mb-2">Question 4</h2>
        <p class="content mb-20">당신의 성격을 이름에 반영해볼게요.
            <br>MBTI를 선택해주세요.</p>
      </div>
    <div class="button-mbti-container">
      <button class="custom-button">ISTP</button>
      <button class="custom-button">INTP</button>
      <button class="custom-button">ISFP</button>
      <button class="custom-button">INFP</button>
    </div>
    <div class="button-mbti-container">
      <button class="custom-button">ISTJ</button>
      <button class="custom-button">INTJ</button>
      <button class="custom-button">ISFJ</button>
      <button class="custom-button">INFJ</button>
    </div>
    <div class="button-mbti-container">
      <button class="custom-button">ESTP</button>
      <button class="custom-button">ENTP</button>
      <button class="custom-button">ESFP</button>
      <button class="custom-button">ENFP</button>
    </div>
    <div class="button-mbti-container">
      <button class="custom-button">ESTJ</button>
      <button class="custom-button">ENTJ</button>
      <button class="custom-button">ESFJ</button>
      <button class="custom-button">ENFJ</button>
    </div>
    <div class="button-mbti-container">
        <button class="custom-button weight" style="width: 350px;">MBTI 모름</button>
    </div>
    
    
    <div class="button-container mb-10">
    <div class="go-back-next-container">
      <button class="go-back-button">Go Back</button>
      <button class="next-button">Next</button>
    </div>
    <button class="go-back-to-start-button">Go Back To Start</button>
  </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/nanumsquare.css); 

.container {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  margin-top: 120px;
}

body {
  background-color: #f9fafb;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.text-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;
}

.title {
  text-align: center;
  width: 121;
  height: 27;
  top: 119px;
  left: 136px;
  font-family: 'NanumSquare', sans-serif;
  font-weight: 700;
  size: 24px;
  font-size: large;
  color: #252525;
}

.content {
  text-align: center;
  width: 286;
  height: 23;
  top: 196px;
  left: 54px;
  font-family: 'NanumSquare', sans-serif;
  font-weight: 400;
  size: 20px;
  font-size: medium;
  color: #252525;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px; 
  margin-top: 75px;
  margin-bottom: 24px;
}

.button-mbti-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px; 
    margin-top: 10px;
}
.custom-button {
    padding: 10px 10px;
    width: 80px;
    height: 35px;
    line-height: 10px;
    border-width: 1.5px; 
    border-color: black;
    border-radius: 9999px; 
    font-family: 'NanumSquare', sans-serif;
    font-weight: 400;
    font-size: 16px; 
    color: black; 
    transition: background-color 0.3s ease;
}

.custom-button:hover {
  background-color: black; 
  color: white;
}

.go-back-next-container {
  display: flex;
  flex-direction: row;
  justify-content: center; 
  gap: 10px;
}
.go-back-button {
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

.go-back-button:hover {
  background-color: #333;
}

.next-button {
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

.next-button:hover {
  background-color: #d1d5db; 
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