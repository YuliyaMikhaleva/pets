<template>
  <div class="loader">
<!--    <h1>Загрузка</h1>-->
    <Icon class="loader__icon"/>
    <Icon class="loader__icon loader__iconRight"/>
  </div>
</template>

<script>
import Icon from "@/../public/images/loader.svg?inline";

export default {
  name: "Loader",
  components:{Icon}
}
</script>

<style lang="scss" scoped>
  .loader{
    background: #29272E;
    opacity: 80%;
    width: 100%;
    height: 100%;
    z-index: 99999999999999999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__icon{
      position: absolute;
      bottom: 50%;
      left: 20%;
      transform: rotate(30deg);
      opacity: 0%;
      animation-iteration-count: infinite;
      animation-duration: 3.02s;
      animation-name: loaderLeft;
      //animation-timing-function: ease-in;
    }
    &__iconRight{
      opacity: 0%;
      bottom: 45%;
      transform: rotate(75deg);
      left: 20%;
      animation-name: loaderRight;
    }
  }

  //правая лапка
  @keyframes loaderRight {
    //правая лапка прозрачная
    0% {
      left: 20%;
      opacity: 0%;
    }
    //правая лапка делает ход
    15% {
      left: 22%;
      opacity: 100%;
    }
    //правая лапка прозрачная
    25%{
      left: 22%;
      opacity: 0%;
    }
    //правая лапка делает ход
    40%{
      left: 26%;
      opacity: 100%;
    }
    //правая лапка прозрачная
    50%{
      left: 26%;
      opacity: 0%;
    }
    //правая лапка делает ход
    75% {
      left: 30%;
      opacity: 100%;
    }
    //правая лапка прозрачная
    85%{
      left: 30%;
      opacity: 0%;
  }

  }



  @keyframes loaderLeft {
    //правая лапка делает ход
    0% {
      left: 22%;
      opacity: 100%;
    }
    //правая лапка прозрачная
    15%{
      left: 22%;
      opacity: 0%;
    }
    //правая лапка делает ход
    25%{
      left: 26%;
      opacity: 100%;
    }
    //правая лапка прозрачная
    40%{
      left: 26%;
      opacity: 0%;
    }
    //правая лапка делает ход
    50% {
      left: 30%;
      opacity: 100%;
    }
    //правая лапка прозрачная
    75%{
      left: 30%;
      opacity: 0%;
    }
  }




</style>