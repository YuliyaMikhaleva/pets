<template>
  <section class="message-articles">
    <div class="message-articles__shadowRight">
      <div v-if="actualWidth>375" class="swiper-button-next message-articles__arrow" slot="button-next"></div>
    </div>
    <div class="message-articles__shadowLeft">
      <div v-if="actualWidth>375" class="swiper-button-prev message-articles__arrow-left" slot="button-prev"></div>
    </div>
    <swiper
        class="swiper message-articles__wrp"
        :options="swiperOption"
        ref="swiperMessages"
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
    </swiper>
    <NewPost v-if="actualWidth <=1280 && actualWidth>768" class="message-articles__new-post"/>
    <TimeDate v-if="actualWidth <=1280 && actualWidth>768"
        class="message-articles__time-date"
        text="На часах у нас"
        :time-date="timeNow"
        img="images/clock.svg"
        text2="На календаре у нас"
        :time-date2="dateNow"
        img2="images/calendar.svg"
    />
  </section>
</template>

<script>
import MessageArticle from "@/components/Message-article/Message-article";
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import {mapActions, mapGetters} from "vuex";
import NewPost from "@/components/New-post/New-post";
import TimeDate from "@/components/Time-date/Time-date";
import moment from "moment"
import { Mixin } from "@/assets/Mixin";
export default {
  name: "Message-articles",
  components: {
    TimeDate,
    NewPost,
    MessageArticle,
    Swiper,
    SwiperSlide,
  },
  mixins:[Mixin],
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
        nextEl: '.message-articles .message-articles__shadowRight',
        prevEl: '.message-articles .message-articles__shadowLeft'
      },
      breakpoints: {
        // when window width is >= 320px
        320:{
          slidesPerView: 1.15,
          spaceBetween: 13,
          centeredSlides:true
        },
        // when window width is >= 376px
        376: {
          slidesPerView:1.67,
          spaceBetween: 30
        },
        // when window width is >= 1281px
        1281: {
          slidesPerView: 4,
          spaceBetween: 40
        },
      },
    },
    timeNow:"",
    dateNow:""
  }),
  methods: {
    moment,
    time() {
      let self = this
      this.timeNow = moment().locale('ru').format('LTS');
      setTimeout(self.time, 1000)
    },
    date(){
      let self = this
      this.dateNow = moment().locale('ru').format('DD.MM.YYYY')
      setTimeout(self.date, 1000)
    },
  },
  mounted() {
    this.loadArticles;
    this.time();
    this.date();
    window.addEventListener('resize', this.$refs.swiperMessages.$swiper.update());
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

