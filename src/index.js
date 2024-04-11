import { createApp } from 'vue';
import { createPinia } from 'pinia';
// import ElementPlus  from 'element-plus';
import App from '@/App';
import Store from '@/sotre';
import Router from '@/router';
import '@/assest/css/init_style.css';
import '@/assest/css/hover.css';


const app = createApp(App);
const pinia = createPinia();

// 公共数据管理(作对比，实际项目只用一个就ok，推荐新项目用pinia)
app.use(Store);
app.use(pinia);

// 路由
app.use(Router);

// UI
// app.use(ElementPlus) 利用插件实现自动导入

app.mount('#app')