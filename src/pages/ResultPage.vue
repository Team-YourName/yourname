<template>
  <div id="app">
  <div> 
    <div class="header-container">
      <h2 class="title">So, 
            <br>What’s your name?</h2>
            <p class="title2">I am...</p>
    </div>
  </div>

    <div class="container">
        <div class="line"></div>      
        <div>
            <h1 class="name">{{ firstRecommendedName }}</h1>
            <div class="content-container">
                <p class="content mb-4">{{ firstRecommendedName }}은 {{ firstRecommendedMean }}는 뜻의 
                이름이예요. {{ trendDescription }} 이름으로, 당신의 {{ mbtiDescription }} 성격과 매우 잘 어울리네요! 
                선택하신 {{ hashtagDescription }} 느낌들을 반영해보았어요!</p>
            </div>
            
            <p class="other-names mb-2">또 다른 이름이 궁금하신가요?</p>
            <a href="#" class="link-button" @click.prevent="goToIntro">또 다른 이름 보기</a>
        </div>

        <div class="button-container">
            <div class="save-share-container">
            <button class="save-button" @click="downloadImage">Save</button>
            <button class="share-button" @click="shareContent">Share</button>
            </div>
            <button class="go-back-to-start-button" @click="goToIntro">Go Back To Start</button>
        </div>
    </div>

    <div v-show="isGeneratingImage" id="capture">
    <h2 class="title">So, 
        <br>What’s your name?</h2>
        <p class="title2">I am...</p>
      <div class="container">
        <div class="line"></div>
        <h1 class="name mt-3" style="margin-top: 76px;">Colin</h1>
        <div class="content-container" style="margin-top: 380px;">
          <p class="content">
            Colin 은 강하고 씩씩하다는 뜻의 이름이예요. 호불호없이 무난한 이름으로, 당신의 독립적인 성격과 매우 잘 어울리네요! 선택하신 #도전적인 #밝은 #멋진 느낌들을 반영해보았어요!
          </p>
        </div>
      </div>
  </div>
</div>
</template>

<script setup>
import { onMounted, onActivated, computed, ref, nextTick } from 'vue';
import html2canvas from 'html2canvas';
import { useRouter } from 'vue-router';

const router = useRouter();

const recommendedNames = ref([]);
const mbti = ref('');
const trend = ref('');
const meanings = ref([]);

const firstRecommendedName = computed(() => {
  return recommendedNames.value.length > 0 ? recommendedNames.value[0].name : '이름 없음';
});

const firstRecommendedMean = computed(() => {
  return recommendedNames.value.length > 0 ? recommendedNames.value[0].mean : '의미 없음';
});

const trendDescription = computed(() => {
  return trendDescriptions[trend.value] || '호불호없이 좋은';
});

const mbtiDescription = computed(() => {
  return mbtiDescriptions[mbti.value] || '성격 설명 없음';
});

const hashtagDescription = computed(() => {
  return meanings.value.length > 0 ? meanings.value.map((tag) => `#${tag}`).join(' ') : '해시태그 없음';
});

const trendDescriptions = {
  modern: '최근 인기있는',
  classic: '예전부터 사랑받던',
  unique: '흔하지 않은',
  neutral: '호불호없이 좋은',
};

const mbtiDescriptions = {
  ISTJ: '믿음직스럽고 현실적인',
  ISFJ: '따뜻하고 헌신적인',
  INFJ: '안정적이고 이상적인',
  INTJ: '냉철하고 자기주도적인',
  ISTP: '실용적이고 독립적인',
  ISFP: '감각적이고 자유로운',
  INFP: '감성적이고 창의적인',
  INTP: '객관적이고 호기심있는',
  ESTP: '활발하고 자신감있는',
  ESFP: '생동감넘치고 유쾌한',
  ENFP: '열정적이고 밝은',
  ENTP: '직관적이고 혁신적인',
  ESTJ: '효율적이고 책임감있는',
  ESFJ: '따뜻하고 외향적인',
  ENFJ: '리더십있고 이해심많은',
  ENTJ: '결단력있고 자신감있는',
};

const isGeneratingImage = ref(false);

const goToIntro = () => {
  router.push('/'); 
};

const downloadImage = () => {
  isGeneratingImage.value = true;

  document.fonts.ready.then(() => {
    nextTick(() => {
      const element = document.getElementById('capture');

    html2canvas(element, {
      scale: 2,
    })
      .then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'yourname-result.png';
        link.click();
      })
      .catch((error) => {
        console.error('이미지 저장 중 오류 발생:', error);
      })
      .finally(() => {
        isGeneratingImage.value = false;
      });
  });
});
};

const shareContent = () => {
  if (navigator.share) {
    navigator
      .share({
        title: 'Your Name Result',
        text: 'Check out my result from Your Name!',
        url: window.location.href, // 현재 페이지 URL
      })
      .then(() => console.log('공유 성공'))
      .catch((error) => console.error('공유 중 오류 발생:', error));
  } else {
    alert('공유 기능이 이 브라우저에서 지원되지 않습니다.');
  }
};

onMounted(() => {
  loadData();
});

onActivated(() => {
  loadData();
});

function loadData() {
  recommendedNames.value = JSON.parse(localStorage.getItem('recommendedNames') || '[]');
  mbti.value = localStorage.getItem('mbti') || '';
  trend.value = localStorage.getItem('trend') || '';
  meanings.value = JSON.parse(localStorage.getItem('meanings') || '[]');
}
</script>

<style scoped>
@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/nanumsquare.css); 

#capture {
  position: absolute;
  top: 0;
  left: 0;
  width: 393px;
  height: 852px;
  background-color: white;
  padding: 20px;
  margin: 0 auto;
  z-index: -1;
}

.container {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  margin-top: 288px;
}

.header-container {
  max-width: 400px;
  margin: 0 auto;
}

.title {
  font-family: 'San Francisco', sans-serif;
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
  font-family: 'San Francisco', sans-serif;
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
  width: 100vw;
  top: 204px;
  height: 2px;
  background-color: black;
  position: absolute;
  left: -3px;
}

@media (max-width: 600px) {
  .title {
    font-size: 32px; 
    line-height: 40px;
    top: 20px; 
  }

  .title2 {
    font-size: 32px; 
    line-height: 40px;
    top: 100px; 
  }

  .line {
    top: 204px; 
  }

  .name {
    font-size: 48px; 
    top: 200px; 
  }

  .content-container {
    margin-top: 20px; 
  }
}

.name {
  font-family: 'San Francisco', sans-serif;
  position: absolute;
  width: 163px;
  height: 76px;
  left: 115px;
  top: 234px;
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