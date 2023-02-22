## 开始

1、安装依赖

        pnpm i --no-save 
        npm i --no-save
        yarn
        cnpm i --no-save

2、启动项目

        npm run dev

3、打包发布 

        npm run build

4、组件打包发布

        npm run lib

## 组件开发

- 组件分为业务组件
- 工具类
- Ui组件

这里主要是Ui组件的开发，业务组件具体还是看业务场景，比较独立可以抽出来单独维护，这样不依赖主项目而运行。

## Ui组件
ui组件文件夹 /components/me-design
组件必须有入口文件  
```javascript
// index.ts 
import Component from './src/Main.vue';
// 完成按需引入需要
Component.install = app =>{
    app.component(Component.name,Component)
}
// 导出组件
export default Component;

// src/Main.vue
<template>
  <div>
    {{ msg }}
  </div>
</template>

<script lang="ts">
export default {
  name:'ComponentName',
  props:{
    msg:{
      type:String,
      default:'' 
    },
  },
  setup(props,ctx){
    
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/ui/componetName.scss';
</style>
    
 ```

## 业务组件

    

## 开发说明
    1、安装依赖
    pnpm install --save-dev

    2、运行
    pnpm run dev

    3、组件打包
    pnpm run lib

## 组件分类
- 业务组件
- ui 组件
- 工具类

> 说明：
编写文档在doc下的README.md文件进行说明，以及包升级等都需要打包升级才能发布

### 单元测试
        执行安装
        pnpm add -D vitest
安装完成后再项目根目录建一个文件配置 vitest.config.ts

```javascript
/// <reference types="vitest" />
import { defineConfig, configDefaults } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
export default defineConfig({
    plugins: [
        vue()
    ],
    test: {
        exclude: [...configDefaults.exclude, 'src/components/*'],
    },
});



 ```


1、编写单元测试，必须通过才能发布组件

2、单元测试命名：
    建__test__文件夹，里面具体要测试的单元功能，例如测试按钮，可以建一个button.test.ts那么配置文件自动检测到你的文件执行单元测试，
    通过即可继续你的组件开发
3、单元测试文件不能引入依赖，打包时不需要单元测试代码


```javascript 
// 引入测试依赖
import { describe, expect, it,test } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from '../src/Main.vue';

// 描述一段测试
describe('render button', () => {
    it('测试Type传值',async()=>{
        const type = 'primary',
            newType = 'warning';

        const wrapper = mount(Button,{
            propsData:{
                type
            },
            slots: {
                default: '<div class="content">我是内容</div>' // 插槽内容
            }
        });

        // 期望效果 得到节点正确
        await wrapper.setProps({ type: newType }); // 中途修改props的值你、
        expect(wrapper.find('.content').text()).toBe('我是内容');

        // 期望测试点击事件
        wrapper.find('.m-button').trigger('clcik');
        expect(wrapper.emitted().change);
    });
});

```