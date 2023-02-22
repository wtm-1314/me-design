<template>
  <div class="m-dropdown-item">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.m-dropdown-item{
  min-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 32px;
  line-height: 32px;
  text-align: left;
  padding: 0 12px;
  cursor: pointer;
  background: #fff;
  border-radius: 4px;
  color: $font_color;
  &:hover{
    color: $primary_color;
    transition: all 0.3s;
    background: $menu_hover_color;
  }
}
</style>