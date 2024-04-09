import { createApp } from 'vue';
import App from './App.vue';
import Store from './sotre/index.js';
import Router from './router/index.js';

const app = createApp(App);

// 公共数据管理
app.use(Store);

// 路由
app.use(Router);

app.mount('#app')