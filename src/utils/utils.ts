
import ClipboardJS from 'clipboard';
import { Message } from '../components';

const getFill = (num: number): string => {
    return num < 10 ? ('0' + num) : num.toString();
};

const getDate = (date: string | number | Date): string => {
    const time = date ? new Date(date) : new Date(),
        h = getFill(time.getHours()),
        m = getFill(time.getMinutes()),
        s = getFill(time.getSeconds());
    return `${h}:${m}:${s}`;
};

const getDataType = (o: any): any => Object.prototype.toString.call(o);

/**
 * 生拷贝方法
 * @param obj 
 * @returns 
 */
const deepClone = (obj: any): any => {
    const allowDataTypes = ['[object Object]', '[object Array]'];
    const key = getDataType(obj);
    let res = null;
    const clone = (obj: any, type: number) => {
        res = type === 1 ? {} : [];

        for (const key in obj) {
            const o = obj[key];
            const typeData = getDataType(o);
            // @ts-ignore
            res[key] = allowDataTypes.includes(typeData) ? deepClone(o) : o;
        }
    };

    switch (key) {
    case '[object Object]':
        clone(obj, 1);
        break;
    case '[object Array]':
        clone(obj, 2);
        break;
    default:
        res = obj;
        break;
    }

    return res;

};
// 延迟执行函数
const delayExecution = (func:Function,delay:number)=>{
    setTimeout(() => {
        func && func?.();
    }, delay ||0 );
};
// 复制
const copy = async (bindId: string) => {
    const clipboard = new ClipboardJS(bindId);
    let flag = false;

    clipboard.on('success', function (e) {
        flag = true;
        e.clearSelection();
    });
    clipboard.on('error', function (e) {
        flag = false;
    });
    delayExecution(()=> {
        Message({
            type: flag ? 'success' : 'error',
            msg: flag ? '复制成功！' : '复制失败！',
        });
    },100);
};

export default {
    /**
     * 输出日志
     * @param arg 参数
     */
    logger(...arg: any) {
        console.log(getDate(new Date()), ...arg);
    },
    deepClone,
    delayExecution,
    copy,
    /**
     * 节流
     * @param fn 需要执行的函数
     * @param timer 延迟执行时间
     */
    throttle:(fn:any,timeout:number)=>{
        let timer:any = null;

        return ()=>{
            if(timer) return;
            timer = setTimeout(() => {
                fn?.();
                timer = null;
            }, timeout);
            
        };
    },
    /**
     * 防抖
     * @param func 
     * @param delay 
     * @returns 
     */
    debounce:(func:any, delay:number)=>{
        let timeout:any = null;
        return function(e) {
            timeout && clearTimeout(timeout);
            const context:any = this, args:any = arguments;
            timeout = setTimeout(function(){
                func.apply(context, args);
            },delay);
        };
    }
};