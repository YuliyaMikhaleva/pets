<template>
        <div class="pets">
            <swiper v-if="actualWidth<=375" :options="swiperOption" class="swiper">
                <swiper-slide v-for="item of pets" :key="item.name" class="pets__slide-filter">
                    <FilterBlock :item="item.name">
                        <img :src="item.img" alt="photo">
                    </FilterBlock>
                </swiper-slide>
            </swiper>
          <div>
            <PetsFilters class="pets__filters pets__container"/>
          </div>
          <PetsCatalog class="pets__container"/>
          <div class="pets__footer"></div>

        </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    import PetsFilters from "@/components/Pets-filters/Pets-filters";
    import PetsCatalog from "@/components/Pets-catalog/Pets-catalog";
    import {mapGetters} from "vuex";
    import FilterBlock from "../components/Filter-block/Filter-block";
export default {
        name: "Pets",
  components: {FilterBlock, PetsCatalog, PetsFilters, Swiper, SwiperSlide},
    data:() => ({
        swiperOption: {
            slidesPerView: 3,
            spaceBetween: 20,
            // centeredSlides:true
        },
        width:null,
    }),
    methods: {
        updateWidth() {
            this.width = window.innerWidth;
        },
    },
    created() {
        window.addEventListener('resize', this.updateWidth);
        this.updateWidth();
    },
    computed:{
        ...mapGetters('filtersModule', ['getFilterItems','getFilteredPets']),
        pets() {
            return this.getFilterItems
        },
        actualWidth(){
            return this.width
        }
    }
    }
</script>

<style lang="scss" scoped>
  @import "./src/assets/variables";
  .pets{
    display: grid;
    grid-template-columns: 260px auto;
    grid-column-gap: 40px;
    margin-top: 85px;
    &__container{
      margin-right: 30px;
    }
    &__filters{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px;
    }
    &__footer{
      width: 100%;
      height: 32px;
      background-color: var(--bg-dark);
      position: fixed;
      bottom: 0;
    }
  }
  @media (max-width: 1280px) {
    .pets{
      grid-template-columns: 95px auto;
      grid-column-gap: 20px;

      &__container{
        margin-right: 25px;
      }
      &__filters{
        grid-template-columns: 1fr;
      }
    }
  }
  @media (max-width: 768px) {
    .pets{
      grid-template-columns: auto;
      margin-top: 41px;
      &__container{
        margin-left: 24px;
        margin-right: 24px;
      }
      &__filters{
        grid-template-columns: repeat(auto-fill, 95px);
        margin-bottom: 30px;
        justify-content: space-between;
      }
    }
  }


  @media (max-width: 375px) {
    .pets{
      margin-top: 40px;
      &__filters{
          display: none;
          /*grid-template-columns: repeat(6, 95px);*/
      }
      &__slide-filter{
          width: 95px;
          margin-bottom: 20px;
      }
    }
  }

</style>