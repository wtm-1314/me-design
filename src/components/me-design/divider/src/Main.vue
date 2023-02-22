<template>
  <div
    class="m-divider"
    :class="{
      ' m-vertical': props.type === 'vertical',
    }"
  />
</template>

<script setup>
const props = defineProps({
  type: String,
  default: "horizontal", // vertical
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/var.scss";
.m-divider {
  width: 1px;
  background: $border_line_color;
  position: relative;
  display: inline-block;
  margin: 0 8px;
  vertical-align: middle;
  height: 1.2rem;
  &.m-vertical {
    display: block;
    width: 100%;
    height: 1px;
    margin: 8px 0;
  }
}
</style>