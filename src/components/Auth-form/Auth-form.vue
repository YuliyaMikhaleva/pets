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
    checkForm(e){
      this.errors = [];
      // if(!this.user.name) this.errors.push("Заполните имя пользователя");
      if(!this.user.email) this.errors.push("Заполните адрес эл. почты");
      if(!this.user.password) this.errors.push("Заполните пароль");
      e.preventDefault();
      if (!this.errors.length){
        if (this.$route.path=="/signUp"){
          this.signUp(this.user)
        } else {
          if (this.item(this.user)){
            this.signIn(this.item(this.user))
          } else {
            this.error = "Такой пользователь еще не зарегистрирован, перейдите на страницу регистрации"
          }

        }
      }
    }
  }

}
</script>

<style lang="scss" scoped>

  .page{
    color: white;
    display: flex;
    justify-content: space-between;
    height: 100%;
    //width: 100vw;
    //width: 100%;
    //max-width: 1920px;
    font-family: Rubik;
    //min-width: 1920px;
    align-items: center;
    &__text{
      margin-left: 250px;
      margin-right: 250px;
      //margin-top: 218px;
      width: 325px;
      min-width: 325px;
    }
    &__mobile-line{
      width: 148px;
      height: 5px;
      border-radius: 100px;
      background-color: var(--color-mobile-line);
      margin: 0 auto 8px auto;
      position: fixed;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    &__img-wrp{
      max-width: 855px;
      height: 100%;
      //background-color: white;
      //height: 100vh;
    }
    &__img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .auth-form{
    display: flex;
    flex-direction: column;
    &__error{
      color: var(--color-auth-text);

    }
    &__logo{
      width: 102.4px;
      height: 90.87px;
    }
    &__title{
      margin: 32px auto 10px 0;
      font-style: normal;
      font-weight: 500;
      font-size: 30px;
      line-height: 36px;
      color: var(--color-pet-type);
    }
    &__txt{
      margin: 0 0 20px 0;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 150%;
      color: var(--color-pet-type);
    }
    &__input-block{
      margin-bottom: 20px;
    }
    &__button{
      padding: 13.5px 0 13.5px 0;
      margin-top: 30px;
      margin-bottom: 20px;
      background-color: var(--color-auth-button);
      font-size: 18px;
    }
    &__verification{
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
      font-style: normal;
      text-align: center;
      color: var(--color-pet-type);
      margin: 0;
    }
    &__link{
      font-weight: 700;
      font-size: 18px;
      line-height: 27px;
      font-style: normal;
      text-align: center;
      text-decoration: none;
      color: var(--color-pet-type);
      transition: opacity 0.3s;
      &:hover{
        opacity: 50%;
        transition: opacity 0.3s;
      }
    }
    &__change-password{
      text-align: end;
      color: var(--color-pet-type);
      cursor: pointer;
      transition: opacity 0.3s;
      &:hover{
        opacity: 50%;
        transition: opacity 0.3s;
      }
    }
  }

  @media (max-width: 1280px) {
    .page{
      //min-width: 1280px;
      &__img-wrp{
        max-width: 737px;
      }
      &__text{
        margin-right: 109px;
        margin-left: 109px;
        //margin-top: 73px;
      }
    }
  }

  @media (max-width: 768px) {
    .page{
      //min-width: 768px;
      //display: flex;
      //flex-direction: column;
      //&__text{
      //  margin: 147px auto 0;
      //}
    }
  }

  @media (max-width: 375px) {
    .page{
      //min-width: 375px;
    }
  }
</style>