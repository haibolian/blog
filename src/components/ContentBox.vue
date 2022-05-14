<template>
  <div class="content-box">
    <div class="navbar" v-if="showNavBar">
      <slot name="nav" />
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'ContentBox'
})
const slots = useSlots()
const showNavBar = computed(() => {
  return slots?.nav?.()
})

</script>

<style lang='scss' scoped>
</style>