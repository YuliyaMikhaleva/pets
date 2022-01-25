<template>
  <article class="post">
    <div class="post__img-container"  :style="`height: ${imgHeight}px;`">
      <img class="post__img"  :src="img" alt="photo">
    </div>
    <span class="post__title">{{ name }}</span>
    <div class="post__text">
      <div class="post__tag" :style="'background-color:'+ bg">{{ tag }}</div>
      <span class="post__likes">{{ likes }}</span><span class="post__likes-word"> {{word}}</span>
      <svg :class="{'post__active-like':isActive}" class="post__like" @click="isActive = !isActive && likes++" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.99609 15.5C8.99609 15.5 16.9961 9.93631 16.9961 4.66032C16.9961 -0.615631 9.89511 -1.01304 8.99609 4.26976C8.09704 -1.01304 0.996094 -0.60878 0.996094 5.07143C0.996094 10.7517 8.99609 15.5 8.99609 15.5Z" stroke="#F16063" stroke-linejoin="round"/>
      </svg>
    </div>
  </article>
</template>

<script>
export default {
  name: "Post",
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
  },
  data(){
    return{
      isActive: false,
    }
  },
  computed: {
    word() {
      console.log('imgHeight',this.imgHeight)
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
  @import "Post.module";
</style>