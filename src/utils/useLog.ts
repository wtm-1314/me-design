import UseDate from './useDate';

const UseLog = () =>{
    const { format } = UseDate();

    const log = (...arg:any) =>{
        console.log(format(new Date),...arg);
    };
    const info = (...arg:any) =>{
        console.info(format(new Date),...arg);
    };
    const error = (...arg:any) =>{
        console.error(format(new Date),...arg);
    };
    const warn = (...arg:any) =>{
        console.warn(format(new Date),...arg);
    };
    const debug = (...arg:any) =>{
        console.debug(format(new Date),...arg);
    };

    return {
        log,
        info,
        error,
        warn,
        debug
    };
};

export default UseLog;