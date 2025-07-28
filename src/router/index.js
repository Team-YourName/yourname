
import IntroPage from '@/pages/IntroPage.vue';
import DescriptionPage from '@/pages/DescriptionPage.vue';
import LoadingPage from '@/pages/LoadingPage.vue';
import ResultPage from '@/pages/ResultPage.vue';
import QuestionGenderPage from '@/pages/QuestionGenderPage.vue';
import QuestionTypePage from '@/pages/QuestionTypePage.vue';
import QuestionMeaningPage from '@/pages/QuestionMeaningPage.vue';
import QuestionMbtiPage from '@/pages/QuestionMbtiPage.vue';
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
    component: QuestionGenderPage,
},
{
    path: '/question-type',
    name: 'QuestionTypePage',
    component: QuestionTypePage,
},
{
    path: '/question-meaning',
    name: 'QuestionMeaningPage',
    component: QuestionMeaningPage,
},
{
    path: '/question-mbti',
    name: 'QuestionMbtiPage',
    component: QuestionMbtiPage,
},
{
    path: '/result',
    name: 'ResultPage',
    component: ResultPage,
},
{
    path: '/:pathMatch(.*)*',
    redirect: '/',
}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.name === 'ResultPage' && !from.name) {
      next('/');
    } else {
      next(); 
    }
});
  
export default router;