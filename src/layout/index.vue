<template>
  <div class="main">
    layout
    <router-view></router-view>
  </div>
</template>

<script setup>
  defineOptions({
    name: 'index'
  })
  
</script>

<style lang='scss' scoped>
.main {
  height: 100vh;
  background-image: linear-gradient(to top right, rgb(255, 221, 221), rgb(228, 244, 255));
}
</style>