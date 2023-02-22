<template>
  <div class="test_page">
    <h2>Table组件</h2>
    <div class="mb_16">
      <p>没有border分割的列表</p>
      <m-table :columns="tbColumns" :data="Data" />
    </div>
    <div class="mb_16">
      <p>带表格的列表</p>
      <m-table :columns="tbColumns" :data="Data" hasBorder height="50px" />
    </div>

    <div class="mb_16">
      <p>带斑马纹的列表</p>
      <m-table :columns="tbColumns" :data="Data" hasBorder stripe />
    </div>

    <div class="mb_16">
      <p>没有表头的列表</p>
      <m-table :columns="tbColumns" :data="Data" :showHeader="false" />
    </div>
  </div>
</template>

<script setup lang="ts">
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
    desc: "按钮类型 primary | error | warning",
    default: "primary",
    type: "string",
    version: "1.1.11",
  },
  {
    param: "msg",
    desc: "提示文案",
    default: "",
    type: "string",
    version: "1.1.11",
  },
  {
    param: "duration",
    desc: "销毁时间",
    default: "3000",
    type: "number",
    version: "1.1.11",
  },
  {
    param: "duration",
    desc: "销毁时间",
    default: "3000",
    type: "number",
    version: "1.1.11",
  },
];
</script>

<style scoped>

</style>