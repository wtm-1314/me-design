import MButton from "./src/Main.vue";
MButton.install = (app:any) =>{
    app.component(MButton.name,MButton);
};

export default MButton;