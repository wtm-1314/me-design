<template>
  <div class="test_page">
    <div>
      <h2>弹窗对话</h2>
      <div class="page_inner">
        <div class="flex">
          <MButton type="" @click="() => (state.show = true)"
            >默认弹窗</MButton
          >
          <MExpand :code="codeStr" title="默认配置，一般情况下默认就好" />
          <m-dialog
            :show="state.show"
            title="默认标题"
            okText="确认"
            cancelText="取消"
            @cancel="state.show = false"
            @ok="onOk"
          >
            <span>在这里定义你的页面布局</span>
          </m-dialog>
        </div>
      <m-divider type="vertical" />
        <div class="flex">
          <MButton type="danger" @click="() => (state.show2 = true)"
            >自定义按钮</MButton
          >
          <MExpand :code="codeStr2" title="定义按钮样式" />
          <m-dialog
            :show="state.show2"
            title="删除操作"
            okText="确认删除"
            okBtnType="danger"
            cancelText="取消"
            @cancel="state.show2 = false"
            @ok="() => (state.show2 = false)"
          >
            <span>在这里定义你的页面布局</span>
          </m-dialog>
        </div>
        <m-divider type="vertical" />
        <div class="flex">
          <MButton type="primary" @click="() => (state.show3 = true)"
            >Click Me</MButton
          >
          <MExpand :code="codeStr3" title="定义头部样式" />

          <m-dialog
            :show="state.show3"
            title="温馨提示"
            headerBackgroundColor="#faccdd"
            okText="好的"
            okBtnType="warning"
            cancelText="关闭"
            @cancel="state.show3 = false"
            @ok="() => (state.show3 = false)"
          >
            <span>Hello World! me-design</span>
          </m-dialog>
        </div>
        <m-divider type="vertical" />
        <div class="flex">
          <MButton type="primary" @click="() => (state.show4 = true)"
            >Click Center</MButton
          >
          <MExpand :code="codeStr4" title="定义位置" />
          <m-dialog
            :show="state.show4"
            title="Hello World"
            okText="Confirm"
            okBtnType="primary"
            cancelText="Close"
            position="center"
            width="480px"
            @cancel="state.show4 = false"
            @ok="() => (state.show4 = false)"
          >
            <span>Hello World! me-design</span>
          </m-dialog>
        </div>
        <m-divider type="vertical" />
        <div class="pager_table">
          <p>Api</p>

          <m-table :columns="tbColumns" :data="json">
            <template #paramHeader="{ row }">
              {{ row.title }}
            </template>
          </m-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const state = reactive({
  show: false,
  show2: false,
  show3: false,
  show4: false,
  position: "top",
  btnType: "primary",
});
const handleClick = (value: string, btnType: string) => {
  state.position = value;
  state.show = true;
  state.btnType = btnType;
};
const onCancel = () => {
  state.show = false;
};
const onOk = () => {
  state.show = false;
};

const tbColumns = [
  {
    key: "param",
    title: "参数",
    custom: {
      header: "paramHeader",
      body: "paramBody",
    },
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
const json = [
  {
    param: "show",
    desc: "是否显示弹窗",
    default: "false",
    type: "boolean",
    version: "1.1.11",
  },
  {
    param: "title",
    desc: "弹窗标题",
    default: "",
    type: "string",
    version: "1.1.11",
  },
  {
    param: "width",
    desc: "弹窗宽度",
    default: "360",
    type: "string",
    version: "1.1.11",
  },
  {
    param: "headerBackgroundColor",
    desc: "头部背景颜色",
    default: "#fff",
    type: "string",
    version: "1.1.11",
  },
  {
    param: "headerTextColor",
    desc: "头部字体颜色",
    default: "#262626",
    type: "string",
    version: "1.1.11",
  },
  {
    param: "okText",
    desc: "确认按钮文案",
    default: "Confirm",
    type: "string",
    version: "1.1.11",
  },
  {
    param: "okBtnType",
    desc: "确认按钮样式",
    default: "primary",
    type: "string",
    version: "1.1.11",
  },
  {
    param: "cancelText",
    desc: "取消按鈕文本",
    default: "Cancel",
    type: "string",
    version: "1.1.11",
  },
  {
    param: "cancelBtnType",
    desc: "取消按钮样式",
    default: "",
    type: "string",
    version: "1.1.11",
  },
  {
    param: "position",
    desc: "弹窗位置 top | center",
    default: "top",
    type: "string",
    version: "1.1.11",
  },
];

const codeStr = `
      Typescript or javascript

      import { reactive } from "vue";

      const state = reactive({
        show: false,
      });

      // template

      <m-dialog
        :show="state.show"
        title="默认标题"
        okText="确认"
        cancelText="取消"
        @cancel="state.show = false"
        @ok="onOk"
      >
        <span>在这里定义你的页面布局</span>
      </m-dialog>
`;
const codeStr2 = `
      Typescript or javascript

      import { reactive } from "vue";

      const state = reactive({
        show2: false,
      });

      // template

      <m-dialog
        :show="state.show2"
        title="删除操作"
        okText="确认删除"
        okBtnType="danger"
        cancelText="取消"
        @cancel="state.show2 = false"
        @ok="()=>state.show2 = false"
      >
        <span>在这里定义你的页面布局</span>
      </m-dialog>
`;

const codeStr3 = `
      Typescript or javascript

      import { reactive } from "vue";

      const state = reactive({
        show2: false,
      });

      // template

      <m-dialog
        :show="state.show3"
        title="温馨提示"
        headerBackgroundColor="#faad14"
        headerTextColor="#fff"
        okText="好的"
        okBtnType="warning"
        cancelText="关闭"
        @cancel="state.show3 = false"
        @ok="()=>state.show3 = false"
      >
        <span>Hello World! me-design</span>
      </m-dialog>
`;
const codeStr4 = `
      Typescript or javascript

      import { reactive } from "vue";
      import { MDialog } from 'ming-ui'

      const state = reactive({
        show2: false,
      });

      // template

      <m-dialog
        :show="state.show4"
        title="Hello World"
        headerBackgroundColor="#1a6cc4"
        headerTextColor="#fff"
        okText="Confirm"
        okBtnType="primary"
        cancelText="Close"
        position="center"
        @cancel="state.show4 = false"
        @ok="()=>state.show4 = false"
      >
        <span>Hello World! me-design</span>
      </m-dialog>
`;
</script>

<style lang="scss" scoped>
.page_inner {
  width: 100%;
}
.pager_table {
  width: 100%;
}
</style>
