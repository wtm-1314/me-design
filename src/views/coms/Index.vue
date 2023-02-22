<template>
  <div class="layout">
    <LeftNavVue class="left_main" />
    <div class="page_wrap">
      <div class="main-content">
        <router-view />
      </div>
    </div>
    <m-backtop target=".main-content" />
  </div>
</template>

<script setup lang="ts">
import LeftNavVue from "../../LeftNav.vue";
</script>

<style scoped lang="scss">
.layout {
  display: flex;
  width: 100%;
  height: 100%;
  .left_main {
    flex: 0 0 16vw;
    min-width: 220px;
    overflow: auto;
    padding: 12px;
  }
  .page_wrap {
    width: 100%;
    border-radius: 4px;
    position: relative;
    height: 100%;
    .main-content {
      background: #fff;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
    }
  }
}
</style>