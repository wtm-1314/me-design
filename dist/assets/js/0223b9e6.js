import{U as L}from"./2b56ead0.js";import{d as F,D as C,i as E,c as v,e as g,b as c,y as w,C as b,g as x}from"./eb002226.js";const N=async(n,s)=>{const a=(n==null?void 0:n.toLowerCase())??"json";if(!s)throw new Error("没有响应数据！！！");if(a==="json")return await s.json();if(a==="text")return await s.text();if(a==="blob")return await s.blob();if(a==="formData")return await s.formData();if(a==="arrayBuffer")return await s.arrayBuffer()},f=(n,s)=>{const{log:a,error:u}=L(),{baseURL:i,timeOut:d,headers:p,body:m,method:o,dataType:e,useLog:t}=s;let r=null;return t&&a(JSON.stringify(s)),new Promise(async(l,_)=>{try{const h=new AbortController,U=h.signal;let T=!1;const y=await fetch((i||"")+n,{signal:U,headers:p,body:m,method:o});if(U.addEventListener("abort",()=>{u("请求超时...")}),r=setTimeout(()=>{!T&&h.abort()},d||1e3*60*8),y.ok||y.status>=200&&y.status<300){T=!0;const O=await N(e,y);clearTimeout(r),l(O)}else _(new Error("请求失败！")),clearTimeout(r)}catch(h){clearTimeout(r),_(h)}})},k=n=>{const s={headers:(n==null?void 0:n.headers)||{},timeOut:(n==null?void 0:n.timeOut)||18e5,baseURL:(n==null?void 0:n.baseURL)||"",useLog:n.useLog||!1},a=(o,e)=>{if(e&&Object.prototype.toString.call(e)==="[object Object]"){const t=Object.keys(e).map(r=>`${r}=${e[r]}`).join("&");o+=`?${t}`}return o},u=(o,e={},t={})=>(o=e?a(o,e):o,f(o,{...s,...t,method:"get"})),i=(o,e={},t={})=>f(o,{...s,...t,method:"post",body:e}),d=(o,e={},t={})=>f(o,{...s,...t,method:"put",body:e}),p=(o,e={},t={})=>{const r=new FormData;for(const l in e)Object.prototype.hasOwnProperty.call(e,l)&&r.append(l,e[l]);return f(o,{...t,method:"post",body:r})},m=(o,e={},t={})=>(o=e?a(o,e):o,f(o,{...s,...t,method:"delete"}));return{get:u,GET:u,post:i,POST:i,put:d,PUT:d,postForm:p,delete:m,DELETE:m}},B=k,D={class:"test_page"},R=c("h1",null,"使用UseFetch创建一个单例，提供一系列方法调用",-1),S=c("h3",null,"获取用户列表",-1),$=c("div",{id:"demo_app"},null,-1),j=c("h3",null,"文件处理",-1),P=c("br",null,null,-1),H=c("h3",null,"删除用户操作",-1),I=F({__name:"Fetch",setup(n){const s=C({show:!1,position:"top",btnType:"primary"}),a=B({headers:{},timeOut:1e3,baseURL:"/ming-ui",useLog:!0}),u=async()=>{const e=await a.get("/user-list",{pageNumber:1,pageSize:50},{dataType:"text"}).catch(t=>{console.log(t)});e&&(s.show=!0),e&&(document.getElementById("demo_app").innerText=e)};let i=null;const d=e=>{i=e.target.files[0]},p=async()=>{const e=await a.postForm("/form",{file:i}).catch(t=>{console.log(t),alert(t)});console.log(e,"res")},m=async()=>{await a.delete("/delete-user",{userId:"xxxx"}).catch(e=>{console.log(e),alert(e)})},o=`
// 引入请求
import UseFetch from "../../fetch/useFetch";

// 定义请求实例
const Http = UseFetch({
  headers:{},// 设置请求头
  timeOut:1000, //设置超时
  baseURL:'/ming-ui', // 设置请求前缀
  useLog: true // 使用控制台输出请求
})

// 获取用户列表
const getUsers = async () => {
  const res = await Http.get(
    "/user-list",
    {
      pageNumber:1,
      pageSize:50
    },
    {
      dataType:'text'
    }
  ).catch(err=>{
    console.log(err)
  };
  console.log(res,'res')
});

getUsers()

`;return(e,t)=>{const r=x("MExpand"),l=x("m-button"),_=x("m-dialog");return E(),v("div",D,[R,g(r,{code:o,title:"请求工具类，UseFetch是一个高效轻量，强悍的请求工具，更少的代码完成请求操作"}),c("div",null,[S,g(l,{onClick:u,type:"primary"},{default:w(()=>[b("测试请求")]),_:1}),g(_,{show:s.show,title:"请求数据返回成功",okText:"确认",width:"500px",cancelText:"取消",onCancel:t[0]||(t[0]=h=>s.show=!1),onOk:t[1]||(t[1]=h=>s.show=!1)},{default:w(()=>[$]),_:1},8,["show"])]),c("div",null,[j,c("input",{type:"file",onChange:d},null,32),P,g(l,{onClick:p,type:"primary"},{default:w(()=>[b("提交文件")]),_:1})]),c("div",null,[H,g(l,{type:"danger",onClick:m},{default:w(()=>[b("delete方法")]),_:1})])])}}});export{I as default};
