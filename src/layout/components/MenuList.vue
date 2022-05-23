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
    name: '首',
    target: '/home',
    backgroundColor: '#EB5D3F',
  },
  {
    name: '记',
    target: '/notes',
    backgroundColor: '#a18cd1',
  },
  {
    name: '诗',
    target: '/about',
    backgroundColor: '#CC99CC',
  },
  {
    name: '感',
    target: '/about',
    backgroundColor: '#CC3333',
  },
  {
    name: '忆',
    target: '/about',
    backgroundColor: '#0099CC',
  },
  {
    name: '吾',
    target: '/about',
    backgroundColor: '#999900',
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
  text-align: center;
}

.menu-list__item {
  color: #fff;
  text-align: center;
  padding: 6px 0;
  margin: 15px 0;
  border-radius: 50px;
  cursor: pointer;
  

}
</style>