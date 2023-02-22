<template>
  <div class="test_page">
    <m-dropdown trigger="hover">
      <m-button type="primary"
        >Hover Me <m-icon name="caret-down" :fontSize="16"
      /></m-button>
      <template #content>
        <m-dropdown-item @click="onClick(i)" v-for="i in 20" :key="i">
          <span>打开新窗口</span>
        </m-dropdown-item>
      </template>
    </m-dropdown>
    <m-dropdown trigger="click">
      <m-button size="mini">Click Me <m-icon name="caret-down" :fontSize="16" /></m-button>
      <template #content>
        <m-dropdown-item v-for="i in 20" :key="i" @click="onClick(i)"
          >打开新窗口</m-dropdown-item
        >
      </template>
    </m-dropdown>
    
  </div>
</template>

<script setup lang="ts">
import { MDropdownItem } from "./index";
import { Message } from "@c/index";
const onClick = (i: number) => {
  Message({
    type: "success",
    msg: "操作索引==>" + i,
    theme: 'dark'
  });
};
</script>

