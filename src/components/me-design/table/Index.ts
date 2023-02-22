import MTable from "./src/Main.vue";

MTable.install = app => {
    app.component(MTable.name,MTable);
};

export default MTable;