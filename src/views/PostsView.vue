<template>
  <div v-html="content">
  </div>
</template>

<script setup>
import axios from 'axios';
import hljs from 'highlight.js';

import render from '@/utils/markdown-render';
defineOptions({
  name: 'PostsView'
})

const html = hljs.highlightAuto('<h1>Hello World!</h1>').value

const route = useRoute()
const router = useRouter()
const { category, title } = route.params

const content = ref('')

const getMarkInfo = async () => {
  const w = await axios({
    url: '/public/notes/' + category + '/' + title + '.md',
    method: 'get'
  })
  content.value = render(w.data)
}

getMarkInfo()



</script>

<style lang='scss' scoped>

</style>