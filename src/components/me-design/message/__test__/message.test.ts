import { describe, expect, it,test } from "vitest";
import { mount } from "@vue/test-utils";
import Message from "../src/Main.vue";

describe("render message", () => {
    it("成功的提示",async()=>{

        const wrapper = mount(Message,{
            propsData:{
                msg:'成功',
                type:'success',
                bindId:'bindId'
            },
        });

        // 期望效果 得到节点正确
        expect(wrapper.find(".text").text()).toBe("成功");
    });
});