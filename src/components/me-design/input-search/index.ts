import MInputSearch from "./src/Index.vue";

MInputSearch.install = (app) =>{
    app.component(MInputSearch.name,MInputSearch);
};

export default MInputSearch;