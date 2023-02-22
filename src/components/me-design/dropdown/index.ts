import MDropdown from './src/Main.vue';
import MDropdownItem from './src/DropdownItem.vue';
// 对于setup直接加新名字即可解决名字问题
MDropdownItem.name = 'MDropdownItem';

MDropdown.install = app =>{
    app.component(MDropdownItem.name,MDropdownItem);
    app.component(MDropdown.name,MDropdown);
};
export {
    MDropdownItem
};

export default MDropdown;

