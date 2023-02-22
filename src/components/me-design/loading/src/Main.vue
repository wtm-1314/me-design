<template>
  <div
    class="m-loading"
    :class="[props.theme === 'dark' ? 'm-loading-dark' : 'm-loading-light']"
  >
    <div class="inner">
      <!-- 绘制两个圆形 -->
      <div
        class="m-big-loadinig"
        :class="{
          'm-mini-loading': size === 'mini',
        }"
      >
        <div class="m-inner-loading"></div>
      </div>
      <div
        class="text"
        :class="{
          'm-loading-text-mini': size === 'mini',
        }"
      >
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: "加载中",
  },
  theme: {
    type: String,
    default: "light",
  },
  size: {
    type: String,
    default: "small",
  },
});
</script>

<style lang="scss" scoped>
.m-loading {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &.m-loading-light {
    background: rgba(255, 255, 255, 0.8);
    color: $primary_color;
  }
  &.m-loading-dark {
    background: rgba(0, 0,0, 0.8);
    color: #fff;
  }

  .m-loading-text-mini{
    font-size: 12px;
  }
}

.m-big-loadinig {
  width: 48px;
  height: 48px;
  text-align: center;
  border-top: 2px solid $primary_color;
  border-bottom: 2px solid $primary_color;
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
  border-radius: 50%;
  animation: mrotate 1.6s infinite linear;
  margin-bottom: 12px;
  .m-inner-loading {
    display: inline-block;
    width: 26px;
    height: 26px;
    margin-top: 9px;
    border-radius: 50%;
    border-left: 2px solid $primary_color;
    border-right: 2px solid $primary_color;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    animation: mlotate 0.8s infinite linear;
  }

  &.m-mini-loading {
    width: 36px;
    height: 36px;
    margin-bottom: 8px;
    .m-inner-loading {
      display: inline-block;
      width: 18px;
      height: 18px;
      margin-top: 7px;
    }
  }
}
</style>
