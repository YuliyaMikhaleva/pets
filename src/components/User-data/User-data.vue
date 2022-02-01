<template>
  <section class="user-data">
    <article class="user-data__hello">
      <div class="user-data__wrp">
        <h1 class="user-data__title">С возвращением, Владимир</h1>
        <p class="user-data__text">Не забудь покормить своего питомца</p>
        <p class="user-data__text">Хорошего дня!</p>
        <img class="user-data__picture" src="images/poligons.svg" alt="photo">
        <img class="user-data__photo" src="images/picture-bg.png" alt="photo">
      </div>
    </article>
    <ProgressBlock v-if="actualWidth>375" class="user-data__progress"/>
    <TimeDate v-if="actualWidth>1280" class="user-data__time" text="На часах у нас" :time-date="timeNow" img="images/clock.svg" />
    <TimeDate v-if="actualWidth>1280" class="user-data__date" text="На календаре у нас" :time-date="dateNow" img="images/calendar.svg"/>
    <swiper v-if="actualWidth<=375" :options="swiperOption" class="user-data__slider swiper">
      <swiper-slide class="user-data__slide">
        <ProgressBlock/>
      </swiper-slide>
      <swiper-slide class="user-data__slide">
        <TimeDate
            class="user-data__time"
            text="На часах у нас"
            :time-date="timeNow"
            img="images/clock.svg"
            text2="На календаре у нас"
            :time-date2="dateNow"
            img2="images/calendar.svg"
        />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import moment from "moment"
import TimeDate from "../Time-date/Time-date";
import ProgressBlock from "@/components/Progress-block/Progress-block";
import { Mixin } from "@/assets/Mixin";
export default {
  name: "UserData",
  components: {ProgressBlock, TimeDate, Swiper, SwiperSlide},
  mixins:[Mixin],
  data(){
    return{
      timeNow:"",
      dateNow:"",
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 13,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        centeredSlides:true
      },
    }
  },
  methods:{
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

  mounted: function() {
    this.time();
    this.date();
  },
}
</script>

<style scoped lang="scss">
@import "Userdata.module";
</style>