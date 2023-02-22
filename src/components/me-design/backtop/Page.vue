<template>
  <div class="test_page">
    <h2>回到顶部</h2>
    <p>何时使用？当页面滚动条比较长，需要长时间滚动是需要回到顶部组件</p>

    <div class="back_top_id">
      <div>backtop demo test</div>
    </div>
    <m-backtop target=".back_top_id" :scrollNum="100" class="back-top-demo" />
    <MExpand :code="codeStr" title="提示Message使用案例" />

    <h2>Api</h2>
    <m-table :columns="tbColumns" :data="Data" />
  </div>
</template>

<script setup lang="ts">
const codeStr = `
    <div class="back_top_id">
      <div>backtop demo test</div>
    </div>
    <m-backtop target=".back_top_id" :scrollNum="100" class="back-top-demo" />

    // script
    import { MBacktop } from 'ming-ui'
    components:{
      MBacktop
    }
`;

const tbColumns = [
  {
    key: "param",
    title: "参数",
  },
  {
    key: "desc",
    title: "说明",
  },
  {
    key: "type",
    title: "类型",
  },
  {
    key: "default",
    title: "默认值",
  },
  {
    key: "version",
    title: "版本",
  },
];
const Data = [
  {
    param: "target",
    desc: "节点 id | class",
    default: "document.body",
    type: "string",
    version: "1.1.11",
  },
  {
    param: "scrollNum",
    desc: "滚动多少显示回到顶部",
    default: "200",
    type: "number",
    version: "1.1.11",
  },
  {
    param: "bottom",
    desc: "距离底部距离",
    default: "30",
    type: "number",
    version: "1.1.11",
  },
  {
    param: "right",
    desc: "距离右侧距离",
    default: "30",
    type: "number",
    version: "1.1.11",
  },
];
</script>

<style lang="scss" scoped>
.back_top_id {
  height: 200px;
  width: 100%;
  overflow: auto;
  border-radius: 4px;
  position: relative;

  div {
    height: 2000px;
    background: rgb(184, 222, 180);
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
  }
}
</style>