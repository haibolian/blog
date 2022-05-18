<template>
  <div class="notes">
    <ContentBox>
      <template #nav>
        <ul>
          <li v-for="nav in navs" key="nav" @click="showList(nav)"> 
            {{ nav }}
          </li>
        </ul>
      </template>
      <ListView :data="list"></ListView>
    </ContentBox>
  </div>
</template>

<script setup>
// import useNavList from '@/hooks/useNavList';
import { categories } from '@/utils/fillRouter';
const ListView = defineAsyncComponent(() => import('./ListView.vue'))
const ContentBox = defineAsyncComponent(() => import('@/components/ContentBox.vue'));

defineOptions({
  name: 'Notes'
})
const route = useRoute()
const router = useRouter()
const navs = Object.keys(categories)
const active = ref(route.params.category)
const list = computed(() => categories[active.value])

const showList = (nav) => {
  router.replace({
    name: 'notes',
    params: { category: nav }
  })
  active.value = nav
}

</script>

<style lang='scss' scoped>

</style>