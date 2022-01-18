<template>
  <section class="message-articles">
    <swiper
        class="swiper message-articles__wrp"
        :options="(this.width>375) ? swiperOption : swiperOption375"
    >
      <swiper-slide class="message-articles__slide" v-for="article of articles" :key="article.id">
        <MessageArticle
            :author="article.name"
            :time="article.time"
            :description="article.email"
            :txt1="article.body"
            :txt2="article.text2"
            :txt3="article.text3"
            :bg="article.bgColor"
        />
      </swiper-slide>
      <div v-if="this.width>375" class="swiper-button-next message-articles__arrow" slot="button-next"></div>
      <div v-if="this.width>375" class="swiper-button-prev message-articles__arrow-left" slot="button-prev"></div>
    </swiper>
  </section>
</template>

<script>
import MessageArticle from "@/components/Message-article/Message-article";
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import {mapActions, mapGetters} from "vuex";
export default {
  name: "Message-articles",
  components: {
    MessageArticle,
    Swiper,
    SwiperSlide,
  },
  props:{
    articles:{
      type: Array,
      required:true,
      default:() => [],
    }
  },
  data:() => ({
    swiperOption: {
      slidesPerView: 4,
      spaceBetween: 40,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
    },
    swiperOption375:{
      slidesPerView: 1,
      spaceBetween: 40,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
    },
    width: null
  }),
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
  },
  created() {
    window.addEventListener('resize', this.updateWidth);
    this.updateWidth();
  },
  mounted() {
    this.loadArticles;
  },
  computed:{
    ...mapActions('articlesModule',['loadArticles']),
    ...mapGetters('articlesModule',['getArticles']),

  }

}
</script>

<style lang="scss" scoped>
@import "Message-articles.module";
</style>

