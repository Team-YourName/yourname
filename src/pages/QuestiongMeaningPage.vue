<template>
    <div class="container">
      <div class="text-container mb-6">
        <h2 class="title mb-2">Question 3</h2>
        <p class="content mb-4">어떤 뜻의 이름을 찾고 계신가요?
            <br>최대 3개까지 택해보세요.</p>
      </div>
    <div class="button-meaning-container">
      <button class="custom-button">도전적인</button>
      <button class="custom-button">우아한</button>
      <button class="custom-button">창의적인</button>
    </div>
    <div class="button-meaning-container">
      <button class="custom-button">따뜻한</button>
      <button class="custom-button">용감한</button>
      <button class="custom-button">매력적인</button>
    </div>
    <div class="button-meaning-container">
      <button class="custom-button">품위있는</button>
      <button class="custom-button">신비로운</button>
      <button class="custom-button">밝은</button>
    </div>
    <div class="button-meaning-container">
      <button class="custom-button">진실된</button>
      <button class="custom-button">멋진</button>
      <button class="custom-button">창의적인</button>
    </div>
    <div class="button-meaning-container">
      <button class="custom-button">신비로운</button>
      <button class="custom-button">자연스러운</button>
      <button class="custom-button">행복한</button>
    </div>
    <div class="button-meaning-container">
      <button class="custom-button">멋있는</button>
      <button class="custom-button">똑똑한</button>
      <button class="custom-button">강인한</button>
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
  margin-top: 64px;
  margin-bottom: 24px;
}

.button-meaning-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px; 
    margin-top: 10px;
}
.custom-button {
    padding: 10px 10px;
    width: 100px;
    height: 40px;
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
  background-color: #d1d5db; 
}
</style>