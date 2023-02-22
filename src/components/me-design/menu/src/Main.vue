<template>
  <div>
    <MenuVertical
      v-if="mode === 'vertical'"
      :data="data"
      :openMenus="openMenus"
      :active="active"
      @change="onItemChange"
    />
    <!-- 横向菜单 -->
    <Menu
      v-else
      :data="data"
      :openMenus="openMenus"
      :active="active"
      @change="onItemChange"
    />
  </div>
</template>

<script lang="ts">
import { ref,watch, PropType } from "vue";
import { menuItem } from './type'
import MenuVertical from "./MenuVertical.vue";
import Menu from "./Menu.vue";
export default {
  name: "MMenu",
  components: {
    MenuVertical,
    Menu,
  },
  props: {
    mode: {
      type: String,
      default: "vertical", // horizontal
    },
    data: {
      type: Array as PropType <menuItem[]>,
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
    const onOpenChange = (obj:menuItem) => {
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
    const onItemChange = (obj:menuItem) => {
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
}
// .m-menu-vertical {
//   height: 100%;
//   .m-menu-item {
//     height: 36px;
//     line-height: 34px;
//     border-radius: 4px;
//     margin-bottom: 4px;
//     cursor: pointer;
//     padding: 0 12px;
//     transition: all 0.3s ease;
//     &:hover {
//       background: rgb(237, 235, 235);
//     }
//   }
//   .m-sub-menu {
//     .m-sub-title {
//       height: 36px;
//       line-height: 34px;
//       padding: 0 12px;
//       border-radius: 4px;
//     }
//     .m-sub-menu-item {
//       height: 36px;
//       line-height: 34px;
//       padding: 0 12px 0 32px;
//       border-radius: 4px;
//       cursor: pointer;
//     }
//   }
// }
// .m-menu-horizontal {
//   height: 60px;
//   width: 100%;
//   overflow: auto;
//   display: flex;
//   .m-menu-item {
//     height: 36px;
//     line-height: 34px;
//     border-radius: 4px;
//     margin-bottom: 4px;
//     cursor: pointer;
//     padding: 0 12px;
//     transition: all 0.3s ease;
//     &:hover {
//       background: rgb(237, 235, 235);
//     }
//   }
//   .m-sub-menu {
//     .m-sub-title {
//       height: 36px;
//       line-height: 34px;
//       padding: 0 12px;
//       border-radius: 4px;
//     }
//     .m-sub-menu-item {
//       height: 36px;
//       line-height: 34px;
//       padding: 0 12px 0 32px;
//       border-radius: 4px;
//       cursor: pointer;
//     }
//   }
// }
</style>