<template>
  <div class="m-input-wrap">
    <div
      class="m-input"
      :class="{
        'm-input-mini': size === 'mini',
        'm-input-focus': isFocus,
        disabled: disabled,
      }"
      :style="{
        width: width,
      }"
    >
      <span class="m-input-prefix m-input-fix" v-if="prefix">
        <slot name="prefix" />
      </span>
      <div class="input-view">
        <input
          ref="myInputRef"
          :style="{
            paddingRight: allowClear ? '42px' : '12px',
          }"
          :type="bindType"
          name="m-input"
          :placeholder="placeholder"
          :readonly="disabled"
          v-model="bindVal"
          :maxlength="maxLength"
          :minlength="minlength"
          @input="onInput"
          @blur="onBlur"
          @change="onChange"
          @focus="isFocus = true"
        />
        <span class="clear-btn" v-if="bindVal && allowClear">
          <m-icon
            name="close-circle"
            @click="onClearValue"
            class="btn-close"
          />
        </span>
      </div>
      <span class="m-input-suffix m-input-fix" v-if="suffix">
        <slot name="suffix" />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import MIcon from "../../icon";

export default defineComponent({
  name: "MInput",
  components: { MIcon },
  props: {
    type: {
      type: String,
      default: "text",
    },
    size: {
      type: String,
      default: "small",
    },
    value: {
      type: [String, Number],
      default: "",
    },
    maxLength: {
      type: Number,
      default: undefined,
    },
    minlength: {
      type: Number,
      default: undefined,
    },
    prefix: {
      type: Boolean,
      default: false,
    },
    suffix: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: undefined,
    },
    placeholder: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    allowClear: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    const bindVal = ref(props.value);
    const bindType = ref(
      ["text", "number", "password"].includes(props.type) ? props.type : "text"
    );
    const myInputRef = ref();
    const isFocus = ref(false);
    const onInput = () => {
      ctx.emit("update:value", bindVal.value);
    };

    const onBlur = () => {
      isFocus.value = false;
      ctx.emit("blur", bindVal.value);
    };

    const onChange = () => {
      ctx.emit("change", bindVal.value);
    };

    const focus = () => {
      myInputRef.value.focus();
    };

    const clickFocus = () => {
      if (props.disabled) {
        isFocus.value = false;
        return;
      }
      isFocus.value = true;
    };

    const onClearValue = () => {
      bindVal.value = "";
      onInput();
    };

    watch(
      () => props.value,
      (val) => {
        bindVal.value = val;
      }
    );

    ctx.expose({
      focus,
    });

    return {
      bindVal,
      onInput,
      onBlur,
      onChange,
      bindType,
      myInputRef,
      isFocus,
      clickFocus,
      onClearValue,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/ui/input.scss";
</style>
