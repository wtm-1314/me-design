import { createApp,version } from 'vue';
import './style.css';
import App from './App.vue';
import MeDesign from './components';
import MLang from './lang';
import UseLog from './utils/useLog';
import Mjs from './utils/utils';
import router from './router';
const lang = new MLang({lang:'en'});
const {error,warn,log} = UseLog();
const app = createApp(App);
// 异常报错
app.config.errorHandler = (...arg: any):void=>{
    error(...arg);
};
log(version);
app.config.warnHandler = (msg, instance, trace):void => {
    warn(msg, instance, trace);
};
// 设置此项为 true 可以在浏览器开发工具的“性能/时间线”页中启用对组件初始化、编译、渲染和修补的性能表现追踪。
app.config.performance = true;
// 全局实例挂载对象
app.config.globalProperties.$t = lang.t;
app.config.globalProperties.$setLang = lang.setLang;
app.config.globalProperties.$Mjs = Mjs;

app.use(MeDesign).use(router).mount('#app');

