<template>
  <div class="m-input-wrap">
    <label
      class="m-input"
      :class="{
        'm-input-mini': size === 'mini',
      }"
      :style="{
        width: parseInt(width) + 'px',
      }"
    >
      <span class="m-input-prefix m-input-fix" v-if="prefix">
        <slot name="prefix"></slot>
      </span>
      <input
        ref="myInputRef"
        type="text"
        name="m-input"
        :placeholder="placeholder"
        :value="bindVal"
        @input="({target})=>onInput(target.value)"
        @blur="onBlur"
      />
      <span class="m-input-suffix m-input-fix" v-if="suffix">
        <slot name="suffix"></slot>
      </span>
    </label>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  name:'MInputSearch',
  props:{
    value:{
      type:String,
      default:''
    },
    size: {
      type: String,
      default: "small",
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
    placeholder:{
      type:String,
      default:''
    }
  },
  setup(props,ctx){
    const bindVal = ref(props.value)
    const myInputRef = ref()
    const onInput = (value:number) => {
      ctx.emit("update:value", bindVal.value);
    };

    const onBlur = () => {
      ctx.emit("blur", bindVal.value);
    };
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/ui/input.scss';
</style>