<template>
  <div v-html="markInfo">
    
  </div>
</template>

<script setup>
import axios from 'axios';

defineOptions({
  name: 'PostsView'
})

const route = useRoute()
const router = useRouter()
const { category, title } = route.params

let markInfo = ref(null)

const getMarkInfo = async () => {
  const w = await axios({
    url: '/public/notes/' + category + '/' + title + '.md',
    method: 'get'
  })

  markInfo.value = w.data
}

getMarkInfo()




</script>

<style lang='scss' scoped>

</style>