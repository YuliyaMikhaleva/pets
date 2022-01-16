<template>
  <section class="posts">
    <swiper :class="swiper" :options="swiperOption" class="posts__slider">
      <swiper-slide>
        <Post name="Bob" tag="Котенок" likes="326 лайка" img="images/petBob.png"/>
      </swiper-slide>
      <swiper-slide>
        <Post name="Loki" tag="Кот" likes="11 лайков" img="images/petLoki.png"/>
      </swiper-slide>
      <swiper-slide>
        <Post name="Bob" tag="Котенок" likes="326 лайка" img="images/petBob.png"/>
      </swiper-slide>
      <swiper-slide>
        <Post name="Loki" tag="Кот" likes="11 лайков" img="images/petLoki.png"/>
      </swiper-slide>
      <swiper-slide>
        <Post name="Bob" tag="Котенок" likes="326 лайка" img="images/petBob.png"/>
      </swiper-slide>
      <swiper-slide>
        <Post name="Loki" tag="Кот" likes="11 лайков" img="images/petLoki.png"/>
      </swiper-slide>
    </swiper>
    <NewPost class="posts__new-post"/>
    <Statistic class="posts__graphic"/>
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
      spaceBetween: 40,
    }
  })
}
</script>

<style lang="scss" scoped>
  .posts{
    margin-bottom: 30px;
    &__slider{
      grid-area: posts;
      margin: 0;
    }
    &__new-post{
      grid-area: new-post;
      height: 290px;
    }
    &__graphic{
      grid-area: graphic;
      height: 290px;
    }
  }
</style>