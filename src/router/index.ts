import { createRouter,createWebHashHistory } from 'vue-router';
import routes from './page';
import UseLog from '@/utils/useLog';

const { log } = UseLog();

const router = createRouter({
    history:createWebHashHistory(),
    routes
});
router.beforeEach((to,from,next)=>{
    log('path:',to.path,'query:',to.query,'params:',to.params);
    next();
});
export default router;