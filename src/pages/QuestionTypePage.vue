<template>
    <div class="container">
      <div class="text-container mb-6">
        <h2 class="title mb-2">Question 2</h2>
        <p class="content">어떤 이름을 찾고 계세요?</p>
      </div>
    <div class="button-container">
      <button class="custom-button"
        :class="{ selected: selectedType === 'classic' }"
        @click="selectType('classic')">클래식한
      </button>
      <button class="custom-button"
        :class="{ selected: selectedType === 'tredy' }"
        @click="selectType('tredy')" >트렌디한
      </button>
      <button class="custom-button" 
        :class="{ selected: selectedType === 'rare' }"
        @click="selectType('rare')">독특한
      </button>
      <button class="custom-button" 
        :class="{ selected: selectedType === 'alltime' }"
        @click="selectType('alltime')">무난한
      </button>
    </div>

    <div class="type-message-container">
      <p v-if="typeMessage1" class="type-message">{{ typeMessage1 }}</p>
      <p v-if="typeMessage2" class="type-message">{{ typeMessage2 }}</p>
    </div>

    <div class="error-container">
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
    
    <div class="button-container">
    <div class="go-back-next-container">
      <button class="go-back-button" @click="goToQuestionGender">Go Back</button>
      <button class="next-button" 
        :class="{ active: selectedType !== null }"
        @click="goToQuestionMeaning">Next
      </button>
    </div>
    <button class="go-back-to-start-button" @click="goToIntro">Go Back To Start</button>
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const gender = route.query.gender;

console.log(gender);

const selectedType = ref(null);
const errorMessage = ref('');
const typeMessage1 = ref('');
const typeMessage2 = ref('');

const selectType = (type) => {
  selectedType.value = type;
  errorMessage.value = '';

  if (type === 'classic') {
    typeMessage1.value = '옛날부터 사랑받던 이름은 이유가 있죠!';
    typeMessage2.value = '시간이 지나도 가치가 있을거예요.';
  } else if (type === 'tredy') {
    typeMessage1.value = '최근 유행하는 인기이름을 찾고 계시는군요,';
    typeMessage2.value = '저희가 찾아드릴게요.';
  } else if (type === 'rare') {
    typeMessage1.value = '흔하지 않은 특별한 이름을 찾고 계신가요?';
    typeMessage2.value = '저희가 찾아볼게요.';
  } else if (type === 'alltime') {
    typeMessage1.value = '시대상관없이 늘 인기있던 무난한 이름은';
    typeMessage2.value = '누구에게나 잘 어울릴거예요.';
  }
};

const goToIntro = () => {
  router.push('/'); 
};

const goToQuestionGender = () => {
  router.push('/question-gender'); 
};

const goToQuestionMeaning = () => {
  if (!selectedType.value) {
    errorMessage.value = '이름 타입을 선택해주세요.'; 
    return;
  }

  errorMessage.value = '';
  router.push({
    path: '/question-meaning',
    query: { gender: gender, type: selectedType.value },
  });
};

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

.type-message-container {
  margin-top: 40px;
  text-align: center;
  min-height: 50px;
}

.type-message {
  font-size: 14px;
  color: #252525;
  font-family: 'NanumSquare', sans-serif;
}

.error-container {
  height: 20px; 
  display: flex;
  justify-content: center;
  align-items: center;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 40px;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px; 
  margin-top: 47px;
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

.custom-button.selected {
  background-color: black; 
  color: white;
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

.next-button.active {
  background-color: black; 
  color: white;
}

.next-button:hover {
  background-color: #252525; 
}

.next-button:disabled {
  background-color: #B4B4B4;
  cursor: not-allowed;
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