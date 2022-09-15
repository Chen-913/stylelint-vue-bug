import { createApp } from 'vue';
import App from './App.vue';
import 'animate.css';
import 'normalize.css';
// 公共样式
import './styles/common.less';
import 'element-plus/dist/index.css'; // element-plus 全局引入样式

createApp(App).mount('#app');
