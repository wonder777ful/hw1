/* main.js */
import { createApp } from 'vue';
import App from './App.vue';
import Antd from 'ant-design-vue';
import router from './router';
import 'ant-design-vue/dist/reset.css'; 
import './index.css'; // 导入其他全局样式

const app = createApp(App);
app.use(router);
app.use(Antd);
app.mount('#app');