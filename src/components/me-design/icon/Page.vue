<template>
  <div class="test-api">
    <h2>字体图标</h2>
    <MExpand :code="codeStr" title="子图图标使用方式" />

    <h2>Api</h2>
    <m-table :columns="tbColumns" :data="Data" class="mb_16" />

    <div >一键复制代码</div>
  </div>
  <div class="test_page">
    <div
      class="icon-view"
      data-clipboard-action="copy"
      :data-clipboard-text="item.str"
      :id="item.font_class"
      v-for="item in list"
      :key="item.icon_id"
      @click="proxy.$Mjs.copy('#'+item.font_class)"
    >
      <m-icon :name="item.font_class" :fontSize="30" />
      <span>{{ item.font_class }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import json from "./src/fonticon/iconfont.json";
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
const { glyphs } = json;
const files = glyphs.filter((o) => o.font_class.includes("fill"));
const notFill = glyphs.filter((o) => !o.font_class.includes("fill"));

const list = [...notFill, ...files];

list.map(o=>{
  o.str = `<m-icon name="${o.font_class}" :fontSize="16" />`

  return o
})

const codeStr = `
    // template
    <m-icon name="iconName" />
    1、全局引入安装
    cosnt iconName = 'close'

    2、按需引入
    import { MIcon } from 'ming-ui
    import { createApp } from 'vue
    import 'ming-ui/style.css'
    createApp({}).use(MIcon)

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
    param: "name",
    desc: "字体名称",
    default: "",
    type: "string",
    version: "1.1.11",
  },
  {
    param: "fontSize",
    desc: "字体大小",
    default: "16",
    type: "number",
    version: "1.1.11",
  },
  {
    param: "btn",
    desc: "是否按钮",
    default: "false",
    type: "boolean",
    version: "1.1.11",
  },
];
</script>

<style lang="scss" scoped>
.test-api {
  padding: 13px;
}
.test_page {
  display: flex;
  flex-wrap: wrap;
  // justify-content: center;
}
.icon-view {
  width: 200px;
  height: 100px;
  margin: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  cursor: pointer;
  border-radius: 4px;
  transition: all 0.15s ease;
  box-shadow: 0 5px 12px -5px rgba(0,0,0,.12);
  &:hover {
    background: $primary_color;
    color: #fff;
    span {
      color: #fff;
    }
    .m-icon {
      color: #fff;
      font-size: 40px !important;
    }
  }
  span {
    color: #262626;
    margin-top: 12px;
  }
}
</style>
