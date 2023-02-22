import { describe, expect, it,test } from "vitest";
import { mount } from "@vue/test-utils";
import Dialog from "../src/Main.vue";

// 描述一段测试
describe("render Dialog", () => {
    it("测试Type传值",async()=>{

        const wrapper = mount(Dialog,{
            propsData:{
              show:true,
              title:'title',

            },
            slots: {
                default: "<div class=\"content\">我是内容</div>" // 插槽内容
            }
        });

        // 期望效果 得到节点正确
        expect(wrapper.find(".content").text()).toBe("我是内容");
        
    });
});

