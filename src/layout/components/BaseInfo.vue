<template>
  <div class="base-info">
    <Avatar src="src/assets/images/avatar.png" width="70" height="70" alt="头像"></Avatar>
    <div class="name">凌凡</div>
  </div>
</template>

<script setup>
import Avatar from '@/components/Avatar.vue';
defineOptions({
  name: 'BaseInfo'
})


</script>

<style lang='scss' scoped>
.base-info {
  box-sizing: border-box;
  // text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

}
.name {
  font-size: 20px;
  font-family: fzls;
}
.mapbo {
  position: absolute;
}
</style>