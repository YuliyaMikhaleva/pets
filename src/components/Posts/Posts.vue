<template>
  <section class="posts">
    <swiper :class="swiper" :options="swiperOption" class="posts__slider">
      <swiper-slide v-for="post of posts" :key="post.name">
        <Post :name="post.name" :tag="post.type" :likes="post.likes" :img="post.img" :bg="post.bgColor"/>
      </swiper-slide>
      <div class="swiper-button-next posts__arrow" slot="button-next"></div>
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
import {mapActions, mapGetters} from "vuex";
export default {
  name: "Posts",
  components: {Statistic, NewPost, Post, Swiper, SwiperSlide},
  data:() => ({
    swiperOption: {
      slidesPerView: 2,
      spaceBetween: 40,
      navigation: {
        nextEl: '.swiper-button-next',
      }
    }
  }),
  props:{
    posts:{
      type: Array,
      required:true,
      default:() => [],
    }
  },
  mounted() {
    this.loadPosts;
  },
  computed:{
    ...mapActions('postsModule',['loadPosts']),
    ...mapGetters('postsModule',['getPosts']),
  },

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
    &__arrow{
      width: 46px;
      height: 46px;
      right: 0;
      background-color: #333333;
      border-radius: 100px;
    }
    &__arrow::after{
      content: "";
      display: block;
      width: 10.17px;
      height: 10.17px;
      border-top: 1px solid white;
      border-right: 1px solid white;
      transform: rotate(45deg);
      position: absolute;
      top: 40%;
      left: 30%;
    }
  }
</style>