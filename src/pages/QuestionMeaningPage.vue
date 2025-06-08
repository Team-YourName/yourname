<template>
    <div class="container">
      <div class="text-container mb-6">
        <h2 class="title mb-2">Question 3</h2>
        <p class="content mb-4">어떤 느낌의 이름을 찾고 계신가요?
            <br>원하는 느낌 3개를 선택해보세요.</p>
      </div>
    <div class="button-meaning-container">
      <button class="custom-button" 
        :class="{ selected: selectedMeanings.includes('도전적인'), disabled: selectedMeanings.length >= 3 && !selectedMeanings.includes('도전적인')}"
        :disabled="selectedMeanings.length >= 3 && !selectedMeanings.includes('도전적인')"
        @click="toggleMeaning('도전적인')">도전적인
      </button>
      <button class="custom-button" 
        :class="{ selected: selectedMeanings.includes('우아한') , disabled: selectedMeanings.length >= 3 && !selectedMeanings.includes('우아한')}"
        :disabled="selectedMeanings.length >= 3 && !selectedMeanings.includes('우아한')"
        @click="toggleMeaning('우아한')">우아한
      </button>
      <button class="custom-button" 
        :class="{ selected: selectedMeanings.includes('창의적인'), disabled: selectedMeanings.length >= 3 && !selectedMeanings.includes('창의적인')}"
        :disabled="selectedMeanings.length >= 3 && !selectedMeanings.includes('창의적인')"
        @click="toggleMeaning('창의적인')">창의적인
      </button>
    </div>
    <div class="button-meaning-container">
      <button class="custom-button" 
        :class="{ selected: selectedMeanings.includes('따뜻한'), disabled: selectedMeanings.length >= 3 && !selectedMeanings.includes('따뜻한')}"
        :disabled="selectedMeanings.length >= 3 && !selectedMeanings.includes('따뜻한')"
        @click="toggleMeaning('따뜻한')">따뜻한
      </button>
      <button class="custom-button" 
        :class="{ selected: selectedMeanings.includes('용감한'), disabled: selectedMeanings.length >= 3 && !selectedMeanings.includes('용감한')}"
        :disabled="selectedMeanings.length >= 3 && !selectedMeanings.includes('용감한')"
        @click="toggleMeaning('용감한')">용감한
      </button>
      <button class="custom-button" 
        :class="{ selected: selectedMeanings.includes('매력적인'), disabled: selectedMeanings.length >= 3 && !selectedMeanings.includes('매력적인')}"
        :disabled="selectedMeanings.length >= 3 && !selectedMeanings.includes('매력적인')"
        @click="toggleMeaning('매력적인')">매력적인
      </button>
    </div>
    <div class="button-meaning-container">
      <button class="custom-button" 
        :class="{ selected: selectedMeanings.includes('품위있는'), disabled: selectedMeanings.length >= 3 && !selectedMeanings.includes('품위있는')}"
        :disabled="selectedMeanings.length >= 3 && !selectedMeanings.includes('품위있는')"
        @click="toggleMeaning('품위있는')">품위있는
      </button>
      <button class="custom-button" 
        :class="{ selected: selectedMeanings.includes('신비로운'), disabled: selectedMeanings.length >= 3 && !selectedMeanings.includes('신비로운')}"
        :disabled="selectedMeanings.length >= 3 && !selectedMeanings.includes('신비로운')"
        @click="toggleMeaning('신비로운')">신비로운
      </button>
      <button class="custom-button" 
        :class="{ selected: selectedMeanings.includes('밝은'), disabled: selectedMeanings.length >= 3 && !selectedMeanings.includes('밝은')}"
        :disabled="selectedMeanings.length >= 3 && !selectedMeanings.includes('밝은')"
        @click="toggleMeaning('밝은')">밝은
      </button>
    </div>
    <div class="button-meaning-container">
      <button class="custom-button" 
        :class="{ selected: selectedMeanings.includes('진실된'), disabled: selectedMeanings.length >= 3 && !selectedMeanings.includes('진실된')}"
        :disabled="selectedMeanings.length >= 3 && !selectedMeanings.includes('진실된')"
        @click="toggleMeaning('진실된')">진실된
      </button>
      <button class="custom-button" 
        :class="{ selected: selectedMeanings.includes('멋진'), disabled: selectedMeanings.length >= 3 && !selectedMeanings.includes('멋진')}"
        :disabled="selectedMeanings.length >= 3 && !selectedMeanings.includes('멋진')"
        @click="toggleMeaning('멋진')">멋진
      </button>
      <button class="custom-button" 
        :class="{ selected: selectedMeanings.includes('강인한'), disabled: selectedMeanings.length >= 3 && !selectedMeanings.includes('강인한')}"
        :disabled="selectedMeanings.length >= 3 && !selectedMeanings.includes('강인한')"
        @click="toggleMeaning('강인한')">강인한
      </button>
    </div>
    <div class="button-meaning-container">
      <button class="custom-button" 
        :class="{ selected: selectedMeanings.includes('똑똑한'), disabled: selectedMeanings.length >= 3 && !selectedMeanings.includes('똑똑한')}"
        :disabled="selectedMeanings.length >= 3 && !selectedMeanings.includes('똑똑한')"
        @click="toggleMeaning('똑똑한')">똑똑한
      </button>
      <button class="custom-button" 
        :class="{ selected: selectedMeanings.includes('자연스러운'), disabled: selectedMeanings.length >= 3 && !selectedMeanings.includes('자연스러운')}"
        :disabled="selectedMeanings.length >= 3 && !selectedMeanings.includes('자연스러운')"
        @click="toggleMeaning('자연스러운')">자연스러운
      </button>
      <button class="custom-button" 
        :class="{ selected: selectedMeanings.includes('행복한'), disabled: selectedMeanings.length >= 3 && !selectedMeanings.includes('행복한')}"
        :disabled="selectedMeanings.length >= 3 && !selectedMeanings.includes('행복한')"
        @click="toggleMeaning('행복한')">행복한
      </button>
    </div>

    <div class="error-container">
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
    
    <div class="button-container">
    <div class="go-back-next-container">
      <button class="go-back-button" @click="goToQuestionType">Go Back</button>
      <button class="next-button" 
        :class="{ active: selectedMeanings.length === 3 }" 
        :disabled="selectedMeanings.length !== 3"
        @click="goToQuestionMbti">Next
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
const type = route.query.type;

const selectedMeanings = ref([]);
const errorMessage = ref('');

const toggleMeaning = (meaning) => {
  if (selectedMeanings.value.includes(meaning)) {
    selectedMeanings.value = selectedMeanings.value.filter((m) => m !== meaning);
    errorMessage.value = ''; 
  } else if (selectedMeanings.value.length < 2) {
    selectedMeanings.value.push(meaning);
    errorMessage.value = '3개를 선택해야 합니다.'; 
  } else if (selectedMeanings.value.length === 2) {
    selectedMeanings.value.push(meaning);
    errorMessage.value = ''; 
  } else {
    errorMessage.value = '';
  }
};

const goToIntro = () => {
  router.push('/'); 
};

const goToQuestionType = () => {
  router.push('/question-type'); 
};

const goToQuestionMbti = () => {
  if (selectedMeanings.value.length !== 3) {
    errorMessage.value = '3개의 의미를 선택해야 다음 단계로 진행할 수 있습니다.';
    return;
  }

  router.push({
    path: '/question-mbti',
    query: {
      gender: gender,
      type: type,
      meanings: selectedMeanings.value.join(', '),
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
  margin-top: 94px;
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

.custom-button.selected {
  background-color: black;
  color: white;
}

.custom-button:hover {
  background-color: black; 
  color: white;
}

.custom-button.disabled {
  background-color: inherit; 
  color: inherit; 
  cursor: not-allowed; 
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