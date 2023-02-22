import Icon from "./src/Main.vue";
Icon.name = "MIcon";

Icon.install = (app: any) =>{
    app.component(Icon.name,Icon);
};

export default Icon;