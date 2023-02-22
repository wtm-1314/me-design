
const UseBack = () =>{
    const toTop = (target:any) =>{
        if(!target) throw new Error('没有节点！！！');
        target?.scrollTo({
            left:0,
            top:0,
            behavior: 'smooth'
        });
    };

    const toBottom = (target:any) =>{
        if(!target) throw new Error('没有节点！！！');
        target?.scrollTo({
            left:0,
            top:9999999,
            behavior: 'smooth'
        });
    };

    return {
        toTop,
        toBottom
    };
};

export default UseBack;