import{d as u,i as s,c as d,b as e,a as l,C as c,e as a,g as _,p as f,j as y,h as k}from"./17de59b6.js";import{_ as x}from"./44fde5cd.js";const t=o=>(f("data-v-9a8d6fd3"),o=o(),y(),o),b={class:"test_page"},S=t(()=>e("h2",null,"Loading加载",-1)),C=t(()=>e("p",null,"使用方式，请求数据或者需要等待的时候需要加载，避免用户频繁操作",-1)),I=t(()=>e("h3",null,"大尺寸加载",-1)),z={"loading-size":"big",class:"demo"},B=t(()=>e("h3",null,"小尺寸",-1)),D={class:"demo","loading-text":"加载中","loading-theme":"light","loading-size":"mini"},E=t(()=>e("h3",null,"暗黑模式",-1)),N={class:"demo","loading-theme":"dark"},P=t(()=>e("h2",null,"Api",-1)),V=u({__name:"Page",setup(o){const r='<div v-loading="true" loading-size="big" class="demo">默认</div>',p=`<div
      class="demo"
      v-loading="true"
      loading-text="加载中..."
      loading-theme="light"
    >
      暂无数据
    </div>`,g=`
    <div v-loading="true" class="demo" loading-theme="dark">默认</div>
    `,m=[{key:"param",title:"参数"},{key:"desc",title:"说明"},{key:"type",title:"类型"},{key:"default",title:"默认值"},{key:"version",title:"版本"}],h=[{param:"v-loading",desc:"指令加载",default:"false",type:"boolean",version:"1.1.11"},{param:"loading-text",desc:"提示文案",default:"",type:"string",version:"1.1.11"},{param:"loading-theme",desc:"主题 light | dark",default:"light",type:"string",version:"1.1.11"}];return(w,M)=>{const i=_("MExpand"),v=_("m-table"),n=k("loading");return s(),d("div",b,[e("div",null,[S,C,I,l((s(),d("div",z,[c("默认")])),[[n,!0]]),a(i,{code:r,title:"大尺寸加载使用案例"}),B,l((s(),d("div",D,[c(" 暂无数据 ")])),[[n,!0]]),a(i,{code:p,title:"小尺寸加载使用案例"}),E,l((s(),d("div",N,[c("默认")])),[[n,!0]]),a(i,{code:g,title:"暗黑模式加载使用案例"}),P,a(v,{columns:m,data:h})])])}}});const L=x(V,[["__scopeId","data-v-9a8d6fd3"]]);export{L as default};
