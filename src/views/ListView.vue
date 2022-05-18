<template>
  <!-- <template v-if="data"> -->
  <ul>
    <li v-for="l in data" @click="viewPosts(l.title)">
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

const router = useRouter()
const route = useRoute()
const viewPosts = (title) => {
  router.push({
    path: route.path + '/' + title
  })
}

</script>

<style lang='scss' scoped>
</style>