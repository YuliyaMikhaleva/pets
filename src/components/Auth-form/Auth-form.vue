<template>
  <div class="page">
    <div v-if="actualWidth>768" class="page__img-wrp">
      <img :src="actualImg" alt="photo" class="page__img">
    </div>
    <form class="auth-form page__text" @submit="checkForm">
      <LogoIcon class="auth-form__logo"/>
      <h1 class="auth-form__title">{{$route.name}}</h1>
      <p class="auth-form__txt">Зарегистрируйтесь сейчас бесплатно и добавьте своего питомца</p>

      <InputBlock
              v-if="this.$route.path=='/signUp'"
              class="auth-form__input-block"
              placeholder="Имя пользователя"
              type="text" v-model="user.name"
              :errors="errors">Имя пользователя</InputBlock>

      <InputBlock
              class="auth-form__input-block"
              placeholder="Адрес эл. почты"
              type="email"
              v-model="user.email"
              :errors="errors">Адрес эл. почты</InputBlock>

      <InputBlock
              placeholder="Пароль"
              type="password"
              class="auth-form__input-block"
              v-model="user.password"
              :errors="errors">Повторите пароль</InputBlock>
      <p class="auth-form__error">{{error}}</p>

      <a v-if="this.$route.path=='/signIn'" class="auth-form__change-password">Забыли пароль?</a>
      <Button class="auth-form__button" type="submit">{{nameButton}}</Button>
      <p class="auth-form__verification">{{verification}}</p>
      <router-link :to="pathLink" class="auth-form__link">{{nameLink}}</router-link>
    </form>

    <div v-if="actualWidth<=768" class="page__mobile-line"></div>
  </div>

</template>

<script>
import LogoIcon from "@/../public/images/logo.svg?inline";
import InputBlock from "@/components/InputBlock/InputBlock";
import Button from "@/components/Button/Button";
import { Mixin } from "@/assets/Mixin";
import {mapActions, mapGetters} from "vuex";
export default {
  name: "Auth-form",
  components: {Button, InputBlock, LogoIcon},
  mixins:[Mixin],
  data(){
    return{
      user: {
        name: "",
        email:"",
        password:""
      },
      errors:[],
      error:""
    }
  },
  computed:{
    ...mapGetters('profileModule',['getUserInUsers']),
    actualImg(){
      if (this.$route.path=="/signIn"){
        if (this.actualWidth >1280){
          return "images/auth/sign-in-1920.jpg"
        } else {
            if (localStorage.theme == "dark"){
              return "images/auth/sign-in-1280-dark.jpg"
            } else {
              return "images/auth/sign-in-1280-light.jpg"
            }
        }
      } else {
        if (this.actualWidth >1280){
          return "images/auth/sign-up-1920.jpg"
        } else {
          if (localStorage.theme == "dark"){
            return "images/auth/sign-up-1280-dark.jpg"
          } else {
            return "images/auth/sign-up-1280-light.jpg"
          }
        }
      }
    },
    nameButton(){
      if (this.$route.path=="/signIn"){
        return "Войти"
      } else {
        return "Зарегистрироваться"
      }
    },
    verification(){
      if (this.$route.path=="/signIn"){
        return "У вас еще нет аккаунта?"
      } else {
        return "У вас есть аккаунт?"
      }
    },
    nameLink(){
      if (this.$route.path=="/signIn"){
        return "Зарегистрироваться"
      } else {
        return "Войти"
      }
    },
    pathLink(){
      if (this.$route.path=="/signIn"){
        return "/signUp"
      } else {
        return "/signIn"
      }
    },
    item(){
      return this.getUserInUsers
    }

  },
  methods:{
    ...mapActions('profileModule',['signUp', 'signIn']),
    ...mapActions('showloaderModule',['addShowloader', 'deleteShowloader']),

    checkForm(e){
      this.errors = [];
      if(!this.user.name && this.$route.path=='/signUp'){
        document.querySelector('input[type="text"]').classList.add('input-block__input-error')
        document.querySelector('input[type="text"]').parentElement.querySelector('label').classList.add('input-block__label-error')
        this.errors.push("Заполните имя пользователя");
      }

      if(!this.user.email){
        document.querySelector('input[type="email"]').classList.add('input-block__input-error')
        document.querySelector('input[type="email"]').parentElement.querySelector('label').classList.add('input-block__label-error')

        this.errors.push("Заполните адрес эл. почты");
      }
      if(!this.user.password){
        document.querySelector('input[type="password"]').classList.add('input-block__input-error')
        document.querySelector('input[type="password"]').parentElement.querySelector('label').classList.add('input-block__label-error')

        this.errors.push("Заполните пароль");
      }
      e.preventDefault();
      if (!this.errors.length){
        if (this.$route.path=="/signUp"){
          this.addShowloader();
          setTimeout(() => {
            this.signUp(this.user)
            this.deleteShowloader();
          }, 1000)

        } else {
          if (this.item(this.user)){
            this.addShowloader();
            setTimeout(() => {
              this.signIn(this.item(this.user))
              this.deleteShowloader();
            }, 1000)

          } else {
            this.error = "Такой пользователь еще не зарегистрирован, перейдите на страницу регистрации"
          }

        }
      }
    }
  }

}
</script>

<style lang="scss" src="./Auth-form.module.scss" scoped>

</style>