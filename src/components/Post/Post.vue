<template>
  <article class="post">
    <div class="post__img-container" v-if="name=='Bob'">
      <img class="post__img"  src="images/petBob.png" alt="photo">
    </div>
    <div class="post__img-container" v-if="name=='Loki'">
      <img class="post__img" src="images/petLoki.png" alt="photo">
    </div>
    <span class="post__title">{{ name }}</span>
    <div class="post__text">
      <div class="post__tag">{{ tag }}</div>
      <span class="post__likes">{{ likes }}</span>
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
  }
}
</script>

<style lang="scss" scoped>
  @import "Post.module";
</style>