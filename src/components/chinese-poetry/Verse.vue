<template>
  <div
    v-if="changeDirection"
    :class="verseClass"
    :style="{ 'font-family': 'fzls, fzjt' }">
    <div class="verse">{{ verse }}</div>
    <div class="title-author">
      <span class="title">「 {{ title }}」</span>
      <span class="author">{{ author }}</span>
    </div>
  </div>
</template>

<script>
// import jinrishici from '@/utils/jinrishici'
import { nextTick } from 'vue'
export default {
  props:{
    isVertical: Boolean
  },
  data(){
    return {
      changeDirection:true,
      verse: '',
      verseObj:null,
      author:'', 
      title:'',
      index:0
    }
  },
  computed:{
    verseClass(){
      return {
        'verse-container': true,
        'is-verse-vertical': this.isVertical
      }
    },
  },
  methods:{
    async getVerse(){
      // let { data, status } = await jinrishici()
      let { data, status } = {"status":"success","data":{"id":"5b8b9572e116fb3714e72cb1","content":"去岁江南见雪时，月底梅花发。","popularity":1020000,"origin":{"title":"卜算子·雪月最相宜","dynasty":"宋代","author":"张孝祥","content":["雪月最相宜，梅雪都清绝。去岁江南见雪时，月底梅花发。","今岁早梅开，依旧年时月。冷艳孤光照眼明，只欠些儿雪。"],"translate":null},"matchTags":["华东","江南","晚上"],"recommendedReason":"","cacheAt":"2022-05-14T00:19:19.945575"},"token":"/8PYVOcIERn9lWCLgh2VQ3BTGdv73voy","ipAddress":"218.72.29.23","warning":null}
      if(status){
        this.verseObj = data
        this.verse = this.isVertical ? this.filterSign(data.content) : data.content
        this.author = data.origin.author
        this.title = data.origin.title
      }
    },
    filterSign(str){
      return str.replace(/，|。|？|！|、/g,' ')
    },
  },
  created(){},
  mounted(){
    this.getVerse()
  },
  watch:{
    isVertical(val){
      this.changeDirection = false
      nextTick(()=>{
        this.changeDirection = true
      })
      this.verse = val == 'vertical' ? this.filterSign(this.verse) : this.verseObj.content
    }
  },
}
</script>

<style lang="scss" scoped>
.verse-container{
  width: 100%;
  text-align: center;
  color: #111111;
  position: absolute;
  top: 30vh;
  left: 50vw;
  transform: translate( -50%,-50% );
  animation: fade-in 1s ease;
  -webkit-animation: fade-in 1s ease ;
}
.is-verse-vertical{
  width: unset;
  text-align: unset;
  top: 42vh;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
  word-break: keep-all;
  -webkit-word-break: keep-all;
  .title-author{ margin-top:unset; margin-right: 1.5vw; text-align: unset; }
}
.verse{
  font-size: 50px;
  width: auto;
  line-height: 1.5;
}
.title-author{
  margin-top: 3vh;
  text-align: center;
}
.title{
  font-size: 27px;
}
.author{
    font-size: 20px;
    background: rgb(194,0,0);
    color: #fff;
    border-radius: 6px;
    margin: 5px;
    padding: 1px 2px 0;
}
@keyframes fade-in {
  0% { opacity: 0; }
  25% { opacity: 0.25; }
  50% { opacity: 0.5; }
  75% { opacity: 0.75; }
  100% { opacity: 1; }
}
</style>