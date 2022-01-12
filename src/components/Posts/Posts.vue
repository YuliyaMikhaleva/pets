<template>
  <section class="posts">
    <Post name="Bob" tag="Котенок" likes="326 лайка"/>
    <Post name="Loki" tag="Кот" likes="11 лайков"/>
    <NewPost/>
    <Statistic/>

  </section>
</template>

<script>
import Post from "@/components/Post/Post";
import NewPost from "@/components/New-post/New-post";
import Statistic from "@/components/Statistic/Statistic";
export default {
  name: "Posts",
  components: {Statistic, NewPost, Post}
}
</script>

<style lang="scss" scoped>
  .posts{
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 40px;
  }
</style>