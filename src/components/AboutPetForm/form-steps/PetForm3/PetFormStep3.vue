<template>
  <div class="pet-form-step3" @click="closePopup">
    <h3 class="pet-form-step3__title">Давайте узнаем больше о вашем питомце</h3>
    <div class="pet-form-step3__title-word">Ваш питомец...</div>
    <div class="pet-form-step3__wrp">
      <PetsFilters class="pet-form-step3__filters" :array="pets" :quantity="1"/>
      <div>
        <Select class="pet-form-step3__select" :array="arrayKinds" v-model="formObj.kindOfPet">Порода</Select>
        <div class="pet-form-step3__inputs">
          <input-block type="text" :date="true" v-model="formObj.date" >Дата рождения</input-block>
          <input-block type="text" v-model="formObj.weight">Вес, кг</input-block>
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
import {mapActions, mapGetters} from "vuex";
import moment from "moment";
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
        weight:"",
        country:"",
        city:"",
        kindOfPet:""
      },
      ageNow: null
    }
  },
  computed:{
    ...mapGetters('locationsModule',['getCities', 'getCountries']),
    ...mapGetters('filtersModule', ['getKindsPets', 'getFilters']),
    ...mapGetters('profileModule',['getPetsInfo']),

    pets(){
      return this.getKindsPets
    },
    objectValues(){
      return Object.values(this.formObj)
    },
    formatAge(){
      return moment(this.formObj.date).format('YYYY-DD-MM')
    },
    age(){
      return moment.duration(moment().diff(this.formatAge)).locale('ru').humanize();
    },


  },
  watch:{
    getFilters(){
      this.addKind()
    },
    objectValues(){
      let info = this.getPetsInfo;
      info.date = this.age;
      info.weight = this.formObj.weight;
      info.country = this.formObj.country;
      info.city = this.formObj.city;
      info.kindOfPet = this.formObj.kindOfPet
      if (info){
        this.changePetsInfo(info)

      }
    }
  },

  methods:{
    ...mapActions('profileModule',['changePetsInfo']),

    addKind(){
      if (this.getFilters.length){
        this.formObj.kindOfPet = this.getFilters[0].name
      }
    },
    closePopup(e){
      if (!e.target.classList.contains('select__list') && !e.target.classList.contains('input-block__input')){
        let selectLists = document.querySelectorAll('.select__list');
        selectLists.forEach(list => {
          let selectArrow = list.closest('.pet-form-step3__select').querySelector('.select__input-arrow')
          if (list.classList.contains('active')){
            list.classList.remove('active');
            list.style.display = "none";
            selectArrow.classList.remove('select__input-arrow--opened')
          }
        })
      }
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