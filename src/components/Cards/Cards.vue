<template>
  <section class="cards">
    <div class="cards__slider">
      <div class="cards__shadowRight">
        <div v-if="actualWidth>375" class="swiper-button-next cards__arrow" slot="button-next"></div>
      </div>
      <div class="cards__shadowLeft">
        <div v-if="actualWidth>375" class="swiper-button-prev cards__arrow-left" slot="button-prev"></div>
      </div>
      <swiper
          :options="swiperOption"
          class=" swiper">
        <swiper-slide class="cards__slide" v-for="post of posts" :key="post.name">
          <Card :name="post.name" :tag="post.type" :likes="post.likes" :img="post.img" :bg="post.bgColor"/>
        </swiper-slide>
      </swiper>

    </div>
    <NewPost v-if="actualWidth<=375 || actualWidth>1280" class="cards__new-post"/>
    <Statistic v-if="actualWidth<=375 || actualWidth>768" class="cards__graphic"/>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Card from "@/components/Card/Card";
import NewPost from "@/components/New-post/New-post";
import Statistic from "@/components/Statistic/Statistic";
import {mapActions, mapGetters} from "vuex";
import { Mixin } from "@/assets/Mixin";
export default {
  name: "Cards",
  components: {Statistic, NewPost, Card, Swiper, SwiperSlide},
  mixins:[Mixin],
  data:() => ({
    swiperOption: {
      slidesPerView: 2,
      spaceBetween: 40,
      navigation: {
        nextEl: '.cards__slider .cards__shadowRight',
        prevEl: '.cards__slider .cards__shadowLeft'
      },
      breakpoints: {
        320: {
          slidesPerView: 1.15,
          spaceBetween: 13,
          centeredSlides:true
        },
        376: {
          slidesPerView: 1.67,
          spaceBetween: 30
        },
        // 1130: {
        //   slidesPerView: 1.67,
        //   spaceBetween: 30
        // },
        1281:{
          slidesPerView: 2,
          spaceBetween: 40
        }
      },

    },
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
  mounted() {
    this.loadCards;
  },
  computed:{
    ...mapActions('cardsModule',['loadCards']),
    ...mapGetters('cardsModule',['getCards']),
  },

}
</script>

<style lang="scss" scoped>
  @import "Cards.module";
</style>