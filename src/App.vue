<script setup lang="ts">
import { ref, getCurrentInstance, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { businessComponents, getHeader } from "./router/page";
const route = useRoute();
const router = useRouter();
const { proxy } = getCurrentInstance();
const isLoading = ref(false);
const data = getHeader();
const activeKey = ref("");
const initLoading = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 500);
};
initLoading();
watch(
  () => route.name,
  () => {
    initLoading();
  }
);

onMounted(() => {
  activeKey.value = "Home";
  router.push('/index')
});

const change = (obj) => {
  console.log(obj);
  router.push(obj.path);
};
</script>

<template>
  <div class="app" v-loading="isLoading">
    <div class="my_header">
      <div class="headers">
        <div class="logo">
          <img src="../public/logo.svg" alt="" />
          <div class="title">{{ proxy.$t("common.app_title") }}</div>
        </div>
        <div class="right_header">
          <m-menu
            mode="horizontal"
            :data="data"
            :open-menus="['0', '1']"
            :active="activeKey"
            @change="change"
          />
        </div>
      </div>
    </div>
    <div class="app-content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100vh;
  min-height: 300px;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;

  .my_header {
    height: 50px;
    background: #fff;
    width: 100%;
    min-width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid $border_line_color;
    position: relative;
    top: 0;
    left: 0;
    z-index: 3;

    .headers {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 12px;

      .logo {
        display: flex;
        align-items: center;
        height: 50px;

        img {
          width: 36px;
          margin-right: 6px;
        }
      }
    }
    .right_header {
      flex: 1;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
}

.app-content {
  display: flex;
  width: 100%;
  height: calc(100vh - 50px);
  min-width: 800px;
}
</style>
