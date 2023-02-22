import{d as T,D as x,i as C,c as B,b as s,e as t,y as a,C as r,t as b,g as i,p as H,j as S}from"./eb002226.js";import{_ as j}from"./2b56ead0.js";const n=d=>(H("data-v-478e4ae8"),d=d(),S(),d),M={class:"test_page"},W=n(()=>s("h2",null,"弹窗对话",-1)),O={class:"page_inner"},I={class:"flex"},$=n(()=>s("span",null,"在这里定义你的页面布局",-1)),D={class:"flex"},E=n(()=>s("span",null,"在这里定义你的页面布局",-1)),N={class:"flex"},P=n(()=>s("span",null,"Hello World! me-design",-1)),V={class:"flex"},A=n(()=>s("span",null,"Hello World! me-design",-1)),q={class:"pager_table"},z=n(()=>s("p",null,"Api",-1)),F=T({__name:"Page",setup(d){const o=x({show:!1,show2:!1,show3:!1,show4:!1,position:"top",btnType:"primary"}),h=()=>{o.show=!1},w=[{key:"param",title:"参数",custom:{header:"paramHeader",body:"paramBody"}},{key:"desc",title:"说明"},{key:"type",title:"类型"},{key:"default",title:"默认值"},{key:"version",title:"版本"}],_=[{param:"show",desc:"是否显示弹窗",default:"false",type:"boolean",version:"1.1.11"},{param:"title",desc:"弹窗标题",default:"",type:"string",version:"1.1.11"},{param:"width",desc:"弹窗宽度",default:"360",type:"string",version:"1.1.11"},{param:"headerBackgroundColor",desc:"头部背景颜色",default:"#fff",type:"string",version:"1.1.11"},{param:"headerTextColor",desc:"头部字体颜色",default:"#262626",type:"string",version:"1.1.11"},{param:"okText",desc:"确认按钮文案",default:"Confirm",type:"string",version:"1.1.11"},{param:"okBtnType",desc:"确认按钮样式",default:"primary",type:"string",version:"1.1.11"},{param:"cancelText",desc:"取消按鈕文本",default:"Cancel",type:"string",version:"1.1.11"},{param:"cancelBtnType",desc:"取消按钮样式",default:"",type:"string",version:"1.1.11"},{param:"position",desc:"弹窗位置 top | center",default:"top",type:"string",version:"1.1.11"}],u=`
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
`,v=`
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
`,y=`
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
`,g=`
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
`;return(G,e)=>{const p=i("MButton"),c=i("MExpand"),m=i("m-dialog"),f=i("m-divider"),k=i("m-table");return C(),B("div",M,[s("div",null,[W,s("div",O,[s("div",I,[t(p,{type:"",onClick:e[0]||(e[0]=()=>o.show=!0)},{default:a(()=>[r("默认弹窗")]),_:1}),t(c,{code:u,title:"默认配置，一般情况下默认就好"}),t(m,{show:o.show,title:"默认标题",okText:"确认",cancelText:"取消",onCancel:e[1]||(e[1]=l=>o.show=!1),onOk:h},{default:a(()=>[$]),_:1},8,["show"])]),t(f,{type:"vertical"}),s("div",D,[t(p,{type:"danger",onClick:e[2]||(e[2]=()=>o.show2=!0)},{default:a(()=>[r("自定义按钮")]),_:1}),t(c,{code:v,title:"定义按钮样式"}),t(m,{show:o.show2,title:"删除操作",okText:"确认删除",okBtnType:"danger",cancelText:"取消",onCancel:e[3]||(e[3]=l=>o.show2=!1),onOk:e[4]||(e[4]=()=>o.show2=!1)},{default:a(()=>[E]),_:1},8,["show"])]),t(f,{type:"vertical"}),s("div",N,[t(p,{type:"primary",onClick:e[5]||(e[5]=()=>o.show3=!0)},{default:a(()=>[r("Click Me")]),_:1}),t(c,{code:y,title:"定义头部样式"}),t(m,{show:o.show3,title:"温馨提示",headerBackgroundColor:"#faccdd",okText:"好的",okBtnType:"warning",cancelText:"关闭",onCancel:e[6]||(e[6]=l=>o.show3=!1),onOk:e[7]||(e[7]=()=>o.show3=!1)},{default:a(()=>[P]),_:1},8,["show"])]),t(f,{type:"vertical"}),s("div",V,[t(p,{type:"primary",onClick:e[8]||(e[8]=()=>o.show4=!0)},{default:a(()=>[r("Click Center")]),_:1}),t(c,{code:g,title:"定义位置"}),t(m,{show:o.show4,title:"Hello World",okText:"Confirm",okBtnType:"primary",cancelText:"Close",position:"center",width:"480px",onCancel:e[9]||(e[9]=l=>o.show4=!1),onOk:e[10]||(e[10]=()=>o.show4=!1)},{default:a(()=>[A]),_:1},8,["show"])]),t(f,{type:"vertical"}),s("div",q,[z,t(k,{columns:w,data:_},{paramHeader:a(({row:l})=>[r(b(l.title),1)]),_:1})])])])])}}});const L=j(F,[["__scopeId","data-v-478e4ae8"]]);export{L as default};
