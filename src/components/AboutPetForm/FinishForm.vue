<template>
  <div class="finish-form">
      <swiper class="swiper" :options="swiperOption" :effect="'cards'">
        <swiper-slide v-for="(picture, index) of getPetsInfo.photos" :key="picture+index">
          <img :src="picture" alt="photo">
        </swiper-slide>
<!--      <div v-if="getPetsInfo.photos.length>1" class="swiper-pagination swiper-pagination-v  swiper-pagination-bullets" slot="pagination">-->
<!--      </div>-->
        <div v-if="actualWidth>768" class="swiper-button-next pet-card__arrow-next" slot="button-next"></div>
        <div v-if="actualWidth>768" class="swiper-button-prev pet-card__arrow-prev" slot="button-prev"></div>
      </swiper>
    <div class="pet-card__description finish-form__description">
      <h1 class="pet-card__title finish-form__title">{{getPetsInfo.name}},
        <Gps class="pet-card__gps-icon"/>
        <span class="pet-card__country">{{getPetsInfo.country.split(',')[0]}}</span></h1>
      <span class="pet-card__kind"><span class="pet-card__type">{{ getPetsInfo.kindOfPet }}</span></span>
      <div class="pet-card__params">
        <div v-for="item of parametrs" :key="item">
          <div class="pet-card__param">{{item}}</div>
          <div v-if="item=='Возраст'" class="pet-card__value">{{getPetsInfo.date}}</div>
          <div v-if="item=='Вес'" class="pet-card__value">{{getPetsInfo.weight}} кг</div>
          <div v-if="item=='Пол'" class="pet-card__value">{{gender}}</div>
        </div>
        <div>
        </div>
      </div>
      <div class="pet-card__txt">
        <h3 class="pet-card__txt-title">Описание</h3>
        <vue-custom-scrollbar v-if="actualWidth>768" class="scroll-area"  :settings="settings">
          <p class="pet-card__txt-paragraph">{{getPetsInfo.text}}</p>
        </vue-custom-scrollbar>
        <div v-if="actualWidth<=768" class="pet-card__text-wrp">
          <p class="pet-card__txt-paragraph">{{getPetsInfo.text}}</p>
          <div class="pet-card__mobile-line">
            <div class="pet-card__line"></div>
          </div>

        </div>
      </div>


    </div>
  </div>
</template>

<script>
import Gps from "@/../public/images/gpsIcon.svg?inline";
import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import {mapGetters} from "vuex";
import { Mixin } from "@/assets/Mixin";

export default {
  name: "FinishForm",
  components: {Swiper, SwiperSlide, vueCustomScrollbar, Gps},
  data(){
    return {
      swiperOption: {
        observer: true,
        observeParents: true,
        slidesPerView: 'auto',
        spaceBetween: 40,
        centeredSlides:true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
      },
      parametrs:['Возраст','Вес', 'Пол'],
      settings: {
        suppressScrollY: false,
        suppressScrollX: false,
        wheelPropagation: false
      },
    }
  },
  mixins:[Mixin],
  computed:{
    ...mapGetters('profileModule',['getPetsInfo']),
    gender(){ return ((this.getPetsInfo.sex === "M") ? "Мужской" : "Женский" ) },
  },
}
</script>

<style scoped lang="scss">
  @import "FinishForm";
  @import "../Pet-card/Pet-card.module";
</style>