<template>
  <div class="test_page">
    <div>
      <h3>全局弹窗提示信息组件</h3>
      <m-button @click="handleClick3('success')">Success</m-button>
      <m-button type="primary" @click="handleClick3('primary')"
        >Primary</m-button
      >
      <m-button type="danger" @click="handleClick3('error')">Danger</m-button>
      <m-button type="warning" @click="handleClick3('warning')"
        >Warning</m-button
      >
      <MExpand :code="codeStr" title="提示Message使用案例" />

      <m-divider type="vertical"></m-divider>
      <m-button @click="handleClick('success')">Success</m-button>
      <m-button type="primary" @click="handleClick('primary')"
        >Primary</m-button
      >
      <m-button type="danger" @click="handleClick('error')">danger</m-button>
      <m-button type="warning" @click="handleClick('warning')"
        >Warning</m-button
      >
      <MExpand :code="codeStr" title="消息主题暗黑色，搭配自己的页面自定义主题" />
      <m-divider type="vertical"></m-divider>
      <h2>Api</h2>
      <m-table :columns="tbColumns" :data="Data" />
    </div>
    
  </div>
</template>

<script setup>
import { Message } from "../message";

const handleClick3 = (type) => {
  Message({
    type: type,
    msg: "今天你很棒xxxxxx xxxxxxxx xxxxxxx xxxxxxx xxxxxxx！",
    duration: 3000,
    theme:'light'
  });
};
const handleClick = (type) => {
  Message({
    type: type,
    msg: "今天你很棒！",
    duration: 3000,
    theme:'dark'
  });
};

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
    param: "theme",
    desc: "主题 light | dark",
    default: "light",
    type: "string",
    version: "1.1.11",
  },
];

const codeStr = `
      <m-button @click="handleClick3('success')">Success</m-button>
      <m-button type="primary" @click="handleClick3('primary')"
        >Primary</m-button
      >
      <m-button type="danger" @click="handleClick3('error')">danger</m-button>
      <m-button type="warning" @click="handleClick3('warning')"
        >warning</m-button
      >

      import { Message } from "../message";

      const handleClick3 = (type) => {
        Message({
          type: type,
          msg: "今天你很棒！",
          duration: 3000,
          theme:'light'
        });
      };
`
</script>

<style lang="scss" scoped>
</style>