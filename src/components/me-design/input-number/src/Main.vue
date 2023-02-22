<template>
  <div
    class="m-input-wrap"
  >
    <label
      class="m-input"
      :class="{
        'm-input-mini': size === 'mini',
        'm-input-focus': isFocus,
        'disabled':disabled
      }"
      :style="{
        width: parseInt(width) + 'px',
      }"
      tabindex="0"
      @blur="isFocus = false"
    >
      <span class="m-input-prefix m-input-fix" v-if="prefix" @mousedown="clickFocus">
        <slot name="prefix"></slot>
      </span>
      <input
        ref="myInputRef"
        type="number"
        name="m-input"
        :placeholder="placeholder"
        :disabled="disabled"
        :value="bindVal"
        :max="max"
        :min="min"
        :step="step"
        @input="({ target }) => onInput(target.value)"
        @blur="onBlur"
        @change="onChange"
      />
      <span class="m-input-suffix m-input-fix" v-if="suffix" @mousedown="clickFocus">
        <slot name="suffix"></slot>
      </span>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "MInputNumber",
  props: {
    size: {
      type: String,
      default: "small",
    },
    value: {
      type: Number,
      default: "",
    },
    max: {
      type: Number,
      default: undefined,
    },
    min: {
      type: Number,
      default: undefined,
    },
    step: {
      type: Number,
      default: 1,
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
      type: [String, Number],
      default: 180,
    },
    placeholder: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    const bindVal = ref(props.value);
    const isFocus = ref(false);
    const myInputRef = ref();
    const onInput = (value: number) => {
      bindVal.value = +value;
      if (props.max && bindVal.value >= props.max) {
        bindVal.value = +props.max;
      }

      if (props.min && bindVal.value < props.min) {
        bindVal.value = +props.min;
      }

      ctx.emit("update:value", bindVal.value);
    };

    const onBlur = () => {
      ctx.emit("blur", bindVal.value);
    };

    const onChange = () => {
      ctx.emit("change", bindVal.value);
    };

    const focus = () => {
      myInputRef.value.focus();
    };
    const clickFocus = () =>{
      if(props.disabled){
        isFocus.value = false
        return
      }
      isFocus.value = true
    }

    watch(
      () => props.value,
      (val) => {
        onInput(val);
      }
    );

    ctx.expose({
      focus,
    });

    return {
      isFocus,
      bindVal,
      onInput,
      onBlur,
      onChange,
      myInputRef,
      clickFocus
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/ui/input.scss";
</style>
