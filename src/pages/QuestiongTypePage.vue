<template>
    <div class="container">
      <div class="text-container mb-6">
        <h2 class="title mb-2">Question 2</h2>
        <p class="content">어떤 이름을 찾고 계세요?</p>
      </div>
    <div class="button-container">
      <button class="custom-button">클래식한</button>
      <button class="custom-button">트렌디한</button>
      <button class="custom-button">독특한</button>
      <button class="custom-button">무난한</button>
    </div>
    
    <div class="button-container">
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
  margin-top: 102px;
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