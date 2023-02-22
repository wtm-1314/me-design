<template>
  <div class="m-code">
    <div class="m-code-icon">
      {{ props.title }}
      <MIcon
        name="code"
        @click="handleClick"
        :btn="true"
        v-title="{ text: !isShow ? '查看源码案例' : '收起源码' }"
      />
      <m-icon name="file-copy" v-title="{ text: '复制代码' }" :fontSize="16" id="btn" btn @click="proxy.$Mjs.copy('#btn')" :data-clipboard-text="props.code" />
    </div>
    <pre v-show="isShow">
      <code ref="myRef"></code> 
    </pre>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted,watch,getCurrentInstance } from "vue";
import MIcon from "../../icon";
import MButton from "../../button";
const props = defineProps({
  code: {
    type: String,
    default: "",
  },
  title:{
    type:String,
    default:'案例'
  },
  open:{
    type:Boolean,
    default: false
  }
});
const myRef = ref("");
const isShow = ref(props.open);
onMounted(() => {
  // @ts-ignore
  myRef.value.innerText = props.code;
});

const { proxy } = getCurrentInstance()

watch(()=>props.open,(val)=>{
  isShow.value = val
})

const handleClick = () => {
  isShow.value = !isShow.value;
};
</script>

<style scoped lang="scss">
pre {
  background: rgb(41, 43, 43);
  border: 1px solid $border_line_color;
  border-radius: 4px;
  color: rgb(213, 210, 210);
  padding: 12px;
  width: 100%;
  .t_r{
    text-align: right;
  }
}
.m-code {
  text-align: left;
  margin:0;
  width: 100%;
  .m-code-icon {
    text-align: left;
    margin: 8px 0;
  }
}
</style>