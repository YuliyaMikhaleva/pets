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
      <div v-if="pictures.length>1" class="swiper-pagination swiper-pagination-v pet-card__pagination swiper-pagination-bullets" slot="pagination">
      </div>

    </div>
    <div class="pet-card__description">
      <h1 class="pet-card__title">{{info.name}},
        <Gps/>
        <span class="pet-card__country">{{info.location.split(',')[0]}}</span></h1>
      <span class="pet-card__kind">{{info.breed}}</span><span class="pet-card__type">{{ info.type }}</span>
      <div class="pet-card__data">
        <span class="pet-card__likes">{{info.likes}} {{likeWord}}</span>
        <span class="pet-card__price" v-if="info.price">{{info.price}} ₽</span>
      </div>
      <div class="pet-card__params">
        <div v-for="item of parametrs" :key="item">
          <div class="pet-card__param">{{item}}</div>
          <div v-if="item=='Возраст'">{{ageNow}}</div>
          <div v-if="item=='Вес'">{{info.weight}} кг</div>
          <div v-if="item=='Пол'">{{gender}}</div>
        </div>
        <div>
        </div>
      </div>
      <div class="pet-card__txt">
        <h3 class="pet-card__txt-title">Описание</h3>
        <vue-custom-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle">
          <p class="pet-card__txt-paragraph">{{info.about}}</p>
          <Button class="pet-card__button">{{info.button}}</Button>

        </vue-custom-scrollbar>
      </div>


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
        // watchOverflow: true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
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
      },
      parametrs:['Возраст', 'Вес', 'Пол'],
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 23,
        },
        1280:{
          slidesPerView: 'auto',
          spaceBetween: 49,
          centeredSlides:true,
        }
      },
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
    if (!this.info.images){
      let element = document.querySelector('.pet-card__photo-wrp');
      element.classList.add('pet-card__photo-wrp1')
      console.log('element', element)
    }
  },

}
</script>

<style lang="scss" scoped>
  @import "Pet-card.module";

</style>