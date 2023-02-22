<template>
  <div class="test_page">
    <h2>分割线</h2>
    <p>一般在页面用来分开不同的操作对象</p>
    <div class="flex">
      <m-button size="mini" type="primary" class="mr_0">按钮</m-button>
      <m-divider />
      <m-button size="mini">Button</m-button>
    </div>
    <m-expand title="演示代码" :code="codeStr"></m-expand>

    <m-divider type="vertical" />

    <div class="flex">
      <m-button type="text" class="mr_0">按钮</m-button>
      <m-divider />
      <m-button type="text">Button</m-button>
    </div>
    <m-expand title="演示代码" :code="codeStr"></m-expand>

    <m-divider type="vertical" />

    <div class="flex">
      <m-button size="mini" class="mr_0" type="primary">按钮</m-button>
      <m-divider />
      <m-button size="mini">Button</m-button>
    </div>
    <m-expand title="演示代码" :code="codeStr"></m-expand>

    <h2>Api</h2>
    <m-table :columns="tbColumns" :data="Data" />
  </div>
</template>

<script setup lang="ts">
const codeStr = `
      <m-button size="mini" type="primary" class="mr_0">按钮</m-button>
      <m-divider />
      <m-button size="mini">Button</m-button>
`;
const tbColumns = [
  {
    key: "param",
    title: "参数",
    custom: {
      header: "paramHeader",
      body: "paramBody",
    },
  },
  {
    key: "desc",
    title: "说明",
  },
  {
    key: "type",
    title: "类型",
  },
  {
    key: "default",
    title: "默认值",
  },
  {
    key: "version",
    title: "版本",
  },
];
const Data = [
  {
    param: "type",
    desc: "按钮类型 vertical | horizontal",
    default: "horizontal",
    type: "string",
    version: "1.1.11",
  },
];
</script>

<style scoped>
.flex {
  display: flex;
  align-items: center;
}
.mr_0 {
  margin-right: 0;
}
</style>