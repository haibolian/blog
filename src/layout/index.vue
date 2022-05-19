<template>
  <div class="main">
    <div class="left-info">
      <BaseInfo></BaseInfo>
      <MenuList></MenuList>
      <LinkMe></LinkMe>
    </div>
    <div class="right-content">
      <router-view></router-view>
    </div>

  </div>
</template>

<script setup>
const BaseInfo = defineAsyncComponent(() => import("./components/BaseInfo.vue"));
const MenuList = defineAsyncComponent(() => import("./components/MenuList.vue"));
const LinkMe = defineAsyncComponent(() => import("./components/LinkMe.vue"));

defineOptions({
  name: 'index'
})

</script>
<style scoped>
.left-info{
  font-family: fzjt;
}
</style>