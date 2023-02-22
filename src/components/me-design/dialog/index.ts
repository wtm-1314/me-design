import MDialog from "./src/Main.vue";

MDialog.install = (app:any) =>{
    app.component(MDialog.name,MDialog);
};

export default MDialog;