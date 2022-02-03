<template>
  <div class="pet-card">
    <div class="pet-card__slider">
      <swiper class="swiper pet-card__wrp" :options="swiperOption" :effect="'cards'">
        <swiper-slide  class="pet-card__photo-wrp" v-for="picture of pictures" :key="picture">
            <img class="pet-card__photo" :src="'/'+picture" alt="photo">
        </swiper-slide>

      </swiper>
      <div class="swiper-pagination swiper-pagination-v pet-card__pagination" slot="pagination">
      </div>

    </div>
    <div class="pet-card__description">
      <h1 class="pet-card__title">{{info.name}},
        <Gps/>
        <span class="pet-card__country">{{info.location.split(',')[0]}}</span></h1>
      <span class="pet-card__kind">{{info.breed}}</span><span class="pet-card__type">{{ info.type }}</span>
      <div class="pet-card__data">
        <span class="pet-card__likes">{{info.likes}} {{likeWord}}</span>
        <span class="pet-card__price">{{info.price}} P</span>
      </div>
      <div class="pet-card__params">
        <span class="pet-card__param">Возраст</span>
        <span class="pet-card__param">Вес</span>
        <span class="pet-card__param">Пол</span>
        <span class="pet-card__param"> {{ageNow}}</span>
        <span class="pet-card__param">{{ info.weight }} кг</span>
        <span class="pet-card__param">{{ gender }}</span>
      </div>
      <div class="pet-card__txt">
        <h3 class="pet-card__txt-title">Описание</h3>
        <p class="pet-card__txt-paragraph">{{info.about}}</p>
      </div>
      <Button class="pet-card__button" :title="'Купить - '+info.price+' Р'"/>


    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Gps from "@/../public/images/gpsIcon.svg?inline";
import Button from "@/components/Button/Button";
import {mapGetters} from "vuex";
import moment from "moment";
export default {
  name: "Pet-card",
  components:{Button, Gps, Swiper, SwiperSlide},
  props:{
    name:String,
    id:Number,
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
          clickable:true,
        },
      },
      petAge:{
        years:null,
        months:null,
        days:null
      },
      ageNow:null,
    }
  },
  methods:{
    moment,
    age(){
      this.ageNow = moment.duration(moment().diff(this.info.age)).locale('ru').humanize()
    }
  },
  computed: {
    ...mapGetters('filtersModule', ['getCatalog','getInfo']),
    pets() {
      return this.getCatalog
    },
    pictures(){
      if (this.info.images){
        return this.info.images
      } else {
        return [this.info.img]
      }
    },
    info(){
        return this.getInfo(this.petId)[0]
    },
    petId(){
      if (this.id){
        return this.id
      } else {
        return Number(localStorage.getItem('PetId'))
      }
    },
    gender(){
      if (this.info.sex === true){
        return "Мужской"
      } else {
        return "Женский"
      }
    },
    likeWord() {
      let el = this.info.likes.toString().slice(-1);
      if (el == 1) {
        return " Лайк "
      } else if (el == 2 || el == 3 || el == 4){
        return " Лайка "
      } else {
        return " Лайков "
      }
    },
  },
  mounted() {
    this.age();
    if (this.id){
      localStorage.setItem('PetId', String(this.id));
    }
  },

}
</script>

<style lang="scss" scoped>
  @import "Pet-card.module";

</style>