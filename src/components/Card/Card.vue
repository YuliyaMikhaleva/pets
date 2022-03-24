<template>
  <article class="card">
    <router-link :to="{name:'Pets\\', params:{ name:this.name, id:this.id}}">
      <div class="card__img-container"  :style="`height: ${imgHeight}px;`">
        <img class="card__img"  :src="img" alt="photo">
      </div>
    </router-link>
    <span class="card__title">{{ name }}</span>
    <div class="card__text">
      <div class="card__tag" :style="'background-color:'+ bg">{{ tag }}</div>
      <span class="card__likes">{{ likes }}</span><span class="card__likes-word"> {{word}}</span>
      <Like :class="{'card__active-like':isActive}" class="card__like" @click="changeNumber" />
    </div>
  </article>
</template>

<script>
import Like from "@/../public/images/like.svg?inline";

export default {
  name: "Card",
  components:{Like},
  props:{
    name:{
      type:String,
      required:true
    },
    tag:{
      type:String,
      required:true
    },
    likes:{
      type:Number,
      required:true
    },
    img:{
      type:String,
      required:true
    },
    bg:{
      type:String,
      required:true
    },
    imgHeight:{
      type:Number,
      required:false
    },
    id:{
      type:Number,
      default:0
    }
  },
  data(){
    return{
      isActive: false,
    }
  },
  methods:{
    changeNumber(){
      if (this.isActive){
        this.isActive = !this.isActive;
        this.likes--
      } else {
        this.isActive = !this.isActive;
        this.likes++
      }
    }
  },
  computed: {
    word() {
      let el = this.likes.toString().slice(-2)
      if (el == 1) {
        return " лайк "
      } else if (el == 2 || el == 3 || el == 4){
        return " лайка "
      } else {
        return " лайков "
      }
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "Card.module";
</style>