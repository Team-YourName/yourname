import { defineStore } from 'pinia';

export const useNameStore = defineStore('name', {
  state: () => ({
    recommendedNames: [],
    mbti: '',
    trend: '',
    meanings: [],
  }),
  actions: {
    setRecommendations({ recommendedNames, mbti, trend, meanings }) {
      this.recommendedNames = recommendedNames;
      this.mbti = mbti;
      this.trend = trend;
      this.meanings = meanings;
    },
  },
});