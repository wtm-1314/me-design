<template>
  <!-- 横向菜单 -->
  <div class="m-menu">
    <div
      class="menu-item"
      v-for="item in data"
      :key="item.path"
      :class="{
        active: item.key === activeVal,
      }"
      @click="onItemChange(item)"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script lang="ts">
import { ref, watch, PropType } from "vue";
import { menuItem } from "./type";

export default {
  name: "Menu",
  props: {
    data: {
      type: Array as PropType<menuItem[]>,
      default: () => [],
    },
    openMenus: {
      type: Array,
      default: () => [],
    },
    active: {
      type: String,
      default: "",
    },
  },
  setup(props, ctx) {
    const openKeys = ref(props.openMenus);
    const activeVal = ref(props.active);
    const onOpenChange = (obj: menuItem) => {
      if (!openKeys.value.length) {
        openKeys.value.push(obj.key);
        return;
      }
      const index = openKeys.value.findIndex((item) => item === obj?.key);
      if (index > -1) {
        openKeys.value.splice(index, 1);
      } else {
        obj?.key && openKeys.value.push(obj?.key);
      }
    };
    const onItemChange = (obj: any) => {
      activeVal.value = obj.key;
      ctx.emit("change", obj);
    };

    watch(
      () => props.active,
      (v) => {
        activeVal.value = v;
      }
    );

    watch(
      () => props.openMenus,
      (v) => {
        openKeys.value = v;
      }
    );
    return {
      openKeys,
      onOpenChange,
      activeVal,
      onItemChange,
    };
  },
};
</script>

<style lang="scss" scoped>
.m-menu {
  width: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  .menu-item {
    cursor: pointer;
    height: 36px;
    line-height: 36px;
    padding: 0 12px;
    font-size: 14px;
    color: $font_color;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    margin-right: 12px;
    border-bottom: 2px solid transparent;
    &:last-child{
      margin-right: 0;
    }
    &:hover {
      color: $primary_color;
    }
    &.active {
      color: $primary_color;
      border-color: $primary_color;
    }
  }

  
}
</style>