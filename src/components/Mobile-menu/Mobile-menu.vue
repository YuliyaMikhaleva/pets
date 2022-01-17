<template>
    <nav class="mobile-menu">
      <div class="mobile-menu__icon" @click="isActive=!isActive" :class="{'mobile-menu__active-icon': isActive}">
        <div class="mobile-menu__wrp" :class="{'open':isActive}">
          <span class="mobile-menu__line" :class="{'top':isActive}"></span>
          <span class="mobile-menu__line" :class="{'middle':isActive}"></span>
          <span class="mobile-menu__line" :class="{'bottom':isActive}"></span>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: "Mobile-menu",
  data(){
    return {
      isActive: false,
    }
  },

}
</script>

<style lang="scss" scoped>
  .mobile-menu{
    &__icon{
      width: 32px;
      height: 32px;
      border-radius: 7px;
      background-color: #4C6FFF;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 20px;
      left: 30px;
      //transition: width 0.3s, height 0.3s, top 0.3s, left 0.3s, border-radius 0.3s;
      transition: all 0.3s;
      /*&:active{*/
      /*    .mobile-menu__icon::before{*/
      /*        top: 0;*/
      /*        left: 0;*/
      /*    }*/
      /*}*/
      &::before{
        display: block;
        /*background-color: red;*/
        background-color: #4C6FFF;
        content: "";
        width: 32px;
        height: 32px;
        //width: 32px;
        //height: 32px;
        position: fixed;
        top: 20px;
        left: 30px;
        transition: all 0.3s;
        z-index: -1;
        border-radius: 7px;

      }
    }
    &__active-icon{
      //width: 100vw;
      //height: 100vh;
      //top: 0;
      //left: 0;
      //border-radius: 0;
      ////transition: width 0.3s, height 0.3s, top 0.3s, left 0.3s, border-radius 0.3s;
      transition: all 0.3s;
      &::before{
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
          border-radius: 0;
      }
    }
    &__line{
      display: block;
      width: 16px;
      height: 2px;
      background-color: white;
      border-radius: 1px;
      transform-origin: 4px 0px;
      transition: all 0.3s;

      &:nth-child(2){
        margin: 4px 0 4px;
      }
    }
    &__line.top{
        transform: translate(0, 9px) rotate(-45deg);
        transition: all 0.3s;
    }
    &__line.middle{
        transform-origin: 0% 100%;
        opacity: 0;
        transition: all 0.3s;
    }
    &__line.bottom{
        transform: translate(2px, -8px) rotate(45deg);
        transition: all 0.3s;
    }
    &__wrp.open{
      position: absolute;
      transition: all 0.3s;
    }

  }

</style>