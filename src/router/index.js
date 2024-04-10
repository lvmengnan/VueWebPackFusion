import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home';
import About from '@/views/About';

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
    component: () => import(/** webpack_async_chunk_about **/ '@/views/About')
  },

  {
    path: '/piniaa',
    component: () => import(/** webpack_async_chunk_about **/ '@/views/PiniaA')
  },

  {
    path: '/piniab',
    component: () => import(/** webpack_async_chunk_about **/ '@/views/PiniaB')
  }
]

export default createRouter({
  routes,
  history: createWebHistory('/')
})