<template>
  <div class="waves">
    <iframe class="waves-iframe" @click="handleClose" src="/waves/index.html" frameborder="0"></iframe>
    <verse :isVertical="isVertical"/>
    <transition name="fade">
      <div v-show="isKeepColorName || showColorName" class="colorName">
        <color-name @hasGetColorName="hasGetColorName"></color-name>
      </div>
    </transition>
    <div class="arrow-to-body" @click="scrollToBody">👇</div>
    <!-- <div class="waves-setting">
      <span class="l-icon icon-setting" @click="clickSettingIcon">⚙</span>
      <transition name="slide-left-bottom">
        <setting-panel v-if="showSettingPanel"/>
      </transition>
    </div> -->
  </div>
</template>

<script>
import Verse from './Verse.vue'
import ColorName from "./ColorName.vue"
import { defineAsyncComponent } from 'vue'
export default {
  components:{
    Verse,
    ColorName,
    SettingPanel: defineAsyncComponent(()=>import('@/components/setting-panel/index.vue'))
  },
  data(){
    return{
      showSettingPanel:false,
      content: '',
      showColorName:true
    }
  },
  computed:{
    isVertical(){
      // return this.$store.state.setting.verticalVerse
      return true
    },
    isKeepColorName(){
      // return this.$store.state.setting.keepColorName
      return false
    }
  },
  methods:{
    scrollToBody(){
      this.$emit('clickArrow')
    },
    revise(){ 
      this.$store.commit('setting/changeSetting',{
        key:'writingMode',
        value: this.verseDrection == 'horizontal' ? 'vertical' : 'horizontal'
      })
    },
    finishWrite(){
      this.$emit('finishWrite')
    },  
    hasGetColorName(){
      setTimeout(() => {
        this.showColorName = false
      }, 2500);
    },
    clickSettingIcon(){
      this.showSettingPanel = !this.showSettingPanel
    }
  }
}
</script>

<style lang="scss" scoped>
.waves .arrow-to-body {
  position: absolute;
  bottom: 10%;
  width: 100%;
  text-align: center;
  cursor: pointer;
}
.waves{
  position: relative;
  .waves-iframe{
    width: 100%;
    height: calc(100vh);
  } 
  .waves-verse{
    height: calc(100vh);
    width: 100%;
    position: absolute;
    top: 30vh;
    left: 50vw;
    transform: translate( -50%,-50% );
  }
  .waves-verse-vertical{
    top: 40vh;
  }
  .fade-enter-active,
  .fade-leave-active{
    transition: opacity 0.5s ease;
  }
  .fade-enter-from,
  .fade-leave-to{
    opacity: 0;
  }
}
.waves-setting{
  position: absolute;
  bottom: 4vh;
  left: 2vw;
  .l-icon{
    cursor:pointer;
    color: rgb(224, 224, 224);
    font-size: 25px;
  }
}
// 上拉，下拉
.slide-left-bottom-enter-to, .slide-left-bottom-leave-from{
  transition: transform .2s cubic-bezier(0.23, 0.8, 0.32, 1), opacity .2s cubic-bezier(0.23, 0.8, 0.32, 1);
  transform-origin: left bottom;
}
.slide-left-bottom-enter-from, .slide-left-bottom-leave-to{
  transition: transform .2s cubic-bezier(0.23, 0.8, 0.32, 1), opacity .2s cubic-bezier(0.23, 0.8, 0.32, 1);
  transform-origin: left bottom;
  opacity: 0;
  transform: scaleX(0) scaleY(0);
}
</style>

