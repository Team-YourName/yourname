<template>
    <div class="container">
      <div class="text-container mb-6">
        <h2 class="title mb-2">Question 4</h2>
        <p class="content mb-20">당신의 성격을 이름에 반영해볼게요.
            <br>MBTI를 선택해주세요.</p>
      </div>
    <div class="button-mbti-container">
      <button class="custom-button"
        :class="{ selected: selectedMbti === 'ISTP' }"
        @click="selectMbti('ISTP')">ISTP
      </button>
      <button class="custom-button" 
        :class="{ selected: selectedMbti === 'INTP' }"
        @click="selectMbti('INTP')">INTP
      </button>
      <button class="custom-button"  
        :class="{ selected: selectedMbti === 'ISFP' }"
        @click="selectMbti('ISFP')">ISFP
      </button>
      <button class="custom-button"  
        :class="{ selected: selectedMbti === 'INFP' }"
        @click="selectMbti('INFP')">INFP
      </button>
    </div>
    <div class="button-mbti-container">
      <button class="custom-button"  
        :class="{ selected: selectedMbti === 'ISTJ' }"
        @click="selectMbti('ISTJ')">ISTJ
      </button>
      <button class="custom-button"  
        :class="{ selected: selectedMbti === 'INTJ' }"
        @click="selectMbti('INTJ')">INTJ
      </button>
      <button class="custom-button" 
        :class="{ selected: selectedMbti === 'ISFJ' }"
        @click="selectMbti('ISFJ')">ISFJ
      </button>
      <button class="custom-button"  
        :class="{ selected: selectedMbti === 'INFJ' }"
        @click="selectMbti('INFJ')">INFJ
      </button>
    </div>
    <div class="button-mbti-container">
      <button class="custom-button"  
        :class="{ selected: selectedMbti === 'ESTP' }"
        @click="selectMbti('ESTP')">ESTP
      </button>
      <button class="custom-button"  
        :class="{ selected: selectedMbti === 'ENTP' }"
        @click="selectMbti('ENTP')">ENTP
      </button>
      <button class="custom-button"  
        :class="{ selected: selectedMbti === 'ESFP' }"
        @click="selectMbti('ESFP')">ESFP
      </button>
      <button class="custom-button" 
        :class="{ selected: selectedMbti === 'ENFP' }"
        @click="selectMbti('ENFP')">ENFP
      </button>
    </div>
    <div class="button-mbti-container">
      <button class="custom-button"  
        :class="{ selected: selectedMbti === 'ESTJ' }"
        @click="selectMbti('ESTJ')">ESTJ
      </button>
      <button class="custom-button" 
        :class="{ selected: selectedMbti === 'ENTJ' }"
        @click="selectMbti('ENTJ')">ENTJ
      </button>
      <button class="custom-button"  
        :class="{ selected: selectedMbti === 'ESFJ' }"
        @click="selectMbti('ESFJ')">ESFJ
      </button>
      <button class="custom-button" 
        :class="{ selected: selectedMbti === 'ENFJ' }"
        @click="selectMbti('ENFJ')">ENFJ
      </button>
    </div>
    <div class="button-mbti-container">
        <button class="custom-button weight" 
          :class="{ selected: selectedMbti === '모름' }"
          @click="selectMbti('모름')" style="width: 350px;">MBTI 모름
        </button>
    </div>

    <div class="error-container">
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
    
    <div class="button-container mb-10">
    <div class="go-back-next-container">
      <button class="go-back-button" @click="goToQuestionMeaning">Go Back</button>
      <button class="next-button" @click="goToLoading">Next</button>
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
const type = route.query.type;
const meanings = route.query.meanings;

console.log('Gender:', gender);
console.log('Type:', type);
console.log('Meanings:', meanings);

const selectedMbti = ref(null);
const errorMessage = ref('');

const selectMbti = (mbti) => {
  selectedMbti.value = mbti;
};

const goToIntro = () => {
  router.push('/'); 
};

const goToQuestionMeaning = () => {
  router.push('/question-meaning'); 
};

const goToLoading = () => {
  if (!selectedMbti.value) {
    errorMessage.value = 'MBTI를 선택해주세요.'; 
    return;
  }
  
  errorMessage.value = ''; 
  router.push({
    path: '/loading',
    query: { 
      gender: gender,
      type: type,
      meanings: meanings,
      mbti: selectedMbti.value 
    },
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
  margin-top: 55px;
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