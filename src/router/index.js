import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import Home from '../views/Home/index.vue';
import About from '../views/About/index.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },

  {
    path: '/home',
    component: Home
  },

  {
    path: '/about',
    component: () => import(/** webpack_async_chunk_about **/ '../views/About/index.vue')
  }
]

export default createRouter({
  routes,
  history: createWebHistory('/')
})