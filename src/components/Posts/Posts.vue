<template>
  <section class="posts">
    <div class="posts__slider">
      <div class="posts__shadowRight">
        <div v-if="actualWidth>375" class="swiper-button-next posts__arrow" slot="button-next"></div>
      </div>
      <div class="posts__shadowLeft">
        <div v-if="actualWidth>375" class="swiper-button-prev posts__arrow-left" slot="button-prev"></div>
      </div>
      <swiper
          :options="swiperOption"
          class=" swiper">
        <swiper-slide class="posts__slide" v-for="post of posts" :key="post.name">
          <Post :name="post.name" :tag="post.type" :likes="post.likes" :img="post.img" :bg="post.bgColor"/>
        </swiper-slide>
      </swiper>

    </div>
    <NewPost v-if="actualWidth<=375 || actualWidth>1280" class="posts__new-post"/>
    <Statistic class="posts__graphic" name="Johny" likes="3"/>
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
        nextEl: '.posts__slider .posts__shadowRight',
        prevEl: '.posts__slider .posts__shadowLeft'
      },
      breakpoints: {
        320: {
          slidesPerView: 1.15,
          spaceBetween: 13,
          centeredSlides:true
        },
        376: {
          slidesPerView: 1,
          spaceBetween: 13,
          centeredSlides:true
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 20
        },
        1281:{
          slidesPerView: 2,
          spaceBetween: 40
        }
      },

    },
    width:null,
    cats:[
      {
        name:'Johny',
        likes: 3
      },
      {
        name:'Loki',
        likes: 2
      },
      {
        name:'Bob',
        likes: 1
      },
    ]
  }),
  props:{
    posts:{
      type: Array,
      required:true,
      default:() => [],
    }
  },
  methods: {
    updateWidth() {
      this.width = document.body.clientWidth;
    },
  },
  created() {
    window.addEventListener('resize', this.updateWidth);
    this.updateWidth();
  },
  mounted() {
    this.loadPosts;
  },
  computed:{
    ...mapActions('postsModule',['loadPosts']),
    ...mapGetters('postsModule',['getPosts']),
    actualWidth(){
      return this.width
    }
  },

}
</script>

<style lang="scss" scoped>
  @import "./src/assets/variables";
  @import "./src/components/Post/Post.module.scss";
  .posts{
    &__shadowRight{
      position: absolute;
      top: 0;
      right: 0;
      width: 180px;
      height: 100%;
      background: linear-gradient(89.87deg, var(--color1-slider-shadow) 6.42%, var(--color2-slider-shadow) 75.23%);
      z-index: $zIndex1;
    }
    &__shadowLeft{
      position: absolute;
      top: 0;
      left: 0;
      width: 180px;
      height: 100%;
      background: linear-gradient(89.87deg, var(--color2-slider-shadow) 6.42%, var(--color1-slider-shadow) 75.23%);
      z-index: $zIndex1;
    }
    &__slider{
      grid-area: posts;
      margin: 0;
      position: relative;
    }
    &__new-post{
      grid-area: new-post;
      height: 290px;
      min-width: 210px;
      margin: 0;
    }
    &__graphic{
      grid-area: graphic;
      height: 290px;
      min-width: 512px;
    }
    &__arrow-left{
      width: 46px;
      height: 46px;
      left: 0;
      background-color: var(--color-arrow-slider);
      border-radius: 100px;
      transition: opacity 0.3s;
      &:hover{
        opacity: 50%;
        transition: opacity 0.3s;
      }
    }
    &__arrow-left::after{
      content: "";
      display: block;
      width: 10.17px;
      height: 10.17px;
      border-top: 1px solid white;
      border-left: 1px solid white;
      transform: rotate(-45deg);
      position: absolute;
      top: 40%;
      right: 30%;
    }
    &__arrow{
      width: 46px;
      height: 46px;
      right: 0;
      background-color: var(--color-arrow-slider);
      border-radius: 100px;
      z-index: $zIndex2;
      transition: opacity 0.3s;
      &:hover{
        opacity: 50%;
        transition: opacity 0.3s;
      }
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
      transition: border 0.3s;
    }
  }
  //скрытие кнопки навигации, если в данном направлении изображений больше нет
  .swiper-button-disabled{
    display:none;
  }

  @media (max-width: 375px) {
    .posts{
      margin-bottom:22px;
      &__shadowRight{
        display: none;
      }
      &__shadowLeft{
        display: none;
      }
      &__graphic{
        display: none;
      }
      &__slider::before{
        display: none;
      }
      &__slider{
        margin-top: auto;
        height: 280px;
      }
      &__slide{
        width: 325px;
      }
      &__new-post{
        justify-items: flex-end;
        margin-top: auto;
        margin-left: 25px;
        margin-right: 25px;
      }
    }
    .swiper-slide-next{
      height: 220px;
      margin: auto;
      transition: all 0.3s;
    }
    .swiper-slide-prev{
      height: 220px;
      margin: auto;
      transition: all 0.3s;
    }
    .swiper-slider-active{
      height: 290px;
      transition: all 0.3s;
    }
    .swiper-slide{
      transition: all 0.3s;
    }
  }

  .swiper-slide > .post > .post__text{
    display: none;
  }
  .swiper-slider-active > .post > .post__text{
    display: flex;
  }
</style>