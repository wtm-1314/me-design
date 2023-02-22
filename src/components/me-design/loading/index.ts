import Loading from './src/Main.vue';
Loading.name = 'Loading';

Loading.install = (app:any) =>{
    app.component(Loading.name,Loading);
};

export default Loading;
