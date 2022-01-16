<template>
  <article class="post">
    <div class="post__img-container">
      <img class="post__img"  :src="img" alt="photo">
    </div>
    <span class="post__title">{{ name }}</span>
    <div class="post__text">
      <div class="post__tag">{{ tag }}</div>
      <span class="post__likes">{{ likes }}</span>
      <svg class="post__like" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      type:String,
      required:true
    },
    img:{
      type:String,
      required:true
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "Post.module";
</style>