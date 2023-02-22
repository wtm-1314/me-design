<template>
  <table>
    <thead v-if="showHeader">
      <tr>
        <th
          v-for="h in columns"
          :key="h.key"
          :class="{
            has_border: hasBorder,
          }"
        >
          <slot
            v-if="h && h.custom && h.custom.header"
            :name="h.custom.header"
            :row="h"
            >{{ h.title }}</slot
          >
          <div v-else :class="h.class">
            {{ h.title }}
          </div>
        </th>
      </tr>
    </thead>
    <tbody :style="tbodyStyle">
      <tr
        v-for="item in data"
        :key="'m-table-item' + item.id || item.idStr"
        :class="{ has_stripe: stripe }"
      >
        <td
          v-for="h in columns"
          :key="'row-' + h.key"
          :class="{ has_border: hasBorder }"
        >
          <slot
            v-if="h && h.custom && h.custom.body"
            :name="h.custom.body"
            :row="item"
          >
            {{ item[h.key] }}
          </slot>
          <div v-else :class="h.class">
            {{ item[h.key] }}
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
interface Custom {
  header?: string;
  body?: string;
}
interface RowItem {
  title: string;
  key: string | number;
  class: string;
  custom: Custom;
  align: string;
}
export default defineComponent({
  name: "MTable",
  props: {
    columns: {
      type: Array as PropType<RowItem[]>,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
    hasBorder: {
      type: Boolean,
      default: false,
    },
    stripe: {
      type: Boolean,
      default: false,
    },
    height: {
      type: String,
      default: "",
    },
    showHeader:{
      type:Boolean,
      default:true
    },
    selection:{
      type:Object,
      default:()=>({
        rowKey:'id',
        change:(ids:string[],rows:object[])=>{

        }
      })
    }
  },
  setup(props) {
    const tbodyStyle = computed(()=>{
      return props.height ? {
        height:props.height,
        overflow:'auto'
      } : ''
    })

    return {
      tbodyStyle
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/var.scss";
table {
  width: 100%;
  border: 1px solid $table_border_color;
  border-collapse: collapse;
  height: auto;
  background: #fff;
  border-radius: 8px;
  th,
  td {
    padding: 12px;
    text-align: left;
    color: #333;
    &.has_border {
      border: 1px solid $table_border_color;
    }
  }
  th {
    background: #fafafa;
    font-size: 14px;
    font-weight: bold;
  }

  tr {
    border: 1px solid $table_border_color;
    &.has_stripe:nth-child(even) {
      background: rgb(250, 250, 239);
      &:hover{
        background: #f1f6fa;
      }
    }
    &:hover {
      background: #f1f6fa;
    }
  }
}
</style>
