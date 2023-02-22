import { App as Application } from 'vue'
import MMenu from "./src/Main.vue";

MMenu.install = (app:Application) =>{
    app.component(MMenu.name,MMenu);
};

export default MMenu;