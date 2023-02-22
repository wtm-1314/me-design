<template>
  <div class="test_page">
    <h2>Menu菜单组件</h2>
    <p>页面导航器，用于用户更快切换对应功能</p>
    <m-menu
      mode="vertical"
      style="width: 200px"
      :data="data"
      :open-menus="['0', '1']"
      :active="$route.name"
      @change="change"
    />

    <m-divider type="vertical"></m-divider>
    <div>
      <m-menu
        mode="horizontal"
        :data="data"
        :open-menus="['0', '1']"
        :active="$route.name"
        @change="change"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const data = [
  {
    path: "/",
    key: "0",
    title: "Ui组件",
    children: [
      {
        path: "/button",
        key: "1",
        title: "demo",
      },
      {
        path: "/test2",
        key: "12",
        title: "demo212313213213213213",
      },
    ],
  },

  {
    path: "",
    key: "12313",
    title: "业务组件",
    children: [
      {
        path: "/bu3tton",
        key: "123123123",
        title: "demo",
      },
      {
        path: "/test2",
        key: "12123123",
        title: "demo212313213213213213",
      },
    ],
  },
];
const change = () => {};
</script>

<style scoped>
</style>