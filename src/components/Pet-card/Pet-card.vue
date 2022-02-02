<template>
  <div class="pet-card">
    <div class="pet-card__slider">
      <swiper class="swiper pet-card__wrp" :options="swiperOption" :effect="'cards'">
        <swiper-slide  class="pet-card__photo-wrp" v-for="picture of pictures" :key="picture">
            <img class="pet-card__photo" :src="'/'+picture" alt="photo">
        </swiper-slide>
      </swiper>
    </div>
    <div class="pet-card__description">
      <h1 class="pet-card__title">{{name}},
        <Gps/>
        <span class="pet-card__country">{{location}}</span></h1>
      <span class="pet-card__kind">Британский короткошорстный</span><span class="pet-card__type">Кот</span>
      <div class="pet-card__data">
        <span class="pet-card__likes">{{likes}} Лайка</span>
        <span class="pet-card__price">5000 P</span>
      </div>
      <div class="pet-card__params">
        <span class="pet-card__param">Возраст</span>
        <span class="pet-card__param">Вес</span>
        <span class="pet-card__param">Пол</span>
        <span class="pet-card__param">2 года</span>
        <span class="pet-card__param">2 кг</span>
        <span class="pet-card__param">Мужской</span>
      </div>
      <div class="pet-card__txt">
        <h3 class="pet-card__txt-title">Описание</h3>
        <p class="pet-card__txt-paragraph">Кот Локи больше не просит есть. Он просто сидит напротив и смотрит на меня так, будто ждет, что я подам ему еду. Как-то ночью я проснулся от того, что почувствовал, что рядом кто-то есть. Я повернулся, чтобы увидеть, кто это, но там никого не было. Мне было страшно.</p>
      </div>
      <Button class="pet-card__button" title="Купить - 5000 Р"/>


    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Gps from "@/../public/images/gpsIcon.svg?inline";
import Button from "@/components/Button/Button";
import {mapGetters} from "vuex";
export default {
  name: "Pet-card",
  components:{Button, Gps, Swiper, SwiperSlide},
  props:{
    name:String,
    location:String,
    img:String,
    likes:Number,
    sex:Boolean,
    images:Array
  },
  data(){
    return{
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 49,
        centeredSlides:true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
      },
      id:this.$route.params.img
    }
  },
  computed: {
    ...mapGetters('filtersModule', ['getCatalog']),
    pets() {
      return this.getCatalog
    },
    pictures(){
      if (this.images){
        return this.images
      } else {
        return [this.img]
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "Pet-card.module";
</style>