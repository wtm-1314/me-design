<template>
  <div class="test_page">
    <div>
      <h2>hover文字提示</h2>
      <m-button v-title="{text:'提示文案'}">鼠标悬浮提示</m-button>
      <m-button v-title="{text:'提示文案'}" type="primary">鼠标悬浮提示2</m-button>
      <MExpand :code="codeStr" title="提示Message使用案例" />

      <h2>Api</h2>
      <m-table :columns="tbColumns" :data="Data" />
    </div>
  </div>
</template>

<script setup lang="ts">
const codeStr = `
      <m-button v-title="{text:'提示文案'}">鼠标悬浮提示</m-button>

      <m-button v-title="{text:'提示文案'}" type="primary">鼠标悬浮提示2</m-button>
  `

  const tbColumns = [
  {
    key: "param",
    title: "参数",
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
    param: "v-title",
    desc: "指令",
    default: "v-title",
    type: "object",
    version: "1.1.11",
  },
  {
    param: "text",
    desc: "提示文案",
    default: "",
    type: "string",
    version: "1.1.11",
  },
  {
    param: "position",
    desc: "位置",
    default: "left",
    type: "string",
    version: "1.1.11",
  },
];
</script>

<style scoped>

</style>