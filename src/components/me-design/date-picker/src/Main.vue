<template>
  <div class="m-date-picker">
    <div class="date-view">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name:'MDatePicker',
  props:{},
  setup(){

  }
}
</script>

<style lang="scss" scoped>
.m-date-picker{
  display: inline-block;
  width: 180px;
  height: 36px;
  line-height: 34px;
  border: 1px solid $border_line_color;
  .date-view{
    width: 100%;
    height: 100%;
    text-align: left;
  }
}
</style>