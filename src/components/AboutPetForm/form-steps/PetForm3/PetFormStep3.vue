<template>
  <div class="pet-form-step3" @click="closePopup">
    <h3 class="pet-form-step3__title">Давайте узнаем больше о вашем питомце</h3>
    <div class="pet-form-step3__title-word">Ваш питомец...</div>
    <div class="pet-form-step3__wrp">
      <PetsFilters class="pet-form-step3__filters"/>
      <div>
        <Select class="pet-form-step3__select" :array="arrayKinds">Порода</Select>
        <input-block type="text" :date="true">Дата рождения</input-block>
        <input-block type="text" :date="true">Вес, кг</input-block>
        <Select class="pet-form-step3__select" :array="getCountries"/>
        <Select class="pet-form-step3__select" :array="getCities"/>
      </div>
    </div>
  </div>

</template>

<script>
import InputBlock from "@/components/InputBlock/InputBlock";
import PetsFilters from "@/components/Pets-filters/Pets-filters";
import Select from "@/components/Select/Select";
import {mapGetters} from "vuex";
export default {
  name: "PetFormStep3",
  components: {Select, PetsFilters, InputBlock},
  data(){
    return{
      arrayKinds:[
        {
          id:0,
          text:'Макрочел'
        },
        {
          id:1,
          text:'Гигачел'
        },
        {
          id:2,
          text:'Микрочел'
        },
        {
          id:3,
          text:'Суперчел'
        },
        {
          id:4,
          text:'Мегачел'
        },
        {
          id:0,
          text:'Макрочел'
        },
        {
          id:1,
          text:'Гигачел'
        },
        {
          id:2,
          text:'Микрочел'
        },
        {
          id:3,
          text:'Суперчел'
        },
        {
          id:4,
          text:'Мегачел'
        },
      ]
    }
  },
  computed:{
    ...mapGetters('locationsModule',['getCities', 'getCountries']),
  },

  methods:{
    closePopup(e){
      console.log(e)
      // document.querySelectorAll('.select__input').forEach(el => {
      //   if (e.target !== el){
      //     let selectLists = document.querySelectorAll('.select__list');
      //     if (selectLists){
      //       selectLists.forEach(el => {
      //         el.style.display = 'none';
      //         el.closest('.select').querySelector('.select__input-arrow').classList?.remove('select__input-arrow--opened')
      //       })
      //     }
      //   }
      // })


    }
  }
}
</script>

<style scoped lang="scss">
  @import "PetFormStep3";
</style>