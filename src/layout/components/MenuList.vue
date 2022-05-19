<template>
  <div class="menu-list">
    <ul class="menu-list__box">
      <router-link v-for="list in navList" :to="list.target" custom v-slot="{ navigate }">
        <li
          :style="{ backgroundColor: list.backgroundColor }"
          @click="navigate"
          @keypress.enter="navigate"
          role="link"
          class="menu-list__item"
          :key="list.name"
        >
        {{ list.name }}
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script setup>
defineOptions({
  name: 'MenuList'
})
const navList = reactive([
  {
    name: '主',
    target: '/home',
    backgroundColor: 'red',
  },
  {
    name: '书',
    target: '/notes',
    backgroundColor: '#a18cd1',
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
    name: '吾',
    target: '/about',
    backgroundColor: '#30cfd0',
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
  color: #fff;
  text-align: center;
  padding: 6px 0;
  margin: 8px 0;
  border-radius: 10px;
  cursor: pointer;
  letter-spacing: 10px;

}
</style>