import MExpand from "./src/Main.vue";
MExpand.name = "MExpand";

MExpand.install = app =>{
    app.component(MExpand.name,MExpand);
};

export default MExpand;