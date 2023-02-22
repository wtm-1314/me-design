<template>
  <div
    class="m-icon"
    :class="[iconName, btn ? 'm-icon-btn' : '']"
    :style="iconStyle"
  />
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  fontSize: {
    type: Number,
    default: 16,
  },
  btn: {
    type: Boolean,
    default: false,
  },
});
const iconName = computed(() => {
  return props.name ? "icon-" + props.name : "";
});
const iconStyle = computed(() => {
  const fontS = parseInt(props.fontSize ? props.fontSize : 16);
  return {
    fontSize: fontS + "px",
  };
});
</script>

<style lang="scss" scoped>
@import "./fonticon/iconfont.css";
.m-icon {
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  margin-right: 8px;
  &:last-child {
    margin-right: 0;
  }
}
.m-icon-btn {
  background: $btn_icon_color;
  cursor: pointer;
  &:hover {
    background: $hover_color;
  }
}
</style>
