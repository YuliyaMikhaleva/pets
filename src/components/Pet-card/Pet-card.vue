<template>
  <div class="pet-card">
    <div class="pet-card__slider">
      <swiper class="swiper pet-card__wrp" :options="swiperOption" :effect="'cards'">
        <swiper-slide  class="pet-card__photo-wrp" v-for="picture of pictures" :key="picture">
            <img class="pet-card__photo" :src="'/'+picture" alt="photo">
        </swiper-slide>
          <div class="swiper-button-next pet-card__arrow-next" slot="button-next"></div>
          <div class="swiper-button-prev pet-card__arrow-prev" slot="button-prev"></div>
      </swiper>
      <div v-if="pictures.length>1" class="swiper-pagination swiper-pagination-v pet-card__pagination" slot="pagination">
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
        <vue-custom-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle">
          <p class="pet-card__txt-paragraph">{{info.about}}</p>
        </vue-custom-scrollbar>
      </div>
      <Button class="pet-card__button" :title="'Купить - '+info.price+' Р'"/>


    </div>
  </div>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Gps from "@/../public/images/gpsIcon.svg?inline";
import Button from "@/components/Button/Button";
import {mapGetters} from "vuex";
import moment from "moment";
export default {
  name: "Pet-card",
  components:{Button, Gps, Swiper, SwiperSlide, vueCustomScrollbar},
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
          watchOverflow: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
      },
      petAge:{
        years:null,
        months:null,
        days:null
      },
      ageNow:null,
      settings: {
        suppressScrollY: false,
        suppressScrollX: false,
        wheelPropagation: false
      }
    }
  },
  methods:{
    moment,
    age(){
      this.ageNow = moment.duration(moment().diff(this.info.age)).locale('ru').humanize()
    },
    scrollHanle(evt) {
      console.log(evt)
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
  .scroll-area {
    position: relative;
    margin: auto;
    width: 100%;
    height: 283px;
  }
  .scroll-area ::v-deep{
    .ps__thumb-y{
      background-color: #4C6FFF;
      width: 4px;
    }
  }
</style>