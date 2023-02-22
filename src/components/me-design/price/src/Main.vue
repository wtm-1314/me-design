<template>
  <div class="m-price">
    <slot name="prefix">
      <span class="prefix" v-if="symbol">
        {{ symbol }}
      </span>
    </slot>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name:'MPrice',
    props:{
      symbol:{
        type:String,
        default:''
      }
    }
})
</script>

<style lang="scss" scoped>
.m-price{
  display: inline-block;

  .prefix{
    margin-right: 8px;
    color: rgb(170, 170, 170);
  }
}
</style>