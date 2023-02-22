<template>
  <div class="m-button" @click="handleClick" :class="{
    'm-primary-button':type === 'primary',
    'm-danger-button':type === 'danger',
    'm-warning-button':type === 'warning',
    'm-text-button':type === 'text',
    'line-btn':line,
    'm-disabled':loading || disabled,
    'm-circle-button': circle,
    'm-mini-button': size==='mini',
    'm-mini-circle-button': size==='mini' && circle
  }">
    <span class="m-loading-btn" v-if="loading">
      <i class="micon icon-Loading" />
    </span>
    <span class="text" v-if="!(loading && circle)"><slot /></span>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
export default {
  name:'MButton',
  props:{
    type:{
      type:String,
      default:'' // primary danger warning 
    },
    size:{
      type:String,
      default:'small'
    },
    loading:{
      type:Boolean,
      default:false
    },
    disabled:{
      type:Boolean,
      default:false
    },
    circle:{
      type:Boolean,
      default:false
    },
    line:{
      type:Boolean,
      default:false
    }
  },
  emits:['click'],
  setup(props,ctx){
    const handleClick = () =>{
      if(props.loading || props.disabled){
        return
      }
      ctx.emit('click')
    }
    return {
      handleClick
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/ui/button.scss';
</style>