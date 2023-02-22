<template>
  <div
    v-show="show"
    class="m-back-top"
    @click="onBackTop"
    :style="{
      bottom: parseInt(props.bottom) + 'px',
      right: parseInt(props.right) + 'px',
    }"
  >
    <slot>
      <m-button circle type="primary">
        <m-icon name="vertical-align-top" :fontSize="16" />
      </m-button>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from "vue";
import UseBack from "@/utils/useBack";
import MButton from "../button";
import MIcon from "../icon";

const props = defineProps({
  target: {
    type: String,
    default: "document.body",
  },
  scrollNum: {
    type: Number,
    default: 200,
  },
  bottom: {
    type: Number,
    default: 30,
  },
  right: {
    type: Number,
    default: 30,
  },
});
let timer: any = null;
const target = ref("");
const show = ref(false);
onMounted(() => {
  target.value = props.target
    ? document.querySelector(props.target)
    : document?.body;
  target.value && target.value.addEventListener("scroll", init);
});
const init = (e) => {
  if (timer) return;
  if (e?.target?.scrollTop >= props.scrollNum) {
    show.value = true;
  } else {
    show.value = false;
  }
};

onBeforeUnmount(() => {
  target.value && target.value.removeEventListener?.("scroll", init);
});

const { toTop } = UseBack()

const onBackTop = () => {
  toTop(target.value)
  show.value = false;
  timer = setTimeout(() => {
    clearTimeout(timer);
    timer = null;
  }, 1000);
};
</script>

<style lang="scss" scoped>
.m-back-top {
  position: fixed;
  display: inline-block;
  z-index: 3000;
}
</style>