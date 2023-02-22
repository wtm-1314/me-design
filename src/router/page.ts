export const ui = [
    {
        path: '/',
        redirect: '/button',
    },
    {
        path: '/button',
        name: 'Button',
        component: () => import('../components/me-design/button/Page.vue'),
        title: 'Button按钮'
    },
    {
        path: '/message',
        name: 'Message',
        component: () => import('../components/me-design/message/Page.vue'),
        title: 'Mesage消息'
    },
    {
        path: '/loading',
        name: 'Loading',
        component: () => import('../components/me-design/loading/Page.vue'),
        title: 'Loading加载'
    },
    {
        path: '/title-tip',
        name: 'Title',
        component: () => import('@/views/TitlePage.vue'),
        title: 'Tip悬浮提示'
    },
    {
        path: '/icon',
        name: 'Icon',
        component: () => import('../components/me-design/icon/Page.vue'),
        title: 'Icon图标'
    },
    {
        path: '/dialog',
        name: 'Dialog',
        component: () => import('../components/me-design/dialog/Page.vue'),
        title: 'Dialog 对话框'
    },
    {
        path: '/backtop',
        name: 'Backtop',
        component: () => import('../components/me-design/backtop/Page.vue'),
        title: 'Backtop 回到顶部'
    },
    {
        path: '/divider',
        name: 'Divider',
        component: () => import('../components/me-design/divider/Page.vue'),
        title: 'divider 分割线'
    },
    {
        path: '/menu',
        name: 'Menu',
        component: () => import('../components/me-design/menu/Page.vue'),
        title: 'Menu 菜单'
    },
    {
        path: '/table',
        name: 'Table',
        component: () => import('../components/me-design/table/Page.vue'),
        title: 'Table 列表'
    },
    {
        path: '/dropdown',
        name: 'Dropdown',
        component: () => import('../components/me-design/dropdown/Page.vue'),
        title: 'Dropdown 列表'
    },
    {
        path: '/input',
        name: 'Input',
        component: () => import('../components/me-design/input/Page.vue'),
        title: 'Input 输入框'
    },
    {
        path: '/input-number',
        name: 'InputNumber',
        component: () => import('../components/me-design/input-number/Page.vue'),
        title: 'InputNumber 输入框'
    },
    // {
    //     path: '/input-search',
    //     name: 'InputSearch',
    //     component: () => import('../components/me-design/input-search/Page.vue'),
    //     title: 'InputSearch 输入搜素'
    // },
];

export const business = [
    {
        path: '/edit-pdf',
        name: 'EditPdf',
        component: () => import('../business/edit-pdf/Page.vue'),
        title: 'EditPdf 编辑模板'
    }
];

export const utils = [
    {
        path:'/utils-fetch',
        name:'UtilsFetch',
        component: ()=>import('../views/utils/Fetch.vue'),
        title: 'fetch 请求函数'
    }
];

const headers = [
    {
        path:'/index',
        name:'Home',
        component: ()=>import('../views/home/Index.vue'),
        title: '快速开始'
    },
    {
        path:'/components',
        name:'Components',
        component:()=> import('../views/coms/Index.vue'),
        title:'组件',
        redirect:'/',
        children: [...ui,...business,...utils]
    },
    {
        path:'/link-us',
        name:'LinkUs',
        component: ()=>import('../views/home/Index.vue'),
        title: '联系我们'
    },
];

export default [
    ...headers
];


/**
 * 返回ui组件路由
 * @returns []
 */
export const uiComponents = () => {
    return ui.filter(o => o.component).map(o => {
        o.key = o.name;
        return o;
    });
};

/**
 * 返回业务组件
 * @returns []
 */
export const businessComponents = () => {
    return business.map(o => {
        o.key = o.name;
        return o;
    });
};

export const utilsComponent = () =>{
    return utils.map(o=>{
        o.key = o.name;
        return o;
    });
};

export const getHeader = () =>{
    return headers.map(o=>{
        o.key = o.name;
        return o;
    });
};