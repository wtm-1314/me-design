<template>
  <div class="test_page">
    <div>
      <h2>Loading加载</h2>
      <p>使用方式，请求数据或者需要等待的时候需要加载，避免用户频繁操作</p>

      <h3>大尺寸加载</h3>
      <div v-loading="true" loading-size="big" class="demo">默认</div>
      <MExpand :code="codeStr" title="大尺寸加载使用案例" />

      <h3>小尺寸</h3>
      <div
        class="demo"
        v-loading="true"
        loading-text="加载中"
        loading-theme="light"
        loading-size="mini"
      >
        暂无数据
      </div>
      
      <MExpand :code="codeStr1" title="小尺寸加载使用案例" />

      <h3>暗黑模式</h3>
      <div v-loading="true" class="demo" loading-theme="dark">默认</div>
      <MExpand :code="codeStr2" title="暗黑模式加载使用案例" />

      <h2>Api</h2>
      <m-table :columns="tbColumns" :data="Data" />
    </div>
  </div>
</template>

<script setup lang="ts">
const codeStr = `<div v-loading="true" loading-size="big" class="demo">默认</div>`;
const codeStr1 = `<div
      class="demo"
      v-loading="true"
      loading-text="加载中..."
      loading-theme="light"
    >
      暂无数据
    </div>`;
const codeStr2 = `
    <div v-loading="true" class="demo" loading-theme="dark">默认</div>
    `;
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
    param: "v-loading",
    desc: "指令加载",
    default: "false",
    type: "boolean",
    version: "1.1.11",
  },
  {
    param: "loading-text",
    desc: "提示文案",
    default: "",
    type: "string",
    version: "1.1.11",
  },
  {
    param: "loading-theme",
    desc: "主题 light | dark",
    default: "light",
    type: "string",
    version: "1.1.11",
  },
];
</script>

<style lang="scss" scoped>
.demo {
  height: 400px;
  margin: 0 14px 14px 0;
  background: #ccc;
  padding: 16px;
  border-radius: 4px;
}
</style>