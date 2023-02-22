const setValue = (value:any) =>{
    return JSON.stringify({
        value,
        timer:new Date().getDate()
    });
};

const UseLocalStore = () =>{
    const set = (key:string,value:any) =>{
        localStorage.setItem(key,setValue(value));
    };
    const get= (key:string) =>{
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data)?.value : null;
    };

    const clear = () =>{
        localStorage.clear();
    };
    const remove = (key:string)=>{
        localStorage.removeItem(key);
    };

    return {
        set,
        get,
        clear,
        remove
    };
};

const UseSesstionStore = () =>{
    const set = (key:string,value:any) =>{
        sessionStorage.setItem(key,setValue(value));
    };
    const get= (key:string) =>{
        const data = sessionStorage.getItem(key);
        return data ? JSON.parse(data)?.value : null;
    };

    const clear = () =>{
        sessionStorage.clear();
    };
    const remove = (key:string)=>{
        sessionStorage.removeItem(key);
    };

    return {
        set,
        get,
        clear,
        remove
    };
};

export {
    UseLocalStore,
    UseSesstionStore
};