<template>
  <div class="test_page">
    <h2>输入框</h2>
    <p>表单组件 输入框组件</p>

    <div class="mb_16">
      <m-input
        type="text"
        placeholder="输入文本"
        v-model:value="value"
        size="small"
        disabled
        width="280"
        @blur="onInput"
        allowClear
      />
      <m-input
        type="email"
        v-model:value="value"
        :maxLength="12"
        size="small"
        prefix
        width="280"
        ref="inputRef"
        allowClear
      >
        <template #prefix>邮箱</template>
      </m-input>
      <m-input
        type="number"
        v-model:value="value"
        :maxLength="12"
        size="small"
        prefix
        suffix
        @blur="onInput"
        allowClear
      >
        <template #prefix>https://</template>
        <template #suffix>.com</template>
      </m-input>
    </div>
    <div class="mb_16">
      <m-button @click="ok" type="primary">确认</m-button>
    </div>

    <div class="mb_16">
      <h2>小尺寸</h2>
      <m-input
        type="text"
        placeholder="输入文本"
        v-model:value="value"
        size="small"
        width="240"
        @blur="onInput"
      />
      <m-input
        type="email"
        v-model:value="value"
        :maxLength="12"
        size="mini"
        prefix
        width="240"
        ref="inputRef"
      >
        <template #prefix>邮箱</template>
      </m-input>
      <m-input
        type="number"
        v-model:value="value"
        :maxLength="12"
        size="mini"
        width="280"
        prefix
        suffix
        disabled
        @blur="onInput"
      >
        <template #prefix>https://</template>
        <template #suffix>.com</template>
      </m-input>
    </div>
    <m-divider type="vertical"></m-divider>

    <m-expand :code="codeStr" title="代码案例"></m-expand>

    <h2>Api</h2>
    <m-table :columns="tbColumns" :data="Data" />
    <h2>事件</h2>
    <m-table :columns="tbColumns" :data="envenList" />
  </div>
</template>

<script setup lang="ts">
import { ref,onMounted } from "vue";
import Message from '../message'
const value = ref("123123");
const inputRef = ref();

const onInput = (val) => {
  console.log(val);
  
};

onMounted(()=>{
  inputRef.value.focus()
})
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
    desc: "类型，原生基本类型 除了number 和file",
    default: "text",
    type: "string",
    version: "1.1.11",
  },
  {
    param: "size",
    desc: "尺寸 small | mini",
    default: "small",
    type: "string",
    version: "1.1.11",
  },
  {
    param: "value",
    desc: "双向绑定的值",
    default: "",
    type: "string | number | ...",
    version: "1.1.11",
  },
  {
    param: "maxLength",
    desc: "最大长度",
    default: "",
    type: "number",
    version: "1.1.11",
  },
  {
    param: "minlength",
    desc: "最小长度",
    default: "",
    type: "number",
    version: "1.1.11",
  },
  {
    param: "prefix",
    desc: "前缀",
    default: "fasle",
    type: "Boolean",
    version: "1.1.11",
  },
  {
    param: "suffix",
    desc: "后缀",
    default: "fasle",
    type: "Boolean",
    version: "1.1.11",
  },
  {
    param: "width",
    desc: "宽度",
    default: "180",
    type: "number | string",
    version: "1.1.11",
  },
  {
    param: "placeholder",
    desc: "placeholder 文本提示",
    default: "",
    type: "string",
    version: "1.1.11",
  },
  {
    param: "allowClear",
    desc: "清空文本",
    default: "false",
    type: "Boolean",
    version: "1.1.11",
  },
];
const envenList = [
  {
    param: "change",
    desc: "改变值触发",
    default: "()=>{}",
    type: "envent",
    version: "1.1.11",
  },
  {
    param: "blur",
    desc: "blur触发",
    default: "()=>{}",
    type: "envent",
    version: "1.1.11",
  },
]

const ok = () =>{
  Message({
    type:'success',
    msg: value.value || '空的哦',
  })
}

const codeStr = `
      <m-input
        type="text"
        placeholder="输入文本"
        v-model:value="value"
        size="small"
        width="200"
        @blur="onInput"
      />

      <m-input
        type="email"
        v-model:value="value"
        :maxLength="12"
        size="small"
        prefix
        suffix
        width="280"
        ref="inputRef"
      >
        <template #prefix>邮箱</template>
        <template #suffix>@qq.com</template>
      </m-input>
      
      <m-input
        type="number"
        v-model:value="value"
        :maxLength="12"
        size="small"
        width="200"
        prefix
        suffix
        @blur="onInput"
      >
        <template #prefix>https://</template>
        <template #suffix>.com</template>
      </m-input>
`
</script>

<style scoped>
</style>