<template>
  <!-- 竖向菜单 -->
  <div class="m-menu-vertical">
    <template v-for="item in data">
      <div
        v-if="item && !item.children"
        :key="item.key"
        class="m-menu-item"
        @click="onItemChange(item)"
        :class="{
          'm-menu-active': activeVal === item.key,
        }"
      >
        <div>{{ item.title }}</div>
      </div>
      <div
        :key="item.name"
        v-else-if="item.children && item.children.length"
        class="m-sub-menu"
      >
        <div class="m-sub-title m-menu-item" @click="onOpenChange(item)">
          <m-icon
            name="caret-down"
            class="micon"
            v-if="openKeys.includes(item.key)"
            :fontSize="14"
          />
          <m-icon v-else name="caret-right" class="micon"  :fontSize="14" />
          {{ item.title }}
        </div>
        <template v-if="openKeys.includes(item.key)">
          <div v-for="c in item.children" :key="c.key">
            <div
              @click="onItemChange(c)"
              class="m-sub-menu-item m-menu-item"
              :class="{
                'm-menu-active': activeVal === c.key,
              }"
            >
              {{ c.title }}
            </div>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { ref, watch, PropType } from "vue";
import { menuItem } from "./type";
import MIcon from "../../icon";
export default {
  name: "MMenu",
  components: {
    MIcon,
  },
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
    const onItemChange = (obj: menuItem) => {
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
.micon {
  color: $gray_color;
}
.m-menu-active {
  background: $active_btn_color;
  &:hover {
    background: $active_btn_color !important;
  }
  color: $primary_color;
}
.m-menu-vertical {
  height: 100%;
  .m-menu-item {
    height: 36px;
    line-height: 34px;
    border-radius: 4px;
    margin-bottom: 4px;
    cursor: pointer;
    padding: 0 12px;
    transition: all 0.3s ease;
    &:hover {
      background: $menu_hover_color;
    }
  }
  .m-sub-menu {
    .m-sub-title {
      height: 36px;
      line-height: 34px;
      padding: 0 12px;
      border-radius: 4px;
    }
    .m-sub-menu-item {
      height: 36px;
      line-height: 34px;
      padding: 0 12px 0 32px;
      border-radius: 4px;
      cursor: pointer;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>