<template>
  <ChinesePoetry @clickArrow="scrollToMain"></ChinesePoetry>
  <div ref="_ref_main">
    
  </div>
</template>

<script setup lang="ts">
import ChinesePoetry from '@/components/chinese-poetry/index.vue';
import { Ref } from 'vue';

const _ref_main: Ref = ref()

const scrollToMain = () => {
  _ref_main.value.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
   
}




</script>

<style lang='scss' scoped>

</style>