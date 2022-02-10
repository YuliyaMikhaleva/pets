<template>
  <div class="auth">
    <Logo class="auth__logo"/>
    <h1 class="auth__title">Регистрация</h1>
    <p class="auth__txt">Зарегистрируйтесь сейчас бесплатно и добавьте своего питомца</p>
  </div>
</template>

<script>
import Logo from "@/../public/images/logo.svg?inline";
export default {
  name: "Auth",
  components: {Logo},
}
</script>

<style lang="scss" scoped>
  .auth{
    display: flex;
    flex-direction: column;
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
      color: #EDF2F7;
    }
    &__txt{
      margin: 0 0 20px 0;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 150%;
      color: #D5D5DC;
    }
  }
</style>