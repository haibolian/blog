<template>
  <div class="notes">
    <ContentBox>
      <template #nav>
        asd
      </template>
      Notes
    </ContentBox>
  </div>
</template>

<script setup>
const ContentBox = defineAsyncComponent(() => import('@/components/ContentBox.vue'));

defineOptions({
  name: 'Notes'
})
  
</script>

<style lang='scss' scoped>

</style>