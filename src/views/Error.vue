<template>
        <div class="error">
          <img class="error__img" src="images/error-img.svg" alt="error">
          <h1 class="error__title">Ugh I Just Break It !</h1>
          <p class="error__text">Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow </p>
        </div>
</template>

<script>
    export default {
        name: "Error",
    }
</script>

<style lang="scss" scoped>
  @import "./src/assets/variables";
  .error{
    margin-top: 117px;
    &__img{
      width: 100%;
      max-width: 517px;
      display: block;
      margin: 0 auto;
    }
    &__title{
      color: var(--color-text);
      text-align: center;
      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      line-height: 57px;
      margin: 80px 0 33px 0;
    }
    &__text{
      text-align: center;
      color: var(--color-text);
      max-width: 634px;
      margin: 0 auto;
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 29px;
    }
  }
</style>