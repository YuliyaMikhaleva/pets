<template>
  <div class="loader">
      <div class="loader__wrp">
          <Icon class="loader__icon"/>
          <Icon class="loader__icon loader__iconRight"/>
      </div>

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
@import "./src/assets/variables";
  .loader{
    background: #29272E;
    opacity: 80%;
    width: 100%;
    height: 100%;
    z-index: $zIndex4;
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
      left: 50%;
      transform: rotate(30deg);
      opacity: 0%;
      animation-iteration-count: infinite;
      animation-duration: 3.02s;
      animation-name: loaderLeft;
      animation-timing-function: ease-in;
    }
    &__iconRight{
      opacity: 0%;
      bottom: 0%;
      transform: rotate(90deg);
      animation-name: loaderRight;
    }
    &__wrp{
        width: 30%;
        height: 50px;
        transform: rotate(-45deg);
    }
  }

  @keyframes loaderRight {
    0% {
      left: 20%;
      opacity: 0%;
    }
    15% {
      left: 24%;
      opacity: 100%;
    }
    25%{
      left: 24%;
      opacity: 0%;
    }
    40%{
      left: 30%;
      opacity: 100%;
    }
    50%{
      left: 30%;
      opacity: 0%;
    }
    75% {
      left: 36%;
      opacity: 100%;
    }
    85%{
      left: 36%;
      opacity: 0%;
  }

  }

  @keyframes loaderLeft {
    0% {
      left: 20%;
      opacity: 100%;
    }
    15%{
      left: 20%;
      opacity: 0%;
    }
    25%{
      left: 26%;
      opacity: 100%;
    }
    40%{
      left: 26%;
      opacity: 0%;
    }
    50% {
      left: 32%;
      opacity: 100%;
    }
    75%{
      left: 32%;
      opacity: 0%;
    }
  }




</style>