<script setup lang="ts">
import ChinesePoetry from '@/components/chinese-poetry/index.vue';
defineOptions({
  name: 'App'
})

const _ref_main = ref()

const scrollToMain = () => {
  _ref_main.value.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}
</script>

<template>
  <ChinesePoetry @clickArrow="scrollToMain"></ChinesePoetry>
  <div ref="_ref_main">
    <router-view></router-view>
  </div>
</template>

<style>

</style>
