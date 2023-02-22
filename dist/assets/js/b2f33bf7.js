import{d as b,i as h,c as z,b as i,e,y as t,C as n,g as c}from"./eb002226.js";const B={class:"test_page"},M=i("div",null,[i("h2",null,"按钮组件"),i("p",null," 标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。 ")],-1),w=i("h4",null,"标准尺寸",-1),S={class:"mb_16"},v=i("h4",null,"文本按钮",-1),k=i("h4",null,"圆形按钮",-1),x={class:"mb_16"},P=i("h4",null,"小型尺寸",-1),C={class:"mb_16"},D=i("h4",null,"禁用按钮",-1),E={class:"mb_16"},N=i("h4",null,"加载按钮",-1),V=i("h2",null,"Api",-1),q=b({__name:"Page",setup(L){const m=`
        <m-button>Default</m-button>
        <m-button type="primary">Primary</m-button>
        <m-button type="danger">danger</m-button>
        <m-button type="warning">warning</m-button>

        <m-button type="primary" line>Primary</m-button>
        <m-button type="danger" line>danger</m-button>
        <m-button type="warning" line>warning</m-button>
`,d=`
    <m-button type="text">编辑</m-button>
    <m-button type="text" disabled>禁止编辑</m-button>
`,s=`
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
`,u=`
          <m-button size="mini">Default</m-button>
          <m-button size="mini" type="primary">Primary</m-button>
          <m-button size="mini" type="danger">danger</m-button>
          <m-button size="mini" type="warning">warning</m-button>

          <m-button size="mini" line type="primary">Primary</m-button>
          <m-button size="mini" line type="danger">danger</m-button>
          <m-button size="mini" line type="warning">warning</m-button>
`,p=`
<MButton type="primary" disabled>disabled</MButton>
`,y=`
          <MButton type="primary" loading>Loading</MButton>
          <MButton circle disabled loading type="danger"
            ><m-icon name="close" :fontSize="12"
          /></MButton>    
`,_=[{key:"param",title:"参数"},{key:"desc",title:"说明"},{key:"type",title:"类型"},{key:"default",title:"默认值"},{key:"version",title:"版本"}],f=[{param:"type",desc:"按钮类型 primary | danger | warning | text",default:"",type:"string",version:"1.1.11"},{param:"size",desc:"按钮大小 small | mini",default:"small",type:"string",version:"1.1.11"},{param:"loading",desc:"是否加载",default:"false",type:"boolean",version:"1.1.11"},{param:"disabled",desc:"是否禁用",default:"false",type:"boolean",version:"1.1.11"},{param:"circle",desc:"圆形按钮",default:"false",type:"boolean",version:"1.1.11"},{param:"line",desc:"边框线按钮",default:"false",type:"boolean",version:"1.1.11"}];return(A,T)=>{const a=c("m-button"),r=c("MExpand"),l=c("m-icon"),o=c("MButton"),g=c("m-table");return h(),z("div",B,[i("div",null,[M,w,i("div",S,[e(a,null,{default:t(()=>[n("Default")]),_:1}),e(a,{type:"primary"},{default:t(()=>[n("Primary")]),_:1}),e(a,{type:"danger"},{default:t(()=>[n("danger")]),_:1}),e(a,{type:"warning"},{default:t(()=>[n("warning")]),_:1}),e(a,{type:"primary",line:""},{default:t(()=>[n("Primary")]),_:1}),e(a,{type:"danger",line:""},{default:t(()=>[n("danger")]),_:1}),e(a,{type:"warning",line:""},{default:t(()=>[n("warning")]),_:1}),e(r,{code:m,title:"四种颜色分别代表不同含义，便于用户操作的提示作用"})]),v,i("div",null,[e(a,{type:"text"},{default:t(()=>[n("编辑")]),_:1}),e(a,{type:"text",disabled:""},{default:t(()=>[n("禁止编辑")]),_:1}),e(r,{code:d,title:"文字按钮，a标签和列表按钮可以使用这种按钮"})]),k,i("div",x,[e(o,{circle:"",type:"primary"},{default:t(()=>[e(l,{name:"search"})]),_:1}),e(o,{circle:"",type:"danger"},{default:t(()=>[e(l,{name:"search",fontSize:14})]),_:1}),e(o,{circle:""},{default:t(()=>[e(l,{name:"search",fontSize:14})]),_:1}),e(o,{circle:"",type:"warning"},{default:t(()=>[e(l,{name:"search",fontSize:14})]),_:1}),e(o,{circle:"",type:"primary",line:""},{default:t(()=>[e(l,{name:"search"})]),_:1}),e(o,{line:"",circle:"",type:"danger"},{default:t(()=>[e(l,{name:"search",fontSize:14})]),_:1}),e(o,{line:"",circle:""},{default:t(()=>[e(l,{name:"search",fontSize:14})]),_:1}),e(o,{circle:"",line:"",type:"warning"},{default:t(()=>[e(l,{name:"search",fontSize:14})]),_:1}),e(o,{circle:"",line:"",type:"text"},{default:t(()=>[e(l,{name:"search",fontSize:14})]),_:1}),e(r,{code:s,title:"圆形按钮，使用方式案例"})]),P,i("div",null,[i("div",C,[e(a,{size:"mini"},{default:t(()=>[n("Default")]),_:1}),e(a,{size:"mini",type:"primary"},{default:t(()=>[n("Primary")]),_:1}),e(a,{size:"mini",type:"danger"},{default:t(()=>[n("danger")]),_:1}),e(a,{size:"mini",type:"warning"},{default:t(()=>[n("warning")]),_:1}),e(a,{size:"mini",line:"",type:"primary"},{default:t(()=>[n("Primary")]),_:1}),e(a,{size:"mini",line:"",type:"danger"},{default:t(()=>[n("danger")]),_:1}),e(a,{size:"mini",line:"",type:"warning"},{default:t(()=>[n("warning")]),_:1}),e(r,{code:u,title:"小型尺寸案例"})]),D,i("div",E,[e(o,{type:"primary",disabled:""},{default:t(()=>[n("disabled")]),_:1}),e(r,{code:p,title:"禁用按钮案例"})]),N,i("div",null,[e(o,{type:"primary",loading:""},{default:t(()=>[n("Loading")]),_:1}),e(o,{circle:"",disabled:"",loading:"",type:"danger"},{default:t(()=>[e(l,{name:"close",fontSize:12})]),_:1}),e(r,{code:y,title:"加载数据和提交数据是使用"})])]),V,e(g,{columns:_,data:f})])])}}});export{q as default};
