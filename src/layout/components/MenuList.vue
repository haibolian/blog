<template>
  <div class="menu-list">
    <ul class="menu-list__box">
      <li
        v-for="list in navList"
        key="list.name"
        class="menu-list__item"
      >
        <router-link :to="list.target">{{ list.name }}</router-link>
        
      </li>
    </ul>
  </div>
</template>

<script setup>
defineOptions({
  name: 'MenuList'
})

const navList = reactive([
  {
    name: '首页',
    target: '/home'
  },
  {
    name: '笔记',
    target: '/notes'
  },
  // {
  //   name: '诗词',
  //   target: '/poetry'
  // },
  // {
  //   name: '随笔',
  //   target: '/essay'
  // },
  {
    name: '关于',
    target: '/about'
  }
])

// const router = useRouter()

// const clickNav = (target) => {
//   router.push(target)
// }

</script>

<style lang='scss' scoped>
.menu-list {
  box-sizing: border-box;
  padding: 20px;
}
.menu-list__box {

}

.menu-list__item {

}
</style>