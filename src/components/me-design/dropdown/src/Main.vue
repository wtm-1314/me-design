<template>
  <div
    :class="{
      'm-dropdown':true,
      'trigger-hover': trigger === 'hover',
    }"
  >
    <template v-if="trigger === 'click'">
      <div
        class="dropdown-trigger"
        :style="{
          top:h + 'px'
        }"
        ref="nodeRef"
        tabindex="0"
        @focus="handleClick"
        @blur="onClickContent"
      >
        <slot />
      </div>
      <div class="dropdown-wrap" v-show="show" @mouseup.prevent="onClickContent">
        <slot name="content" />
      </div>
    </template>

    <template v-else>
      <div class="dropdown-trigger" ref="nodeRef" :style="{
          top:h + 'px'
        }">
        <slot />
      </div>
      <div class="dropdown-wrap dropdown-wrap-hover">
        <slot name="content" />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref,onMounted } from "vue";
import UseDom from "@/utils/useDom";
export default defineComponent({
  name: "MDropdown",
  props: {
    trigger: {
      type: String,
      default: "hover",
    },
  },
  setup(props, ctx) {
    const show = ref(false);
    const nodeRef = ref();
    const h = ref(36)
    const handleClick = () => {
      show.value = true;
    };
    const onClickContent = () => {
      setTimeout(() => {
        show.value = false
      }, 200);
    };

    onMounted(()=>{
      const { getNodeClientRect } = UseDom()
      const nodeData= getNodeClientRect(nodeRef.value)
      h.value = nodeData?.height ? nodeData?.height : 36
    })

    return {
      show,
      nodeRef,
      handleClick,
      onClickContent,
      h
    };
  },
});
</script>

<style lang="scss" scoped>
.m-dropdown {
  display: inline-block;
  height: fit-content;
  width: fit-content;
  position: relative;
  .dropdown-trigger {
    width: fit-content;
    height: fit-content;
    padding: 0;
    margin: 0;
  }
  &.trigger-hover:hover {
    .dropdown-wrap-hover {
      display: block;
    }
  }
  .dropdown-wrap {
    position: absolute;
    z-index: 1000;
    padding: 12px 0;
    left: 0;
    min-width: fit-content;
    box-shadow: 0 5px 12px -1px rgba(0, 0, 0, 0.35);
    border-radius: 4px;
    max-height: 200px;
    overflow-y: auto;
    background: #fff;
    animation: pulldown 0.1s ease-out;
    &.dropdown-wrap-hover {
      display: none;
    }
  }
}
</style>
