const UseDom = () =>{
    // 返回节点位置信息
    const getNodeClientRect = (node:any)=> node ? node?.getBoundingClientRect() : {};

    // 操作节点class
    const getDomClassList = (dom:any) => {
        if(!dom){
            return [];
        }
        return dom.classList;
    };
    // 设置节点的类名称
    const addClassName = (dom:any,className:string) =>{
        if(!dom) return false;
        dom.classList?.add(className);
    };
    // 移除类
    const removeClassName = (dom:any,className:string) =>{
        if(!dom) return false;
        dom.classList?.remove(className);
    };

    return {
        getNodeClientRect,
        getDomClassList,
        addClassName,
        removeClassName
    };
};


export default UseDom;