<template>
  <section class="message-articles">
    <swiper
        class="swiper message-articles__wrp"
        :options="swiperOption"
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
      <div v-if="actualWidth>375" class="swiper-button-next message-articles__arrow" slot="button-next"></div>
      <div v-if="actualWidth>375" class="swiper-button-prev message-articles__arrow-left" slot="button-prev"></div>
    </swiper>
    <NewPost v-if="actualWidth <=1280 && actualWidth>375" class="message-articles__new-post"/>
    <TimeDate v-if="actualWidth <=1280 && actualWidth>375"
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
export default {
  name: "Message-articles",
  components: {
    TimeDate,
    NewPost,
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
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 'auto',
          spaceBetween: 13,
          centeredSlides:true
        },
        // when window width is >= 768px
        768: {
          slidesPerView:1.9,
          spaceBetween: 20
        },
        // when window width is >= 1281px
        1281: {
          slidesPerView: 4,
          spaceBetween: 40
        },
      },
    },
    width: null,
    timeNow:"",
    dateNow:""
  }),
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
    moment,
    time() {
      let self = this
      this.timeNow = moment().lang('ru').format('LTS');
      setTimeout(self.time, 1000)
    },
    date(){
      let self = this
      this.dateNow = moment().locale('ru').format('DD.MM.YYYY')
      setTimeout(self.date, 1000)
    },
  },
  created() {
    window.addEventListener('resize', this.updateWidth);
    this.updateWidth();
  },
  mounted() {
    this.loadArticles;
    this.time();
    this.date();
  },
  computed:{
    ...mapActions('articlesModule',['loadArticles']),
    ...mapGetters('articlesModule',['getArticles']),
    actualWidth(){
      return this.width
    }
  }

}
</script>

<style lang="scss" scoped>
@import "Message-articles.module";
@media (max-width: 375px) {
  .swiper-slide-next{
    height: 180px;
    margin: auto;
    //margin-top: 35px;
    transition: all 0.3s;
  }
  .swiper-slide-prev{
    height: 180px;
    margin: auto;
    transition: all 0.3s;
  }
  .swiper-slider-active{
    height: 250px;
    transition: all 0.3s;
  }
  .swiper-slide{
    //width: 315px;
    transition: all 0.3s;
  }
}

</style>

