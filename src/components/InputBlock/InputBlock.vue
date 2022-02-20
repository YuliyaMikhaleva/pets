<template>
  <div class="input-block">
    <label  class="input-block__label" for="data">
      <div :class="{'transparent': auth}">
        <slot/>
      </div>
    </label>
    <div class="input-block__wrp-input">
      <input class="input-block__input" :type="type" id="data" :placeholder="placeholder" @input="$emit('input', $event.target.value)"/>
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
    color: var(--color-auth-text);
    &::placeholder{
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
    }
    &__label{
      font-weight: 400;
      font-size: 10px;
      line-height: 15px;
      padding-top: 3px;
      padding-left: 8px;
    }
    &__input{
      background: none;
      border: 0;
      border-bottom: 1px solid var(--color-auth-text);
      padding: 0;
      padding-top: 8px;
      padding-bottom: 8px;
      padding-left: 8px;
      color: var(--color-auth-text);
      width: 100%;
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
    }
    &__wrp-input{
      width: 100%;
      position: relative;
      /*display: flex;*/
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
  input::placeholder{
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: var(--color-auth-text);
  }

</style>