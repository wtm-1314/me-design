<template>
  <div class="home">
    <p>设计一个完善的fetch请求工具类，一个ui组件，</p>
    <h1>第一步：安装 MeDesign</h1> 
    <m-expand :code="installStr" open title="安装组件库提示">
    </m-expand>

    <h1>第二部：如何使用 MeDesign</h1>
    <m-expand :code="useStr" open title="使用 MeDesign 方法"></m-expand>
  </div>
</template>

<script setup lang="ts">

const installStr = `
  node // 下载node.js

  npm i me-design -D -S
`

const useStr = `
import { createApp } from 'vue'
import App from 'App.vue'
import MeDesign from 'me-design'
import 'me-design/dist/style.css'

const app = createApp(App)
app.use(MeDesign).mount('#app')

`

</script>

<style lang="scss" scoped>
.home{
  background: #fff;
  width: 100%;
  padding: 16px;
  text-align: center;
}
</style>