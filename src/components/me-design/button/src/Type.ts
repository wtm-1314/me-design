import { PropType } from "vue";

interface BtnType {
  title: string
  author: string
  year: number
}

export default {
    props: {
        book: {
            // 提供一个比 `Object` 更具体的类型
            type: Object as PropType<BtnType>,
            required: true
        }
    }
};
