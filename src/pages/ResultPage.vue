<template>
    <div id="app" class="capture">
        <div class="header-container">
        <h2 class="title">So, 
                <br>What’s your name?</h2>
                <p class="title2">I am...</p>
                <div class="line"></div>      
        </div>

        <div class="container">
            <div class="content-container">
            <h1 class="name">{{ firstRecommendedName }}</h1>
                <p class="content mb-4">{{ firstRecommendedName }}은 {{ firstRecommendedMean }}는 뜻의 
                이름이예요. {{ trendDescription }} 이름으로, 당신의 {{ mbtiDescription }} 성격과 매우 잘 어울리네요! 
                선택하신 {{ hashtagDescription }} 느낌들을 반영해보았어요!</p>
            </div>
            <p class="other-names mb-2">또 다른 이름이 궁금하신가요?</p>
            <a href="#" class="link-button" @click="isMoreResultVisible" v-if="isShowMoreButtonVisible">또 다른 이름 보기</a>
            <div class="other-name-container" v-show="isSecondNameVisible">
                <div class="rank">2위</div>
                <p class="other-name">{{ secondRecommendedName }}</p>
                <p class="name-mean">{{ secondRecommendedNameMean }}</p>
            </div>
            <div class="other-name-container" v-show="isThirdNameVisible">
                <div class="rank">3위</div>
                <p class="other-name">{{ thirdRecommendedName }}</p>
                <p class="name-mean">{{ thirdRecommendedNameMean }}</p>
            </div>
            <div class="other-name-container" v-show="isFourthNameVisible">
                <div class="rank">4위</div>
                <p class="other-name">{{ fourthRecommendedName }}</p>
                <p class="name-mean">{{ fourthRecommendedNameMean }}</p>
            </div>
            <div class="other-name-container" v-show="isFifthNameVisible">
                <div class="rank">5위</div>
                <p class="other-name">{{ fifthRecommendedName }}</p>
                <p class="name-mean">{{ fifthRecommendedNameMean }}</p>
            </div>
            <div class="other-name-container">
                <a href="#" class="link-button" @click="setAside" v-show="isFoldVisible">접어두기</a>
            </div>
            
            <div class="button-container">
                <div class="save-share-container">
                <button class="save-button" @click="downloadImage">Save</button>
                <button class="share-button" @click="shareContent">Share</button>
                </div>
                <button class="go-back-to-start-button" @click="goToIntro">Go Back To Start</button>
            </div>
        </div>
        
    </div>
</template>
<script setup>
import { onMounted, onActivated, computed, ref, nextTick } from 'vue';
import html2canvas from 'html2canvas';
import { useRouter } from 'vue-router';
import { useNameStore } from '@/stores/NameStore'; 

const router = useRouter();
const nameStore = useNameStore();

const isSecondNameVisible = ref(false);
const isThirdNameVisible = ref(false);
const isFourthNameVisible = ref(false);
const isFifthNameVisible = ref(false);
const isShowMoreButtonVisible = ref(true);
const isFoldVisible = ref(false);

const recommendedNames = computed(() => nameStore.recommendedNames);
const mbti = computed(() => nameStore.mbti);
const trend = computed(() => nameStore.trend);
const meanings = computed(() => nameStore.meanings);

const firstRecommendedName = computed(() => {
  return recommendedNames.value.length > 0 ? recommendedNames.value[0]?.name : '이름 없음';
});
 
const firstRecommendedMean = computed(() => {
  return recommendedNames.value.length > 0 ? recommendedNames.value[0]?.mean : '의미 없음';
});

const secondRecommendedName = computed(() => {
  return recommendedNames.value.length > 0 ? recommendedNames.value[1]?.name : '이름 없음';
});
 
const secondRecommendedNameMean = computed(() => {
  return recommendedNames.value.length > 0 ? recommendedNames.value[1]?.mean : '의미 없음';
});

const thirdRecommendedName = computed(() => {
  return recommendedNames.value.length > 0 ? recommendedNames.value[2]?.name : '이름 없음';
});
 
const thirdRecommendedNameMean = computed(() => {
  return recommendedNames.value.length > 0 ? recommendedNames.value[2]?.mean : '의미 없음';
});

const fourthRecommendedName = computed(() => {
  return recommendedNames.value.length > 0 ? recommendedNames.value[3]?.name : '이름 없음';
});
 
const fourthRecommendedNameMean = computed(() => {
  return recommendedNames.value.length > 0 ? recommendedNames.value[3]?.mean : '의미 없음';
});

const fifthRecommendedName = computed(() => {
  return recommendedNames.value.length > 0 ? recommendedNames.value[4]?.name : '이름 없음';
});
 
const fifthRecommendedNameMean = computed(() => {
  return recommendedNames.value.length > 0 ? recommendedNames.value[4]?.mean : '의미 없음';
});

const trendDescription = computed(() => {
  return trendDescriptions[trend.value] || '호불호없이 좋은';
});

const mbtiDescription = computed(() => {
  return mbtiDescriptions[mbti.value] || '성격 설명 없음';
})

const hashtagDescription = computed(() => {
  return meanings.value.length > 0 ? meanings.value.map((tag) => `#${tag}`).join(' ') : '해시태그 없음';
});

const trendDescriptions = {
  tredy: '최근 인기있는',
  classic: '예전부터 사랑받던',
  rare: '흔하지 않은',
  alltime: '호불호없이 좋은',
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

const setAside = () => {
  isSecondNameVisible.value = false; 
  isThirdNameVisible.value = false;
  isFourthNameVisible.value = false; 
  isFifthNameVisible.value = false; 
  isShowMoreButtonVisible.value = true;
  isFoldVisible.value = false;
};

const isMoreResultVisible = () => {
    isSecondNameVisible.value = true; 
    isThirdNameVisible.value = true;
    isFourthNameVisible.value = true; 
    isFifthNameVisible.value = true; 
    isShowMoreButtonVisible.value = false;
    isFoldVisible.value = true;
};

const hideElements = () => {
  document.querySelector('.container').style.marginTop = '388px';
  document.querySelector('.other-names').style.display = 'none';
  document.querySelector('.link-button').style.display = 'none';
  document.querySelector('.save-button').style.display = 'none';
  document.querySelector('.share-button').style.display = 'none';
  document.querySelector('.go-back-to-start-button').style.display = 'none';
};

const restoreElements = () => {
  document.querySelector('.container').style.marginTop = '288px';
  document.querySelector('.other-names').style.display = '';
  document.querySelector('.link-button').style.display = '';
  document.querySelector('.save-button').style.display = '';
  document.querySelector('.share-button').style.display = '';
  document.querySelector('.go-back-to-start-button').style.display = '';
  
  nextTick(() => {
    isShowMoreButtonVisible.value = !(isSecondNameVisible.value || isThirdNameVisible.value || isFourthNameVisible.value || isFifthNameVisible.value);
  });
};

const downloadImage = () => {
  isGeneratingImage.value = true;

  nextTick(() => {
    document.fonts.ready.then(() => {
      const element = document.querySelector('.capture');

      hideElements();

      //const pageWidth = document.documentElement.scrollWidth; 
      const pageHeight = document.documentElement.scrollHeight; 

      html2canvas(element, {
        scale: 2,
        useCORS: true,
        //width: pageWidth,
        width: window.innerWidth,
        height: pageHeight, 
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
          restoreElements();
        });
    });
  });
};

const shareContent = async () => {
  isGeneratingImage.value = true;
  const element = document.querySelector('.capture');

  hideElements();

  try {
    const canvas = await html2canvas(element, {
      scale: 2, 
      useCORS: true,
      width: window.innerWidth, 
      height: document.documentElement.scrollHeight, 
    });

    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));

    const file = new File([blob], 'yourname-result.png', { type: 'image/png' });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        files: [file],
        title: 'Your Name Result',
        text: '제 이름을 확인해보세요!',
      });
      console.log('공유 성공');
    } else {
      alert('이미지 공유 기능이 이 브라우저에서 지원되지 않습니다.');
    }
  } catch (error) {
    console.error('이미지 생성 또는 공유 중 오류 발생:', error);
    alert('이미지 공유에 실패했습니다.');
  } finally {
    isGeneratingImage.value = false; 
    restoreElements(); 
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
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 48px;
  display: flex;
  align-items: center;
  color: #252525;
}

.line {
  width: 150vw;
  top: 204px;
  height: 2px;
  background-color: black;
  position: relative;
  left: -100px;
}
.name {
  font-family: 'San Francisco', sans-serif;
  text-align: center;
  width: 100%;
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
.other-name-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 100px;
  margin-left: 70px;
  margin-right: 70px;
  justify-content: center; 
  font-family: 'San Francisco', sans-serif;
  font-style: normal;
  color: #252525;
}
.rank {
    position: relative;
    font-weight: 600;
    font-size: 32px;
    line-height: 38px;
}
.other-name {
    position: relative;
    font-weight: 900;
    font-size: 48px;
    line-height: 57px;
}
.name-mean {
    position: relative;
    font-family: 'NanumSquare', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
}
.link-button {
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