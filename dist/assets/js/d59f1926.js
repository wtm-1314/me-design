import{M as x}from"./44fde5cd.js";import{i as v,c as C,b as m,e as t,y as r,C as a,g as d}from"./17de59b6.js";const f={class:"test_page"},_=m("h3",null,"全局弹窗提示信息组件",-1),b=m("h2",null,"Api",-1),M={__name:"Page",setup(w){const o=l=>{x({type:l,msg:"今天你很棒xxxxxx xxxxxxxx xxxxxxx xxxxxxx xxxxxxx！",duration:3e3,theme:"light"})},s=l=>{x({type:l,msg:"今天你很棒！",duration:3e3,theme:"dark"})},y=[{key:"param",title:"参数",custom:{header:"paramHeader",body:"paramBody"}},{key:"desc",title:"说明"},{key:"type",title:"类型"},{key:"default",title:"默认值"},{key:"version",title:"版本"}],g=[{param:"type",desc:"按钮类型 primary | error | warning",default:"primary",type:"string",version:"1.1.11"},{param:"msg",desc:"提示文案",default:"",type:"string",version:"1.1.11"},{param:"duration",desc:"销毁时间",default:"3000",type:"number",version:"1.1.11"},{param:"theme",desc:"主题 light | dark",default:"light",type:"string",version:"1.1.11"}],p=`
      <m-button @click="handleClick3('success')">Success</m-button>
      <m-button type="primary" @click="handleClick3('primary')"
        >Primary</m-button
      >
      <m-button type="danger" @click="handleClick3('error')">danger</m-button>
      <m-button type="warning" @click="handleClick3('warning')"
        >warning</m-button
      >

      import { Message } from "../message";

      const handleClick3 = (type) => {
        Message({
          type: type,
          msg: "今天你很棒！",
          duration: 3000,
          theme:'light'
        });
      };
`;return(l,e)=>{const n=d("m-button"),c=d("MExpand"),u=d("m-divider"),k=d("m-table");return v(),C("div",f,[m("div",null,[_,t(n,{onClick:e[0]||(e[0]=i=>o("success"))},{default:r(()=>[a("Success")]),_:1}),t(n,{type:"primary",onClick:e[1]||(e[1]=i=>o("primary"))},{default:r(()=>[a("Primary")]),_:1}),t(n,{type:"danger",onClick:e[2]||(e[2]=i=>o("error"))},{default:r(()=>[a("Danger")]),_:1}),t(n,{type:"warning",onClick:e[3]||(e[3]=i=>o("warning"))},{default:r(()=>[a("Warning")]),_:1}),t(c,{code:p,title:"提示Message使用案例"}),t(u,{type:"vertical"}),t(n,{onClick:e[4]||(e[4]=i=>s("success"))},{default:r(()=>[a("Success")]),_:1}),t(n,{type:"primary",onClick:e[5]||(e[5]=i=>s("primary"))},{default:r(()=>[a("Primary")]),_:1}),t(n,{type:"danger",onClick:e[6]||(e[6]=i=>s("error"))},{default:r(()=>[a("danger")]),_:1}),t(n,{type:"warning",onClick:e[7]||(e[7]=i=>s("warning"))},{default:r(()=>[a("Warning")]),_:1}),t(c,{code:p,title:"消息主题暗黑色，搭配自己的页面自定义主题"}),t(u,{type:"vertical"}),b,t(k,{columns:y,data:g})])])}}};export{M as default};
