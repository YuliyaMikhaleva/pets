<template>
  <article class="article">
    <Avatar class="article__avatar" :name="author" :bg-color="bg"/>
    <div class="article__title-wrp">
      <span class="article__author">{{ author }}</span>
      <span class="article__time">{{ time }}</span>
    </div>
    <p class="article__description">{{ description }}</p>
    <div class="article__text">
      <p class="article__txt">{{ txt1 }}</p>
      <p class="article__txt">{{ txt2 }}</p>
      <p class="article__txt">{{ txt3 }}</p>
    </div>
  </article>
</template>

<script>
import Avatar from "@/components/Avatar/Avatar";
export default {
  name: "Message-article",
  components: {Avatar},
  props:{
    author:{
      type:String,
      required:true
    },
    time:{
      // type:String,
      required: true
    },
    description:{
      type:String,
      required: true
    },
    txt1:{
      type:String,
      required: true
    },
    txt2:{
      type:String,
      required: false
    },
    txt3:{
      type:String,
      required: false
    },
    bg:{
      type:String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "Message-article.module";
</style>