import en from './module/en';
import zh_CN from './module/zh_CN';
import { reactive } from 'vue';

interface optionType {
  lang?:string,
}
let _this:any = null;
class MLang {
    lang:string;
    data: any;
    constructor(options:optionType){
        this.lang = options.lang || 'en'; // 
        this.data = reactive({
            langs:{}
        });
        _this = this;
        _this.setLangData();
    }

    /**
   * setLang
   */
    public setLang(key:string) {
        _this.lang = key;
        _this.setLangData();
    }

    /**
     * t
     */
    public t(langKey:string) {
        const keys = langKey.split('.');
        let res = _this.data.langs[keys[0]];
        if(!res) return; 
        for(let i = 1;i<keys.length;i++){
            res = res[keys[i]]; 
        }
        if(!res) return langKey;
        return res;
    }
    /**
     * 设置多语言数据
     */
    private setLangData(){
        switch(_this.lang){
        case 'en':
            _this.data.langs = en;
            break;
        case 'zh_CN':
            _this.data.langs = zh_CN;
            break;
        }
    }
}

export default MLang;