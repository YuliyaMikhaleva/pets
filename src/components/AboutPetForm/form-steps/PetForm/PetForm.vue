<template>
  <form class="pet-form">
    <h3 class="pet-form__title">Давайте узнаем немного о вашем питомце?</h3>
    <div class="pet-form__block">
      <InputBlock class="about-pet__form"
                  v-model="form.name"
                  :value="$v.formInfo.name.$error !== true && form.name"
                  v-model.trim="$v.formInfo.name.$model"
                  :isError="$v.formInfo.name.$error"
                  :isValid="!$v.formInfo.name.$invalid && $v.formInfo.name.$dirty"
      >Имя питомца</InputBlock>
      <SwitchBlockImg @change="changeSex"/>
      <div v-if="$v.formInfo.name.$error" class="pet-form__error">Поле должно состоять как минимум из 3-х символов</div>
    </div>
    <label for="yourPet"
           class="pet-form__label-item"
    >
      <textarea id="yourPet"
                class="pet-form__textarea"
                :class="{'pet-form__valid': !$v.formInfo.text.$invalid && $v.formInfo.text.$dirty && !$v.formInfo.text.$error, 'pet-form__error': $v.formInfo.text.$error }"
                placeholder="Опишите вашего питомца"
                v-model="form.text"
                v-model.trim="$v.formInfo.text.$model"/>
      <div v-if="$v.formInfo.text.$error" class="pet-form__error">Поле должно состоять как минимум из 4-х символов</div>
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
import {mapActions, mapGetters} from "vuex";
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
        minLength: minLength(3),
      },
      sex:{
        required,
        minLength: minLength(4)
      },
      text:{
        required,
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
    },
  },

  computed:{
    ...mapGetters('profileModule',['getPetsInfo']),


    form(){
      if (this.$v.formInfo.text.$error){
        this.$parent.changeError(true)
      } else if (!this.$v.formInfo.name.$invalid && this.$v.formInfo.name.$dirty) {
        this.$parent.changeError(false)
      } else {
        this.$parent.changeError(null)
      }
      return this.getPetsInfo
    },
  },
  methods:{
    ...mapActions('profileModule',['addErrors']),
    changeSex(){
      this.sex = !this.sex;
    },

  },
  mounted() {
    this.formInfo = this.form;

  }
}
</script>

<style scoped lang="scss">
  @import "PetForm";
</style>