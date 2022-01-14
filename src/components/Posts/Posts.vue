<template>
  <section class="posts">
    <swiper :class="swiper" :options="swiperOption">
      <swiper-slide>
        <Post name="Bob" tag="Котенок" likes="326 лайка"/>
      </swiper-slide>
      <swiper-slide>
        <Post name="Loki" tag="Кот" likes="11 лайков"/>
      </swiper-slide>
      <swiper-slide>
        <Post name="Bob" tag="Котенок" likes="326 лайка"/>
      </swiper-slide>
      <swiper-slide>
        <Post name="Loki" tag="Кот" likes="11 лайков"/>
      </swiper-slide>
      <swiper-slide>
        <Post name="Bob" tag="Котенок" likes="326 лайка"/>
      </swiper-slide>
      <swiper-slide>
        <Post name="Loki" tag="Кот" likes="11 лайков"/>
      </swiper-slide>
    </swiper>

    <NewPost/>
    <Statistic/>

  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Post from "@/components/Post/Post";
import NewPost from "@/components/New-post/New-post";
import Statistic from "@/components/Statistic/Statistic";
export default {
  name: "Posts",
  components: {Statistic, NewPost, Post, Swiper, SwiperSlide},
  data:() => ({
    swiperOption: {
      slidesPerView: 2,
      spaceBetween: 0,
    }
  })
}
</script>

<style lang="scss" scoped>
  .posts{
    margin-bottom: 30px;
    display: flex;
    //display: grid;
    //grid-template-columns: 23% 23% 14% 39.4%;
    //grid-gap: 40px;
  }
</style>