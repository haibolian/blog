<template>
  <!-- <template v-if="data"> -->
  <ul>
    <li v-for="l in data">
      {{ l.title }}
    </li>
  </ul>
  <!-- </template> -->
</template>

<script setup>
defineOptions({
  name: 'ListView'
})
const props = defineProps({
  data: Array
})
</script>

<style lang='scss' scoped>
</style>