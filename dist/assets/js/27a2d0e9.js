import{M as g}from"./44fde5cd.js";import{d as k,r as d,D as w,o as C,i as z,c as N,b as n,e as t,y as o,C as c,g as s}from"./17de59b6.js";const B={class:"test_page"},M=n("h2",null,"输入数字组件",-1),L={class:"mb_16"},R={class:"mb_16"},U=n("h2",null,"Api",-1),V=n("h2",null,"事件",-1),A=k({__name:"Page",setup(q){d("");const m=d(),a=w({value1:1,value2:2,value3:3});C(()=>{m.value.focus()});const p=[{key:"param",title:"参数",custom:{header:"paramHeader",body:"paramBody"}},{key:"desc",title:"说明"},{key:"type",title:"类型"},{key:"default",title:"默认值"},{key:"version",title:"版本"}],v=[{param:"type",desc:"类型，原生基本类型 除了number 和file",default:"text",type:"string",version:"1.1.11"},{param:"size",desc:"尺寸 small | mini",default:"small",type:"string",version:"1.1.11"},{param:"value",desc:"双向绑定的值",default:"",type:"string | number | ...",version:"1.1.11"},{param:"maxLength",desc:"最大长度",default:"",type:"number",version:"1.1.11"},{param:"minlength",desc:"最小长度",default:"",type:"number",version:"1.1.11"},{param:"prefix",desc:"前缀",default:"fasle",type:"Boolean",version:"1.1.11"},{param:"suffix",desc:"后缀",default:"fasle",type:"Boolean",version:"1.1.11"},{param:"width",desc:"宽度",default:"180",type:"number | string",version:"1.1.11"},{param:"placeholder",desc:"placeholder 文本提示",default:"",type:"string",version:"1.1.11"}],f=[{param:"change",desc:"改变值触发",default:"()=>{}",type:"envent",version:"1.1.11"},{param:"blur",desc:"blur触发",default:"()=>{}",type:"envent",version:"1.1.11"}],_=()=>{g({type:"success",msg:JSON.stringify(a)||"空的哦"})},y=`
      <m-input
        type="text"
        placeholder="输入文本"
        v-model:value="value"
        size="small"
        width="200"
      />

      <m-input
        type="email"
        v-model:value="value"
        :maxLength="12"
        size="small"
        prefix
        suffix
        width="280"
        ref="inputRef"
      >
        <template #prefix>邮箱</template>
        <template #suffix>@qq.com</template>
      </m-input>
      
      <m-input
        type="number"
        v-model:value="value"
        :maxLength="12"
        size="small"
        width="200"
        prefix
        suffix
      >
        <template #prefix>https://</template>
        <template #suffix>.com</template>
      </m-input>
`;return(D,e)=>{const i=s("MInputNumber"),u=s("m-icon"),x=s("m-button"),b=s("m-divider"),h=s("m-expand"),r=s("m-table");return z(),N("div",B,[M,n("div",L,[t(i,{placeholder:"输入Number",value:a.value1,"onUpdate:value":e[0]||(e[0]=l=>a.value1=l),size:"small",max:12,min:5,disabled:"",width:"200"},null,8,["value"]),t(i,{value:a.value2,"onUpdate:value":e[1]||(e[1]=l=>a.value2=l),max:12,size:"small",min:5,prefix:"",width:"240",ref_key:"inputRef",ref:m},{prefix:o(()=>[c("宽度")]),_:1},8,["value"]),t(i,{value:a.value3,"onUpdate:value":e[4]||(e[4]=l=>a.value3=l),size:"small",width:"200",prefix:"",suffix:""},{prefix:o(()=>[t(u,{name:"minus",onClick:e[2]||(e[2]=()=>a.value3-=1)})]),suffix:o(()=>[t(u,{onClick:e[3]||(e[3]=()=>a.value3+=1),name:"plus"})]),_:1},8,["value"])]),n("div",R,[t(x,{onClick:_,type:"primary"},{default:o(()=>[c("确认")]),_:1})]),t(b,{type:"vertical"}),t(h,{code:y,title:"代码案例"}),U,t(r,{columns:p,data:v}),V,t(r,{columns:p,data:f})])}}});export{A as default};
