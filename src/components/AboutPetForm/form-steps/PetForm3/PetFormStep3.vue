<template>
  <div class="pet-form-step3" @click="closePopup">
    <h3 class="pet-form-step3__title">Давайте узнаем больше о вашем питомце</h3>
    <div class="pet-form-step3__title-word">Ваш питомец...</div>
    <div class="pet-form-step3__wrp">
      <PetsFilters class="pet-form-step3__filters" :array="pets"/>
      <div>
        <Select class="pet-form-step3__select" :array="arrayKinds">Порода</Select>
        <div class="pet-form-step3__inputs">
          <input-block type="text" :date="true" v-model="formObj.date" >Дата рождения</input-block>
          <input-block type="text" v-model="formObj.mass">Вес, кг</input-block>
          <Select class="pet-form-step3__select pet-form-step3__select--bottom" :array="getCountries" v-model="formObj.country">Страна</Select>
          <Select class="pet-form-step3__select pet-form-step3__select--bottom" :array="getCities" v-model="formObj.city">Город</Select>
        </div>
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
      ],
      formObj:{
        date:"",
        mass:"",
        country:"111",
        city:"",
        kindOfPet:""
      },
    }
  },
  computed:{
    ...mapGetters('locationsModule',['getCities', 'getCountries']),
    ...mapGetters('filtersModule', ['getKindsPets', 'getFilters']),
    pets(){
      return this.getKindsPets
    },
    // kind(){
    //   return this.getFilters[0]
    // }
  },
  watch:{
    getFilters(){
      this.addKind()
    }
  },

  methods:{
    addKind(){
      if (this.getFilters.length){
        this.formObj.kindOfPet = this.getFilters[0].name
      }
    },
    closePopup(e){
      console.log('1', e)
      if (!e.target.classList.contains('select__list') && !e.target.classList.contains('input-block__input')){
        let selectList = document.querySelector('.select__list')
        if (selectList.classList.contains('active')){
          selectList.classList.remove('active');
          selectList.style.display = "none";
        }
      }


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
  },
  mounted() {
    this.addKind();
  }
}
</script>

<style scoped lang="scss">
  @import "PetFormStep3";
</style>