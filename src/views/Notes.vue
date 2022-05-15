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
import useNavList from '@/hooks/useNavList';
const ContentBox = defineAsyncComponent(() => import('@/components/ContentBox.vue'));

defineOptions({
  name: 'Notes'
})

const list = useNavList('notes')

  
</script>

<style lang='scss' scoped>

</style>