import MEmpty from './Index.vue';

MEmpty.name = 'MEmpty';
MEmpty.install = (app)=>{
    if(!app) throw new Error('暂无vue实例');
  
    app.component('MEmpty',MEmpty);
}; 

export default MEmpty;