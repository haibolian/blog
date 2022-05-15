<template>
  <div class="notes">
    <ContentBox>
      <template #nav>
        <ul>
          <li v-for="nav in navs" key="nav" @click="showList(nav)"> 
          <router-link :to="'/notes/' + nav">{{ nav }}</router-link>
            
          </li>
        </ul>
      </template>
      <router-view>
        <ul>
          <li v-for="li in list">
            {{ li.title }}
          </li>
        </ul>
      </router-view>
    </ContentBox>
  </div>
</template>

<script setup>
import useNavList from '@/hooks/useNavList';
const ContentBox = defineAsyncComponent(() => import('@/components/ContentBox.vue'));

defineOptions({
  name: 'Notes'
})

const data = useNavList('notes')
const navs = computed(() => data.map(list => list.dirname))

const current = ref('')

const list = computed(() => {
  const cur = unref(data).find(nav => nav.dirname === unref(current))
  console.log(cur);
  return cur?.files || []
})

const showList = (nav) => {
  current.value = nav
}

</script>

<style lang='scss' scoped>

</style>