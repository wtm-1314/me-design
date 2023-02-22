# me-design 组件库
 基于vue3开发出来的web前端常用的组件有很多
 
## 开始

1、克隆项目到本地

2、安装依赖 

- 确保安装node.js
- npm i me-design --no-save


``` javascript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import MeDesign from 'me-design'
import 'me-design/dist/style.css'

const app = createApp(App)
app.use(MeDesign).mount('#app')

```

## UI组件清单
- Button 按钮
- Message 组件
- loading 组件
- icon 图标组件
- dialog 对话
- input 组件
- inputNumber 组件
- ...