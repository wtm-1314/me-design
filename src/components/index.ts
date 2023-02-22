import '@/assets/reset.css';
import '@/assets/font-icon/iconfont.css';
import '@/assets/font-family/m-font.css';

// ui组件
import MButton from './me-design/button';
import Message from './me-design/message';
import MMenu from './me-design/menu';
import Icon from './me-design/icon';
import MDialog from './me-design/dialog';
import MExpand from './me-design/expand';
import MDivider from './me-design/divider';
import MTable from './me-design/table';
import MBacktop from './me-design/backtop';
import MInput from './me-design/input';
import MInputNumber from './me-design/input-number';
import MDropdown,{MDropdownItem} from './me-design/dropdown';
import MInputSearch from './me-design/input-search';
import MEmpty from './me-design/empty';

// 指令
import Loading from './directives/loading';
import Title from './directives/title';

const components = [
    MButton,
    Message,
    MMenu,
    Icon,
    MDialog,
    MExpand,
    MDivider,
    MTable,
    MBacktop,
    MInput,
    MInputNumber,
    MDropdownItem,
    MDropdown,
    MEmpty
];

export default {
    install(app:any){
        components.forEach(o=>{
            app.component(o.name,o);
        });
        app.directive('loading',Loading);
        app.directive('title',Title);
    }
};

export {
    MButton,
    Message,
    MMenu,
    Icon,
    MDialog,
    MExpand,
    MDivider,
    MTable,
    MBacktop,
    MInput,
    MInputNumber,
    MDropdown,
    MEmpty
};