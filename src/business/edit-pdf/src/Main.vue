<template>
  <div class="m-edit-pdf">
    <header class="util">
      util-工具
    </header>

    <div class="main_wrap">
      <div class="left_main">
        <div>
          工具集合
        </div>
      </div>

      <div class="center_main">
         <div class="inner_view_card">
          
         </div>
      </div>

      <div class="right_mian">
        
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name:'MEditPdf',
  setup () {
    

    return {}
  }
})
</script>

<style scoped lang="scss">
.m-edit-pdf{
  width: 100vw;
  height: 100vh;
  background: rgb(246, 247, 247);
  display: flex;
  flex-direction: column;
  .util{
    background: rgb(255, 255, 255);
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow:  0 2px 5px rgb(238, 236, 236);
    z-index: 1;
  }
  .main_wrap{
    width: 100%;
    flex: 1;
    display: flex;
    .left_main,.right_mian{
      flex: 0 0 280px;
      background: #fff;
    }
    .center_main{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      .inner_view_card{
        width: 300px;
        height: 200px;
        background: #fff;
      }
    }
  }
}
</style>