

const UseDate = (options={})=>{

    const defaults = { //处理多语言
        weeks: options?.weeks || ['星期天','星期一','星期二','星期三','星期四','星期五','星期六']
    };
    // 获取年月日
    const getDateObj = (date=new Date()) =>{
        const DateObj = new Date(date);

        const Y = DateObj.getFullYear();
        const M = DateObj.getMonth()+1;
        const D = DateObj.getDate();

        const h = DateObj.getHours();
        const m = DateObj.getMinutes();
        const s = DateObj.getSeconds();

        const week = DateObj.getDay();

        return {
            Y,M,D,h,m,s,week
        };
    };
    const getFill = (num:number) => num >= 10 ? String(num) : ('0'+num);
    // 格式化日期
    const format = (date= new Date(),format='YYYY/MM/DD hh:mm') =>{
        const {Y,M,D,h,m,s,week} = getDateObj(date);

        if(format){
            let result = format;

            if(result.includes('YYYY')){
                result = result.replaceAll('YYYY',Y.toString());
                
            }else if(result.includes('YY')){
                result = result.replaceAll('YY',Y.toString().slice(1,3));
            }

            if(result.includes('MM')){
                result =result.replaceAll('MM',getFill(M));
            }
            if(result.includes('DD')){
                result = result.replaceAll('DD',getFill(D));
            }

            if(result.includes('hh')){
                result = result.replaceAll('hh',getFill(h));
            }else if(result.includes('HH')){
                result = result.replaceAll('HH',getFill(h));
            }

            if(result.includes('mm')){
                result = result.replaceAll('mm',getFill(m));
            }

            if(result.includes('ss')){
                result = result.replaceAll('ss',getFill(s));
            }
            return result;
        }

        return `${Y}-${M}-${D} ${h}:${m}:${s} ${defaults.weeks[week]}`;
    };
    // 是否在当前日期之前
    const isBefore = (date = new Date()) =>new Date().getTime() > new Date(date).getTime();
    // 是否在当前日期之后
    const isAfter =(date = new Date()) => new Date().getTime() < new Date(date).getTime();

    return {
        format,
        isBefore,
        isAfter
    };
};

export default UseDate;