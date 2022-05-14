<template>
  <div class="home">
    <ContentBox>
      <template #nav>
        asdasd
      </template>
      home
    </ContentBox>
  </div>
</template>

<script setup lang="ts">
const ContentBox = defineAsyncComponent(() => import('@/components/ContentBox.vue'));

</script>

<style lang='scss' scoped>

</style>