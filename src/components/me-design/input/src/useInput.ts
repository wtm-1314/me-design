import { reactive, ref, watch } from 'vue';
interface PropsType {
  type?: string,
  size?: string,
  value: string | number,
  maxLength?: string | number,
  minlength?: string | number,
  prefix?: string | number,
  suffix?: string | number,
  width?: number | string,
  placeholder?: string,
  disabled?: boolean,
  allowClear?: boolean
}

export default (props: PropsType, emit: any, cb) => {
    const state = reactive({
        isFocus: false,
        bindVal: props.value,
        bindType: ['text', 'number', 'password'].includes(props.type) ? props.type : 'text'
    });
    const myInputRef = ref();

    // 聚焦
    const focus = () => {
        state.isFocus = true;
        myInputRef.value.focus();
    };
    // 失焦
    const blur = () => {
        state.isFocus = false;
        myInputRef.value.blur();
        emit('blur', state.bindVal);
    };

    const input = (e) => {
        state.bindVal = e?.target?.value;
        emit('update:value', state.bindVal);
    };

    const change = () => {
        emit('change', state.bindVal);
    };

    const clearValue = () => {
        state.bindVal = '';
    };

    watch(props.value, (val) => {
        console.log(val);
        state.bindVal = val;
    });

    return {
        state,
        focus,
        blur,
        input,
        myInputRef,
        change,
        clearValue
    };
};