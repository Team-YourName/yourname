
import ExplanationPage from '@/pages/ExplanationPage.vue';
import IntroPage from '@/pages/IntroPage.vue';
import DescriptionPage from '@/pages/DescriptionPage.vue';
import LoadingPage from '@/pages/LoadingPage.vue';
import ResultPage from '@/pages/ResultPage.vue';
import QuestiongGenderPage from '@/pages/QuestiongGenderPage.vue';
import QuestiongTypePage from '@/pages/QuestiongTypePage.vue';
import QuestiongMeaningPage from '@/pages/QuestiongMeaningPage.vue';
import QuestiongMbtiPage from '@/pages/QuestiongMbtiPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
{
    path: '/',
    name: 'IntroPage',
    component: IntroPage,
},
{
    path: '/description',
    name: 'DescriptionPage',
    component: DescriptionPage,
},
{
    path: '/loading',
    name: 'LoadingPage',
    component: LoadingPage,
},
{
    path: '/question-gender',
    name: 'QuestionGenderPage',
    component: QuestiongGenderPage,
},
{
    path: '/question-type',
    name: 'QuestionTypePage',
    component: QuestiongTypePage,
},
{
    path: '/question-meaning',
    name: 'QuestionMeaningPage',
    component: QuestiongMeaningPage,
},
{
    path: '/question-mbti',
    name: 'QuestionMbtiPage',
    component: QuestiongMbtiPage,
},
{
    path: '/result',
    name: 'ResultPage',
    component: ResultPage,
}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
  
export default router;