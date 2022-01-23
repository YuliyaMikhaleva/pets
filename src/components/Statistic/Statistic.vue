<template>
  <article class="statistic">
    <div class="statistic__block">
      <div class="statistic__img">
        <swiper :options="swiperOption" class="statistic__slider">
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
          <div class="swiper-button-prev statistic__arrow-left" slot="button-prev" @click="updateSlide()"></div>
          <div class="swiper-button-next statistic__arrow-right" slot="button-next" @click="updateSlide()"></div>
        </swiper>
      </div>

      <div class="statistic__txt">
        <span class="statistic__title">{{ name }}</span>
        <span> <span>{{likes}} </span> лайка</span>
      </div>
    </div>
    <div class="statistic__diagram">
      <div class="statistic__data">
        <span class="statistic__data-item">Лайки</span>
        <span class="statistic__data-item">Просмотры</span>
      </div>
      <Graphic :likesCount="likes" :activeSlide="slide"/>
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
import Graphic from "../Graphic";
export default {
  name: "Statistic",
  components: {Graphic, Swiper, SwiperSlide},
  props:{
    likes:{
      type:String,
      required:true
    },
    name:{
      type:String,
      required:true
    },
  },
  data:() => ({
    swiperOption: {
      slidesPerView: 1,
      spaceBetween: 100,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    },
    width:null,
    days:['пн','вт','ср','чт','пт','сб','вс'],
    actualSlide:1,
  }),
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
    updateSlide() {
      let slide = document.querySelector('.statistic__slide.swiper-slide.swiper-slide-active');
      console.log(slide)
      let activeId = slide.getAttribute('id');
      console.log('Активный ID:',activeId);
      this.actualSlide = activeId;
      // console.log(slide.getAttribute('id'))

    },
  },
  created() {
    window.addEventListener('resize', this.updateWidth);
    this.updateWidth();
  },
  mounted() {
    this.updateSlide();
  },
  computed:{
    slide(){
      // let slides = document.querySelectorAll('.statistic__slide');
      // this.updateSlide();
      console.log('Активный слайд', this.actualSlide)
      return this.actualSlide
    }
    // activeBlock(){
    //   let slider = document.querySelector('.statistic')
    //   console.log(slider)
    //   // return slider
    //   let activeSlide = slider.querySelector('.swiper-slide-active');
    //   console.log(activeSlide)
    //   // return activeSlide
    //   let activeId = activeSlide.getAttribute('id')
    //   console.log(activeId)
    //   return activeId
    // }
  }
}
</script>

<style lang="scss" scoped>
  @import "Statistic.module";
  .swiper-button-disabled{
    display:none;
  }
</style>