<!--Должны выводиться в цикле и брать данные из файла!-->
<template>
  <article class="statistic">
    <div class="statistic__block">
      <div class="statistic__img">
        <swiper :options="swiperOption" class="statistic__slider" ref="swiper" @slideChange="updateSlide">
          <swiper-slide class="statistic__slide" id="1">
              <img class="statistic__img-cat" src="images/cat2.jpg" alt="photo">
          </swiper-slide>
          <swiper-slide class="statistic__slide" id="2" >
            <img class="statistic__img-cat" src="images/petBob.png" alt="photo">
          </swiper-slide>
          <swiper-slide class="statistic__slide" id="3">
            <img class="statistic__img-cat"  src="images/cat2.jpg" alt="photo">
          </swiper-slide>
          <swiper-slide class="statistic__slide" id="4">
            <img class="statistic__img-cat"  src="images/petBob.png" alt="photo">
          </swiper-slide>
          <swiper-slide class="statistic__slide" id="5">
            <img class="statistic__img-cat"  src="images/cat2.jpg" alt="photo">
          </swiper-slide>
          <div class="swiper-button-prev statistic__arrow-left" slot="button-prev"></div>
          <div class="swiper-button-next statistic__arrow-right" slot="button-next"></div>
        </swiper>
      </div>

      <div class="statistic__txt">
        <span class="statistic__title">{{cats[actualSlide].name}}</span>
        <span> <span>{{ cats[actualSlide].likes }} </span> лайка</span>
      </div>
    </div>
    <div class="statistic__diagram">
      <div class="statistic__data">
        <span class="statistic__data-item">Лайки</span>
        <span class="statistic__data-item">Просмотры</span>
      </div>
      <Graphic :activeSlide="actualSlide"/>
      <!--      <StatisticDiagram/>-->
      <ul class="statistic__dates statistic__date-numbers">
        <li class="statistic__dates statistic__date-numbers" v-for="index in 7" :key="index">{{ index + 16 }}</li>
      </ul>
      <ul class="statistic__dates statistic__date-days">
        <li class="statistic__dates statistic__date-days" v-for="item of days" :key="item">{{ item }}</li>
      </ul>
    </div>
  </article>

</template>

<script>
// import StatisticDiagram from "@/components/Statistic-diagram/Statistic-diagram";
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import Graphic from "../Graphic/Graphic";
export default {
  name: "Statistic",
  components: {Graphic, Swiper, SwiperSlide},
  props:{
    likes:{
      type:String,
      required:false
    },
    name:{
      type:String,
      required:false
    },
  },
  data:() => ({
    swiperOption: {
      slidesPerView: 1,
      spaceBetween: 100,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
    },
    width:null,
    days:['пн','вт','ср','чт','пт','сб','вс'],
    actualSlide:1,
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
      {
        name:'Murka',
        likes: 3
      },
      {
        name:'Vasya',
        likes: 2
      },
    ]
  }),
  methods: {
    updateWidth() {
      this.width = document.body.clientWidth;
    },
    updateSlide(){
      this.actualSlide = this.$refs.swiper.$swiper.realIndex
    }
  },
  created() {
    window.addEventListener('resize', this.updateWidth);
    this.updateWidth();
  },
  computed:{
    slide(){
      console.log('Активный слайд:', this.actualSlide);
      return this.actualSlide
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "Statistic.module";
  .swiper-button-disabled{
    display:none;
  }
</style>