<template>
  <article class="statistic" v-if="cats.length">
    <div class="statistic__block">
      <div class="statistic__img">
        <swiper :options="swiperOption" class="statistic__slider" ref="swiper" @slideChange="updateSlide">
          <swiper-slide class="statistic__slide" v-for="item of cats" :key="item.name">
            <img class="statistic__img-cat" :src="item.img" alt="photo">
          </swiper-slide>
          <div class="swiper-button-prev statistic__arrow-left" slot="button-prev"></div>
          <div class="swiper-button-next statistic__arrow-right" slot="button-next"></div>
        </swiper>
      </div>

      <div class="statistic__txt">
        <span class="statistic__title">{{cats[actualSlide].name}}</span>
        <span> <span>{{ cats[actualSlide].likes }} </span> {{word}} </span>
      </div>
    </div>
    <div class="statistic__diagram">
      <div class="statistic__data">
        <span class="statistic__data-item">Лайки</span>
        <span class="statistic__data-item">Просмотры</span>
      </div>
      <Graphic :activeSlide="actualSlide" :array="this.getGraphics" class="statistic__graphic"/>
      <ul class="statistic__dates statistic__date-numbers">
        <li class="statistic__dates statistic__date-numbers" v-for="item of weekDays" :key="item">{{ item }}</li>
      </ul>
      <ul class="statistic__dates statistic__date-days">
        <li class="statistic__dates statistic__date-days" v-for="(day, index) of namesOfDays" :key="day+index">{{ day }}</li>
      </ul>
    </div>
  </article>

</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import Graphic from "../Graphic/Graphic";
import moment from "moment";
import {mapActions, mapGetters} from "vuex";
export default {
  name: "Statistic",
  components: {Graphic, Swiper, SwiperSlide},
  data:() => ({
    swiperOption: {
      slidesPerView: 1,
      spaceBetween: 100,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
    },
    actualSlide:0,
    dateNow:"",//сегодняшнее число (начало этой недели)
    dateEnd:"",//конец недели число (конец этой недели)
    weekDays:[],//числа недели начиная с сегодняшнего
    namesOfDays:[],//названия дней недели начиная с сегодняшнего
  }),
  methods: {
    updateSlide(){
      this.actualSlide = this.$refs.swiper.$swiper.realIndex
    },
    moment,
    date(){
      this.dateNow = +(moment().locale('ru').format('L').slice(0,2));
    },
    weekEnd(){
      this.dateEnd = +(moment().add(6, 'days').locale('ru').format('L').slice(0,2));
    },
    weekArr(){
      for (let i = 0; i<=6; i++){
        let day = +(moment().add(i, 'days').locale('ru').format('L').slice(0,2))
        let nameOfDay = moment().day(day+1).locale('ru').format('dd').toUpperCase()
        this.weekDays.push(day);
        this.namesOfDays.push(nameOfDay)
      }
    },
  },
  computed:{
    ...mapActions('statisticsModule',['loadStatistic']),
    ...mapGetters('statisticsModule',['getStatistic', 'getGraphics']),
    cats(){
      return this.getStatistic
    },
    word() {
      let el = this.cats[this.actualSlide].likes
      if (el == 1) {
        return " лайк "
      } else if (el == 2 || el == 3 || el == 4){
        return " лайка "
      } else {
        return " лайков "
      }
    },
  },
  mounted() {
    this.date();
    this.weekEnd();
    this.weekArr();
    this.loadStatistic;
  }
}
</script>

<style lang="scss" scoped>
  @import "Statistic.module";
</style>