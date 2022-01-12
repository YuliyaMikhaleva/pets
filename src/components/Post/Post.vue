<template>
  <article class="post">
    <img class="post__img" v-if="name=='Bob'" src="images/petBob.png" alt="photo">
    <img class="post__img" v-if="name=='Loki'" src="images/petLoki.png" alt="photo">
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