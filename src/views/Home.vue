<template>
  <div class="home">
    <ContentBox>
      home
    </ContentBox>
  </div>
</template>

<script setup lang="ts">
const ContentBox = defineAsyncComponent(() => import('@/components/ContentBox.vue'));

</script>

<style lang='scss' scoped>

</style>