<template>
  <div class="input-block">
    <div class="input-block__wrp-input">
      <input class="input-block__input" :type="type" :id="'data'+type" @input="$emit('input', $event.target.value)" v-model="inputValue"/>
      <label  class="input-block__label" :for="'data'+type" :class="{'input-block__label-fixed':inputValue.length}">
        <slot/>
      </label>
      <EyeClose v-if="type==='password'" class="input-block__svg" @click="changeType()"/>
      <EyeOpen v-if="placeholder==='Пароль' && type==='text'" class="input-block__svg input-block__svg-open" @click="changeType()"/>
    </div>


    <p class="input-block__error">{{nameError}}</p>
  </div>
</template>

<script>
  import EyeClose from "@/../public/images/eye-close.svg?inline"
  import EyeOpen from "@/../public/images/eye-open.svg?inline"
export default {
  name: "InputBlock",
  components:{EyeClose, EyeOpen},
  data(){
    return{
      inputValue:""
    }
  },
  props:{
    placeholder:{type:String},
    type:{type:String},
    word:{type:String},
    errors:{
      type:Array,
      required: true,
      default: () => [],
    },
  },
  methods:{
    changeType(){
      this.type = this.type === "password" ? "text" : "password";
    }
  },

  computed:{
    auth(){
      if (this.$route.path=='/signIn'){
        return true
      } else {
        return false
      }
    },
    nameError(){
      if (this.type === "text"){
        return this.errors.find((error) => error === "Заполните имя пользователя")
      } else if (this.type === "email"){
        return this.errors.find((error) => error === "Заполните адрес эл. почты")
      } else {
        return this.errors.find((error) => error === "Заполните пароль")
      }
    }
  }
}
</script>

<style lang="scss" src="./InputBlock.scss" scoped>

</style>