<template>
 <transition name="fade">
  <div
    class="m-dialog-mask init-mask"
    v-show="data.show"
    :class="{
      'center_mask': position === 'center'
    }"
  >
    <div
      class="m-dialog"
      ref="dialog"
      :class="{
        'hide-dialog': !data.show,
      }"
      :style="{
        width: width,
        marginTop: position !== 'center' ? '5vh' : '0',
      }"
    >
      <slot name="header">
        <div
          class="m-dialog-header"
          :style="{
            backgroundColor: headerBackgroundColor,
            color: headerTextColor,
          }"
        >
          <span class="title">{{ title }}</span>
          <MIcon name="close" class="close" @click="onCancel" />
        </div>
      </slot>

      <div class="m-dialog-body"><slot /></div>

      <slot name="footer">
        <div class="m-dialog-footer">
          <MButton
            size="small"
            @click="onCancel"
            :type="cancelBtnType"
            v-if="cancelText"
            >{{ cancelText }}</MButton
          >
          <MButton size="small" @click="onOk" :type="okBtnType" v-if="okText">{{
            okText
          }}</MButton>
        </div>
      </slot>
    </div>
  </div>
  </transition>
  
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  watch,
} from "vue";
import MIcon from "../../icon";
import MButton from "../../button";
export default defineComponent({
  name: "MDialog",
  components: {
    MIcon,
    MButton,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "360px",
    },
    headerBackgroundColor: {
      type: String,
      default: "#fff",
    },
    headerTextColor: {
      type: String,
      default: "#262626",
    },
    okText: {
      type: String,
      default: "Confirm",
    },
    okBtnType: {
      type: String,
      default: "primary",
    },
    cancelText: {
      type: String,
      default: "Cancel",
    },
    cancelBtnType: {
      type: String,
      default: "",
    },
    position: {
      type: String,
      default: "top",
    },
  },
  setup(props, ctx) {
    const data = reactive({
      show: props.show,
    });
    const dialog = ref("");

    const onCancel = () => {
      ctx.emit("cancel");
      data.show = false;
    };
    const onOk = () => {
      data.show = false;
      ctx.emit("ok");
    };
    watch(
      () => props.show,
      (val) => {
        data.show = val;
      }
    );

    return {
      data,
      onCancel,
      onOk,
      dialog,
    };
  },
});
</script>

<style lang="scss" scoped>
.m-dialog-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3000;
  background: rgba(0, 0, 0, 0.35);
  overflow: auto;
  &.center_mask{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .m-dialog {
    background: #fff;
    border-radius: 4px;
    min-width: 100px;
    margin: 0 auto;
    animation: contentshow 0.3s cubic-bezier(0.75, 0.77, 0.39, 0.92);
    &.hide-dialog {
      animation: contenhide 0.3s cubic-bezier(0.75, 0.77, 0.39, 0.92);
    }

    .m-dialog-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 15px;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      border-bottom: 1px solid $border_line_color;
      .title {
        font-size: 16px;
        font-weight: bold;
      }
      .close {
        font-size: 14px;
        cursor: pointer;
      }
    }
    .m-dialog-body {
      padding: 24px 36px;
    }
    .m-dialog-footer {
      padding: 12px 15px 16px;
      text-align: right;
    }
  }
}

.init-mask {
  animation: maskshow 0.3s ease-out;
}
.hidden-mask {
  animation: hidenode 0.3s ease-out;
}
</style>
