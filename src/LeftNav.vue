<template>
  <div class="left_nav">
    <MMenu
      mode="vertical"
      :data="data"
      :open-menus="activeGroup"
      :active="active"
      @change="change"
    />
  </div>
</template>

<script>
import { useRouter,useRoute } from "vue-router";
import { uiComponents,businessComponents,utilsComponent } from "@/router/page";
import { watch,ref } from 'vue'
export default {
  setup() {
    const data = [
      {
        path: "/",
        key: "0",
        title: "Ui组件",
        children: uiComponents(),
      },
      {
        path: "",
        key: "1",
        title: "业务组件",
        children: businessComponents(),
      },
      {
        path: "/utils",
        key: "2",
        title: "工具类",
        children: utilsComponent(),
      },
    ];
    const activeGroup = ref([])
    const router = useRouter();
    const route = useRoute()
    const active = ref(route.name)
    const change = (obj) => {
      router.push(obj.path);
      
    };
   const init = () =>{
    data.forEach(o=>{
        const item = o.children.find(v=>v.key === active.value)
        if(item && !activeGroup.value.includes(o.key)){
          activeGroup.value.push(o.key)
        }
      })
   }
   init()

    watch(()=>route.name,(val)=>{
      active.value = val
      init()
    })
    return {
      data,
      change,
      route,
      active,
      activeGroup
    };
  },
};
</script>

<style lang="scss" scoped>

</style>