<template>
  <form class="pet-form">
    <h3 class="pet-form__title">Давайте узнаем немного о вашем питомце?</h3>
    <div class="pet-form__block">
      <InputBlock class="about-pet__form"
                  v-model="form.name"
                  :value="form.name"
                  v-model.trim="$v.formInfo.name.$model"
                  :isError="$v.formInfo.name.$error"
                  :isValid="!$v.formInfo.name.$invalid && $v.formInfo.name.$dirty"
      >Имя питомца</InputBlock>
      <SwitchBlockImg @change="changeSex"/>
    </div>
    <label for="yourPet" class="pet-form__label-item">
      <textarea id="yourPet" class="pet-form__textarea" placeholder="Опишите вашего питомца" v-model="form.text"/>
    </label>
    <div>
      <p>С какой целью выкладываете питомца?</p>
      <div class="pet-form__radio-items">
        <div class="pet-form__radio-item">
          <input class="pet-form__radio-button" type="radio" id="radio1" name="Цель" checked v-model="form.mission" value="Просто показываю">
          <label for="radio1">Просто показываю</label>
        </div>
        <div class="pet-form__radio-item">
          <input  class="pet-form__radio-button" type="radio" id="radio2" name="Цель" v-model="form.mission" value="Отдаю в добрые руки">
          <label for="radio2">Отдаю в добрые руки</label>
        </div>
        <div class="pet-form__radio-item">
          <input class="pet-form__radio-button" type="radio" id="radio3" name="Цель" v-model="form.mission" value="Торгую микрочелами">
          <label for="radio3">Торгую микрочелами</label>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import InputBlock from "@/components/InputBlock/InputBlock";
import SwitchBlockImg from "@/components/Switch-block-img/Switch-block-img";
import {mapGetters} from "vuex";
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: "PetForm",
  components: {SwitchBlockImg, InputBlock},
  data(){
    return{
      sex:false,
      formInfo:{
        mission: "",
        name:"",
        sex:"M",
        text:""
      }
    }
  },
  validations:{
    formInfo:{
      mission:{
        required,
        minLength: minLength(4),

      },
      name:{
        required,
        minLength: minLength(4),
      },
      sex:{
        required,
        minLength: minLength(4)
      },
      text:{
        minLength: minLength(4)
      },



      }
  },
  watch:{
    sex(){
      if (this.sex === false){
        this.form.sex = "M"
      } else {
        this.form.sex = "W"
      }
    }
  },
  computed:{
    ...mapGetters('profileModule',['getPetsInfo']),
    form(){
      return this.getPetsInfo
    }
  },
  methods:{
    changeSex(){
      this.sex = !this.sex;
    }
  },
  mounted() {
    this.formInfo = this.form
  }
}
</script>

<style scoped lang="scss">
  @import "PetForm";
</style>