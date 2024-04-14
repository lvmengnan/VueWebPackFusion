import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home';

export const routes = [
  {
    path: '/',
    redirect: '/home'
  },

  {
    path: '/home',
    name: '首页',
    component: Home
  },

  {
    path: '/about',
    name: '关于',
    component: () => import(/* webpackChunkName: "webpack_async_chunk_about" */ '@/views/About')
  },
  {
    path: '/piniaa',
    name: 'Pinia A',
    component: () => import(/* webpackChunkName: "webpack_async_chunk_pinia_a" */ '@/views/PiniaA')
  },

  {
    path: '/piniab',
    name: 'Pinia B',
    component: () => import(/* webpackChunkName: "webpack_async_chunk_pinia_b" */ '@/views/PiniaB')
  },
  {
    path: '/ui',
    name: 'Element UI',
    component: () => import(/*  webpackChunkName: "webpack_async_chunk_ele_ui" */'@/views/UIS'),
    children: [
      {
        path: 'buttons',
        name: 'UI BUTTONS',
        component: () => import(/*  webpackChunkName: "webpack_async_chunk_ele_ui_buttons" */'@/views/UIS/Buttons'),
      },
      {
        path: 'icons',
        name: 'UI ICONS',
        component: () => import(/*  webpackChunkName: "webpack_async_chunk_ele_ui_icons" */'@/views/UIS/Icons'),
      },
    ]
  },
  {
    path: '/slots',
    name: 'Slots Page',
    component: () => import(/* webpackChunkName: "webpack_async_chunk_slots" */ '@/views/Slots')
  },
]

export default createRouter({
  routes,
  history: createWebHistory('/')
})