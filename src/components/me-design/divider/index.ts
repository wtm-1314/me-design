import Com from "./src/Main.vue";

Com.name = "MDivider";

Com.install = app =>{
    app.component(Com.name, Com);
};

export default Com;