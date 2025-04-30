import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import DrinkDetails from '../views/DrinkDetails.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/drink/:id', name: 'DrinkDetails', component: DrinkDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;