import MBacktop from "./Main.vue";
MBacktop.name = "MBacktop";
MBacktop.install = app => {
    app.component(MBacktop.name,MBacktop);
};

export default MBacktop;