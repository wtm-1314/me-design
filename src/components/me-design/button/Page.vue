<template>
  <div class="test_page">
    <div>
      <div>
        <h2>按钮组件</h2>
        <p>
          标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
        </p>
      </div>

      <h4>标准尺寸</h4>
      <div class="mb_16">
        <m-button>Default</m-button>
        <m-button type="primary">Primary</m-button>
        <m-button type="danger">danger</m-button>
        <m-button type="warning">warning</m-button>

        <m-button type="primary" line>Primary</m-button>
        <m-button type="danger" line>danger</m-button>
        <m-button type="warning" line>warning</m-button>
        <MExpand
          :code="codeStr"
          title="四种颜色分别代表不同含义，便于用户操作的提示作用"
        />
      </div>

      <h4>文本按钮</h4>
      <div>
        <m-button type="text">编辑</m-button>
        <m-button type="text" disabled>禁止编辑</m-button>
        <MExpand
          :code="codeStr1"
          title="文字按钮，a标签和列表按钮可以使用这种按钮"
        />
      </div>

      <h4>圆形按钮</h4>
      <div class="mb_16">
        <MButton circle type="primary">
          <m-icon name="search"></m-icon>
        </MButton>
        <MButton circle type="danger">
          <m-icon name="search" :fontSize="14" />
        </MButton>
        <MButton circle><m-icon name="search" :fontSize="14" /></MButton>
        <MButton circle type="warning"
          ><m-icon name="search" :fontSize="14"
        /></MButton>

        <MButton circle type="primary" line>
          <m-icon name="search"></m-icon>
        </MButton>
        <MButton line circle type="danger">
          <m-icon name="search" :fontSize="14" />
        </MButton>
        <MButton line circle><m-icon name="search" :fontSize="14" /></MButton>
        <MButton circle line type="warning"
          ><m-icon name="search" :fontSize="14"
        /></MButton>

        <MButton circle line type="text"
          ><m-icon name="search" :fontSize="14"
        /></MButton>

        <MExpand :code="codeStr2" title="圆形按钮，使用方式案例" />
      </div>
      <h4>小型尺寸</h4>
      <div>
        <div class="mb_16">
          <m-button size="mini">Default</m-button>
          <m-button size="mini" type="primary">Primary</m-button>
          <m-button size="mini" type="danger">danger</m-button>
          <m-button size="mini" type="warning">warning</m-button>

          <m-button size="mini" line type="primary">Primary</m-button>
          <m-button size="mini" line type="danger">danger</m-button>
          <m-button size="mini" line type="warning">warning</m-button>

          <MExpand :code="codeStr3" title="小型尺寸案例" />
        </div>
        <h4>禁用按钮</h4>
        <div class="mb_16">
          <MButton type="primary" disabled>disabled</MButton>
          <MExpand :code="codeStr4" title="禁用按钮案例" />
        </div>

        <h4>加载按钮</h4>
        <div>
          <MButton type="primary" loading>Loading</MButton>
          <MButton circle disabled loading type="danger"
            ><m-icon name="close" :fontSize="12"
          /></MButton>

          <MExpand :code="codeStr5" title="加载数据和提交数据是使用" />
        </div>
      </div>

      <h2>Api</h2>
      <m-table :columns="tbColumns" :data="Data" />
    </div>
  </div>
</template>

<script setup lang="ts">
const codeStr = `
        <m-button>Default</m-button>
        <m-button type="primary">Primary</m-button>
        <m-button type="danger">danger</m-button>
        <m-button type="warning">warning</m-button>

        <m-button type="primary" line>Primary</m-button>
        <m-button type="danger" line>danger</m-button>
        <m-button type="warning" line>warning</m-button>
`;
const codeStr1 = `
    <m-button type="text">编辑</m-button>
    <m-button type="text" disabled>禁止编辑</m-button>
`;

const codeStr2 = `
        <MButton circle type="primary">
          <m-icon name="search"></m-icon>
        </MButton>
        <MButton circle type="danger">
          <m-icon name="check" :fontSize="14" />
        </MButton>
        <MButton circle><m-icon name="check" :fontSize="14" /></MButton>
        <MButton circle type="warning"
          ><m-icon name="check" :fontSize="14"
        /></MButton>

        <MButton circle type="primary" line>
          <m-icon name="search"></m-icon>
        </MButton>
        <MButton line circle type="danger">
          <m-icon name="check" :fontSize="14" />
        </MButton>
        <MButton line circle><m-icon name="check" :fontSize="14" /></MButton>
        <MButton circle line type="warning"
          ><m-icon name="check" :fontSize="14"
        /></MButton>
`;
const codeStr3 = `
          <m-button size="mini">Default</m-button>
          <m-button size="mini" type="primary">Primary</m-button>
          <m-button size="mini" type="danger">danger</m-button>
          <m-button size="mini" type="warning">warning</m-button>

          <m-button size="mini" line type="primary">Primary</m-button>
          <m-button size="mini" line type="danger">danger</m-button>
          <m-button size="mini" line type="warning">warning</m-button>
`;

const codeStr4 = `
<MButton type="primary" disabled>disabled</MButton>
`;

const codeStr5 = `
          <MButton type="primary" loading>Loading</MButton>
          <MButton circle disabled loading type="danger"
            ><m-icon name="close" :fontSize="12"
          /></MButton>    
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
    param: "type",
    desc: "按钮类型 primary | danger | warning | text",
    default: "",
    type: "string",
    version: "1.1.11",
  },
  {
    param: "size",
    desc: "按钮大小 small | mini",
    default: "small",
    type: "string",
    version: "1.1.11",
  },
  {
    param: "loading",
    desc: "是否加载",
    default: "false",
    type: "boolean",
    version: "1.1.11",
  },
  {
    param: "disabled",
    desc: "是否禁用",
    default: "false",
    type: "boolean",
    version: "1.1.11",
  },
  {
    param: "circle",
    desc: "圆形按钮",
    default: "false",
    type: "boolean",
    version: "1.1.11",
  },
  {
    param: "line",
    desc: "边框线按钮",
    default: "false",
    type: "boolean",
    version: "1.1.11",
  },
];
</script>

<style lang="scss" scoped>
</style>
