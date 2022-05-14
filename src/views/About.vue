<template>
  <div class="about">
    <ContentBox>
      关于
    </ContentBox>
  </div>
</template>

<script setup>
const ContentBox = defineAsyncComponent(() => import('@/components/ContentBox.vue'));

</script>

<style lang='scss' scoped>

</style>