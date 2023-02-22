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
        await wrapper.setProps({ type: newType }); // 中途修改props的值
        expect(wrapper.find('.content').text()).toBe('我是内容');

        // 期望测试点击事件
        wrapper.find('.m-button').trigger('clcik');
        expect(wrapper.emitted().change);
        console.log('测试完成');
        
    });
});

