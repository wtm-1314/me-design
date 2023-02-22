import UseLog from '../utils/useLog';

interface OptionType {
    headers?: any
    timeOut?: number
    baseURL?: string
    body?: any
    method: 'get' | 'post' | 'put' | 'GET' | 'POST' | 'PUT' | 'delete' | 'DELETE'
    dataType?: 'JSON' | 'text' | 'blob' | 'arrayBuffer' | 'formData'
    useLog?:boolean
}

interface TypeFetchOption {
    headers?:any
    timeOut?:number
    baseURL?:string
    useLog?:boolean
}

/**
 * 响应输入解析
 * @param key 
 * @param res 
 * @returns 
 */
const getRes = async (key:string|undefined, res:any) => {
    const type = key?.toLowerCase()??'json';
    if(!res) throw new Error('没有响应数据！！！');
    if(type === 'json') return await res.json();
    if(type=== 'text') return await res.text();
    if(type=== 'blob') return await res.blob();
    if(type=== 'formData') return await res.formData();
    if(type=== 'arrayBuffer') return await res.arrayBuffer();
};

/**
 * 全局请求操作
 * @param url 
 * @param options 
 * @returns 
 */
const request = (url: string, options: OptionType) => {
    const { log,error } = UseLog();
    const { baseURL, timeOut, headers, body, method, dataType,useLog } = options;

    let timer:any = null;
    useLog && log(JSON.stringify(options));
    
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        try {
            const controller = new AbortController();
            const signal = controller.signal;
            let isOk = false;
            
            const response = await fetch((baseURL||'') + url, {
                signal,
                headers,
                body,
                method
            });
            signal.addEventListener('abort',
                () => {
                    error('请求超时...');
                }
            );

            timer = setTimeout(() => {
                !isOk && controller.abort(); // 取消
            }, timeOut || 1000 * 60 * 8);
            // 判断是否成功
            if (response.ok || (response.status >= 200 && response.status < 300)) {
                isOk = true;
                const res = await getRes(dataType,response);
                clearTimeout(timer);
                resolve(res);
            }else{
                reject(new Error('请求失败！'));
                clearTimeout(timer);
            }

        } catch (error) {
            clearTimeout(timer);
            reject(error);
        }
    });
};


// 请求方法配置
const UseFetch =(options:TypeFetchOption)=> {
    // 定义默认字段
    const httpOptions = {
        headers:options?.headers || {},
        timeOut:options?.timeOut || 1000 * 60 * 30,
        baseURL:options?.baseURL || '',
        useLog: options.useLog || false
    };

    const getQuery = (url:string,obj:any) => {
        if (obj && Object.prototype.toString.call(obj) === '[object Object]') {
            const str = Object.keys(obj)
                .map((key) => `${key}=${obj[key]}`)
                .join('&');
            url += `?${str}`;
        }

        return url;
    };
   
    const get = (url: string, params: any = {}, options: any = {})=> {
        url = params ? getQuery(url,params) : url;

        return request(url, {
            ...httpOptions,
            ...options,
            method: 'get',
        });
    };
    const post = (url: string, data = {}, options = {})=> request(url, {
        ...httpOptions,
        ...options,
        method: 'post',
        body: data,
    });
    const put = (url: string, data = {}, options = {}) => request(url, {
        ...httpOptions,
        ...options,
        method: 'put',
        body: data,
    });
    const postForm = (url: string, data: any = {}, options: any = {}) => {
        const formData = new FormData();

        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                formData.append(key, data[key]);
            }
        }

        return request(url, {
            ...options,
            method: 'post',
            body: formData,
        });
    };
    const deleteFn = (url: string, data: any = {}, options: any = {}) => {
        url = data ? getQuery(url,data) : url;

        return request(url, {
            ...httpOptions,
            ...options,
            method: 'delete',
        });
    };


    return {
        get,
        GET:get,
        post,
        POST:post,
        put,
        PUT:put,
        postForm,
        delete:deleteFn,
        DELETE:deleteFn
    };
};

export default UseFetch;

/**
 * response.text()：得到文本字符串。
response.json()：得到 JSON 对象。
response.blob()：得到二进制 Blob 对象。
response.formData()：得到 FormData 表单对象。
response.arrayBuffer()：得到二进制 ArrayBuffer 对象。

const response = fetch(url, {
  method: "GET",
  headers: {
    "Content-Type": "text/plain;charset=UTF-8"
  },
  body: undefined,
  referrer: "about:client",
  referrerPolicy: "no-referrer-when-downgrade",
  mode: "cors", 
  credentials: "same-origin",
  cache: "default",
  redirect: "follow",
  integrity: "",
  keepalive: false,
  signal: undefined
});

// 取消操作
let controller = new AbortController();
let signal = controller.signal;

fetch(url, {
  signal: controller.signal
});

signal.addEventListener('abort',
  () => console.log('abort!')
);

controller.abort(); // 取消

console.log(signal.aborted); // true

 */


/**
 * application/json
 * application/xml 和 text/xml
 * multipart/form-data
 * application/x-www-form-urlencoded
 */
