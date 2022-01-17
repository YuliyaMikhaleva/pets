<template>
    <nav class="mobile-menu">
      <div class="mobile-menu__icon" @click="isActive=!isActive" :class="{'mobile-menu__active-icon': isActive}">
        <div class="mobile-menu__wrp" :class="{'open':isActive}">
          <span class="mobile-menu__line"></span>
          <span class="mobile-menu__line"></span>
          <span class="mobile-menu__line"></span>
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
      &::before{
        display: block;
        background-color: #4C6FFF;
        content: "";
        width: 0;
        height: 0;
        //width: 32px;
        //height: 32px;
        position: fixed;
        top: 0;
        left: 0;
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
      }
    }
    &__line{
      display: block;
      width: 16px;
      height: 2px;
      background-color: white;
      border-radius: 1px;
      &:nth-child(2){
        margin: 4px 0 4px;
      }
    }
    &__wrp.open{
      position: absolute;
      top: 10px;
      left: 10px;
      transition: all 0.3s;
    }

  }

</style>