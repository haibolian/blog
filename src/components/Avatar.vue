<template>
  <div class="avatar">
    <img
      :src="src"
      :alt="alt"
      :height="height"
      :width="width"
    >
  </div>
</template>

<script setup>
defineOptions({
  name: 'Avatar',
})

const props = defineProps({
  src: String,
  height: {
    type: String,
    default: '70'
  },
  width: {
    type: String,
    default: '70'
  },
  alt: String
})


</script>

<style lang='scss' scoped>
.avatar img{
  border-radius: 50%;
  box-shadow: 0 0 9px 2px #00000050;
}
</style>