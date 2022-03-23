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

<style lang="scss" scoped>
  .input-block{
    display: flex;
    flex-direction: column;
    color: var(--color-pet-type);

    &::placeholder{
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
    }
    &__label{
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      padding-top: 3px;
      padding-left: 8px;
      position: absolute;
      top: 0;
      left: 0;
      pointer-events: none;
      transition: 0.3s;
    }
    &__label-fixed{
      top: -20px;
      font-size: 10px;
      line-height: 15px;
      transition: 0.3s;
    }
    &__input{
      background: none;
      border: 0;
      border-bottom: 1px solid var(--color-pet-type);
      padding: 8px 0 8px 8px;
      color: var(--color-pet-type);
      width: 100%;
      outline: none;
    }
    &__input:focus  ~.input-block__label{
      top: -20px;
      font-size: 10px;
      line-height: 15px;
      transition: 0.3s;
    }
    &__div{
      height: 17.99px;
    }
    &__error{
      text-align: end;
      font-weight: 400;
      font-style: normal;
      font-size: 8px;
      line-height: 12px;
      margin: 0;
      color: #F16063;
    }
    &__input-error{
      color: #F16063;
      border-bottom: 1px solid #F16063;
    }
    &__label-error{
      color: #F16063;
    }
    &__wrp-input{
      width: 100%;
      position: relative;
    }
    &__svg{
      width: 20px;
      display: block;
      position: absolute;
      top: 45%;
      right: 0;
      height: auto;
      cursor: pointer;
    }
    &__svg-open{
      top: 30%;
    }
    &__svg-path{
      fill: var(--color-pet-type);
    }
  }

</style>