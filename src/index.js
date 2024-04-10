import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App';
import Store from '@/sotre';
import Router from '@/router';

const app = createApp(App);
const pinia = createPinia();

// 公共数据管理(作对比，实际项目只用一个就ok，推荐新项目用pinia)
app.use(Store);
app.use(pinia);

// 路由
app.use(Router);

app.mount('#app')