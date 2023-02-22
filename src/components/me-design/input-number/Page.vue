<template>
  <div class="test_page">
    <h2>输入数字组件</h2>
    <div class="mb_16">
      <MInputNumber
        placeholder="输入Number"
        v-model:value="state.value1"
        size="small"
        :max="12"
        :min="5"
        disabled
        width="200"
      />
      <MInputNumber
        v-model:value="state.value2"
        :max="12"
        size="small"
        :min="5"
        prefix
        width="240"
        ref="inputRef"
      >
        <template #prefix>宽度</template>
      </MInputNumber>
      <MInputNumber
        v-model:value="state.value3"
        size="small"
        width="200"
        prefix
        suffix
      >
        <template #prefix>
          <m-icon name="minus" @click="()=> state.value3 -= 1"></m-icon>
        </template>
        <template #suffix><m-icon @click="()=>state.value3+=1" name="plus"></m-icon></template>
      </MInputNumber>
    </div>
    <div class="mb_16">
      <m-button @click="ok" type="primary">确认</m-button>
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
import { ref, onMounted,reactive } from "vue";
import Message from "../message";
const value = ref("");
const inputRef = ref();
const state = reactive({
  value1:1,
  value2:2,
  value3:3
})


onMounted(() => {
  inputRef.value.focus();
});
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
];

const ok = () => {
  Message({
    type: "success",
    msg: JSON.stringify(state) || "空的哦",
  });
};

const codeStr = `
      <m-input
        type="text"
        placeholder="输入文本"
        v-model:value="value"
        size="small"
        width="200"
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
      >
        <template #prefix>https://</template>
        <template #suffix>.com</template>
      </m-input>
`;
</script>

<style scoped></style>
