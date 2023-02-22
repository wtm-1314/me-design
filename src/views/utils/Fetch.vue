<template>
  <div class="test_page">
    <h1>使用UseFetch创建一个单例，提供一系列方法调用</h1>
    <MExpand
      :code="codeStr"
      title="请求工具类，UseFetch是一个高效轻量，强悍的请求工具，更少的代码完成请求操作"
    />
    <div>
      <h3>获取用户列表</h3>
      <m-button @click="getUser" type="primary">测试请求</m-button>
      <m-dialog
        :show="data.show"
        title="请求数据返回成功"
        okText="确认"
        width="500px"
        cancelText="取消"
        @cancel="data.show = false"
        @ok="data.show = false"
      >
        <div id="demo_app"></div>
      </m-dialog>
    </div>

    <div>
      <h3>文件处理</h3>
      <input type="file" @change="onChange" />
      <br />
      <m-button @click="submit" type="primary">提交文件</m-button>
    </div>

    <div>
      <h3>删除用户操作</h3>
      <m-button type="danger" @click="deleteFN">delete方法</m-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import UseFetch from "../../fetch/useFetch";

const data = reactive({
  show: false,
  position: "top",
  btnType: "primary",
});

// 定义请求实例
const Http = UseFetch({
  headers: {}, // 设置请求头
  timeOut: 1000, //设置超时
  baseURL: "/ming-ui", // 设置请求前缀
  useLog: true, //输出日志
});
const getUser = async () => {
  const res = await Http.get(
    "/user-list",
    {
      pageNumber: 1,
      pageSize: 50,
    },
    {
      dataType: "text",
    }
  ).catch((err) => {
    console.log(err);
  });
  res && (data.show = true);
  res && (document.getElementById("demo_app").innerText = res);
};
let file: any = null;
const onChange = (e) => {
  file = e.target.files[0];
};

const submit = async () => {
  const res = await Http.postForm("/form", { file }).catch((err) => {
    console.log(err);
    alert(err)
  });

  console.log(res, "res");
};

const deleteFN = async () => {
  const res = await Http.delete("/delete-user", { userId: "xxxx" }).catch(
    (err) => {
      console.log(err);
      alert(err)
    }
  );
};

const codeStr = `
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

`;
</script>

<style scoped></style>
