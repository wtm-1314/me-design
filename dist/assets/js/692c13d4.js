import{d as l,i as m,c as r,e as s,g as a,p as u,j as b,b as e}from"./17de59b6.js";import{_ as k}from"./44fde5cd.js";const o=t=>(u("data-v-0298ec46"),t=t(),b(),t),v={class:"test_page"},g=o(()=>e("h2",null,"回到顶部",-1)),y=o(()=>e("p",null,"何时使用？当页面滚动条比较长，需要长时间滚动是需要回到顶部组件",-1)),f=o(()=>e("div",{class:"back_top_id"},[e("div",null,"backtop demo test")],-1)),h=o(()=>e("h2",null,"Api",-1)),x=l({__name:"Page",setup(t){const c=`
    <div class="back_top_id">
      <div>backtop demo test</div>
    </div>
    <m-backtop target=".back_top_id" :scrollNum="100" class="back-top-demo" />

    // script
    import { MBacktop } from 'ming-ui'
    components:{
      MBacktop
    }
`,p=[{key:"param",title:"参数"},{key:"desc",title:"说明"},{key:"type",title:"类型"},{key:"default",title:"默认值"},{key:"version",title:"版本"}],n=[{param:"target",desc:"节点 id | class",default:"document.body",type:"string",version:"1.1.11"},{param:"scrollNum",desc:"滚动多少显示回到顶部",default:"200",type:"number",version:"1.1.11"},{param:"bottom",desc:"距离底部距离",default:"30",type:"number",version:"1.1.11"},{param:"right",desc:"距离右侧距离",default:"30",type:"number",version:"1.1.11"}];return(B,M)=>{const d=a("m-backtop"),_=a("MExpand"),i=a("m-table");return m(),r("div",v,[g,y,f,s(d,{target:".back_top_id",scrollNum:100,class:"back-top-demo"}),s(_,{code:c,title:"提示Message使用案例"}),h,s(i,{columns:p,data:n})])}}});const S=k(x,[["__scopeId","data-v-0298ec46"]]);export{S as default};
