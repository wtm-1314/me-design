import{M as w}from"./44fde5cd.js";import{d as k,r as f,o as B,i as z,c as C,b as s,e as l,y as n,C as o,g as u}from"./17de59b6.js";const L={class:"test_page"},U=s("h2",null,"输入框",-1),R=s("p",null,"表单组件 输入框组件",-1),I={class:"mb_16"},M={class:"mb_16"},N={class:"mb_16"},V=s("h2",null,"小尺寸",-1),q=s("h2",null,"Api",-1),A=s("h2",null,"事件",-1),P=k({__name:"Page",setup(D){const e=f("123123"),r=f(),p=d=>{console.log(d)};B(()=>{r.value.focus()});const m=[{key:"param",title:"参数",custom:{header:"paramHeader",body:"paramBody"}},{key:"desc",title:"说明"},{key:"type",title:"类型"},{key:"default",title:"默认值"},{key:"version",title:"版本"}],c=[{param:"type",desc:"类型，原生基本类型 除了number 和file",default:"text",type:"string",version:"1.1.11"},{param:"size",desc:"尺寸 small | mini",default:"small",type:"string",version:"1.1.11"},{param:"value",desc:"双向绑定的值",default:"",type:"string | number | ...",version:"1.1.11"},{param:"maxLength",desc:"最大长度",default:"",type:"number",version:"1.1.11"},{param:"minlength",desc:"最小长度",default:"",type:"number",version:"1.1.11"},{param:"prefix",desc:"前缀",default:"fasle",type:"Boolean",version:"1.1.11"},{param:"suffix",desc:"后缀",default:"fasle",type:"Boolean",version:"1.1.11"},{param:"width",desc:"宽度",default:"180",type:"number | string",version:"1.1.11"},{param:"placeholder",desc:"placeholder 文本提示",default:"",type:"string",version:"1.1.11"},{param:"allowClear",desc:"清空文本",default:"false",type:"Boolean",version:"1.1.11"}],_=[{param:"change",desc:"改变值触发",default:"()=>{}",type:"envent",version:"1.1.11"},{param:"blur",desc:"blur触发",default:"()=>{}",type:"envent",version:"1.1.11"}],x=()=>{w({type:"success",msg:e.value||"空的哦"})},y=`
      <m-input
        type="text"
        placeholder="输入文本"
        v-model:value="value"
        size="small"
        width="200"
        @blur="onInput"
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
        @blur="onInput"
      >
        <template #prefix>https://</template>
        <template #suffix>.com</template>
      </m-input>
`;return(d,t)=>{const i=u("m-input"),h=u("m-button"),b=u("m-divider"),g=u("m-expand"),v=u("m-table");return z(),C("div",L,[U,R,s("div",I,[l(i,{type:"text",placeholder:"输入文本",value:e.value,"onUpdate:value":t[0]||(t[0]=a=>e.value=a),size:"small",disabled:"",width:"280",onBlur:p,allowClear:""},null,8,["value"]),l(i,{type:"email",value:e.value,"onUpdate:value":t[1]||(t[1]=a=>e.value=a),maxLength:12,size:"small",prefix:"",width:"280",ref_key:"inputRef",ref:r,allowClear:""},{prefix:n(()=>[o("邮箱")]),_:1},8,["value"]),l(i,{type:"number",value:e.value,"onUpdate:value":t[2]||(t[2]=a=>e.value=a),maxLength:12,size:"small",prefix:"",suffix:"",onBlur:p,allowClear:""},{prefix:n(()=>[o("https://")]),suffix:n(()=>[o(".com")]),_:1},8,["value"])]),s("div",M,[l(h,{onClick:x,type:"primary"},{default:n(()=>[o("确认")]),_:1})]),s("div",N,[V,l(i,{type:"text",placeholder:"输入文本",value:e.value,"onUpdate:value":t[3]||(t[3]=a=>e.value=a),size:"small",width:"240",onBlur:p},null,8,["value"]),l(i,{type:"email",value:e.value,"onUpdate:value":t[4]||(t[4]=a=>e.value=a),maxLength:12,size:"mini",prefix:"",width:"240",ref_key:"inputRef",ref:r},{prefix:n(()=>[o("邮箱")]),_:1},8,["value"]),l(i,{type:"number",value:e.value,"onUpdate:value":t[5]||(t[5]=a=>e.value=a),maxLength:12,size:"mini",width:"280",prefix:"",suffix:"",disabled:"",onBlur:p},{prefix:n(()=>[o("https://")]),suffix:n(()=>[o(".com")]),_:1},8,["value"])]),l(b,{type:"vertical"}),l(g,{code:y,title:"代码案例"}),q,l(v,{columns:m,data:c}),A,l(v,{columns:m,data:_})])}}});export{P as default};
