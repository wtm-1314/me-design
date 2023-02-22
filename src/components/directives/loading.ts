import Loading from '../me-design/loading';
import { createApp } from 'vue';

const setLoading = (node:any,bol:boolean) =>{
    let el = null;
    if(node.children?.length){
        const last = node.children?.length - 1;
        if(node.children[last]?.id === '#m-loading-wrap'){
            el = node.children[last];
        }
    }
    if(!bol){
        el && node?.removeChild(el);
        return;
    }

    if(!el){
        el = document.createElement('div');
        el.id = '#m-loading-wrap';
        node.appendChild(el);
    }

    // const {x,y,height,width} = node?.getBoundingClientRect();
    
    // 判断是否存在定位
    const position = node.style.position;
    if(!position || !(position.includes('relative') ||position.includes('fixed') || position.includes('absolute'))){
        node.style.position = 'relative';
        node.style['z-ndex'] = '3000';
    }
    const style = {
        position: 'absolute',
        top:0,
        left:0,
        zIndex:30000,
        width:'100%',
        height:'100%',
    };
    el.style = Object.keys(style).map(key=>`${key}:${style[key]}`).join(';');
    createApp(Loading,{
        text:node.getAttribute('loading-text') || '',
        theme:node.getAttribute('loading-theme'),
        size:node.getAttribute('loading-size')
    }).mount(el);
};
export default {
    mounted(el:any,binding:any) {
        const {value} = binding;
        setLoading(el,value);
    },
    updated(el:any,binding:any){
        const {value} = binding;
        setLoading(el,value);
    }
};