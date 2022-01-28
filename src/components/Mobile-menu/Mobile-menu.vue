<template>
    <nav class="mobile-menu">
      <div class="mobile-menu__icon" @click="isActive=!isActive" :class="{'mobile-menu__active-icon': isActive}">
        <div class="mobile-menu__wrp" :class="{'open':isActive}">
          <span class="mobile-menu__line" :class="{'top':isActive}"></span>
          <span class="mobile-menu__line" :class="{'middle':isActive}"></span>
          <span class="mobile-menu__line" :class="{'bottom':isActive}"></span>
        </div>
      </div>
      <ul v-if="isActive == true" class="mobile-menu__list">
        <div class="mobile-menu__list-wrp">
          <li class="mobile-menu__item">
            <router-link to="/" class="mobile-menu__link-svg" exact-active-class="mobile-menu__item-active">
              <HomeIcon/>
              <span class="mobile-menu__link">Home</span>
            </router-link>
          </li>
          <li class="mobile-menu__item">
            <router-link to="/pets" class="mobile-menu__link-svg" exact-active-class="mobile-menu__item-active">
              <PetsIcon/>
              <span class="mobile-menu__link">Pets</span>
            </router-link>
          </li>
          <li class="mobile-menu__item">
            <router-link to="/blog" class="mobile-menu__link-svg" href="#" exact-active-class="mobile-menu__item-active">
              <blogIcon/>
              <span class="mobile-menu__link">Blog</span>
            </router-link>
          </li>
          <li class="mobile-menu__item">
            <router-link to="/chat" class="mobile-menu__link-svg" href="#" exact-active-class="mobile-menu__item-active">
              <ChatIcon/>
              <span class="mobile-menu__link">Chat</span>
            </router-link>
          </li>
          <li class="mobile-menu__item">
            <router-link to="/person-frame" class="mobile-menu__link-svg" href="#" exact-active-class="mobile-menu__item-active">
              <PersonIcon/>
              <span class="mobile-menu__link">Profile</span>
            </router-link>
          </li>
        </div>
        <li class="mobile-menu__item">
          <router-link to="/logout" class="mobile-menu__link-svg" href="#" exact-active-class="mobile-menu__item-active">
            <LogoutIcon/>
            <span class="mobile-menu__link">Logout</span>
          </router-link>
        </li>
      </ul>
      <div v-if="isActive == true" class="mobile-menu__line-bottom"></div>
    </nav>
</template>

<script>
import HomeIcon from "@/../public/images/homeIcon.svg?inline";
import PetsIcon from "@/../public/images/petsIcon.svg?inline";
import BlogIcon from "@/../public/images/blogIcon.svg?inline";
import ChatIcon from "@/../public/images/chatIcon.svg?inline";
import PersonIcon from "@/../public/images/personIcon.svg?inline";
import LogoutIcon from "@/../public/images/logoutIcon.svg?inline";

export default {
  name: "Mobile-menu",
  components:{HomeIcon, PetsIcon, BlogIcon, ChatIcon, PersonIcon, LogoutIcon},
  data(){
    return {
      isActive: false,
    }
  },


}
</script>

<style lang="scss" scoped>
@import "./src/assets/variables";
  .mobile-menu{
    &__icon{
      width: 46px;
      height: 46px;
      border-radius: 7px;
      background-color: #4C6FFF;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 20px;
      left: 30px;
      transition: all 0.3s;
      cursor: pointer;
      &::before{
        display: block;
        background-color: transparent;
        content: "";
        width: 32px;
        height: 32px;
        position: fixed;
        top: 20px;
        left: 30px;
        transition: all 0.3s;
        z-index: -1;
        border-radius: 7px;

      }
    }
    &__active-icon{
      transition: all 0.3s;
      &::before{
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 0;
        background-color: #4C6FFF;
        z-index: $zIndex2;
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
      z-index:$zIndex3;
      position: absolute;
      transition: all 0.3s;
    }
    &__list{
      position: absolute;
      top: 111px;
      left: 31.82px;
      z-index:$zIndex3;
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 598px;
    }
    &__item{
      margin-bottom: 40px;
      font-family: Rubik;
      font-weight: 700;
      font-style: normal;
      line-height: 18.96px;
      letter-spacing: -0.005em;
      display: flex;
      position: relative;
      cursor: pointer;
    }
    &__item-active{
      margin-left: 21px;
    }

    &__link{
      color: #FFFFFF;
      text-decoration: none;
      transition: color 0.3s;
      margin-left: 12px;
      line-height: 24px;
    }
    &__link-svg{
      display: flex;
      text-decoration: none;
    }
    &__svg-path{
      transition: fill 0.3s;
    }
    &__svg-stroke{
      transition: stroke 0.3s;
    }
    &__line-bottom{
      width: 50%;
      height: 5px;
      background-color: #F6FBFD;
      border-radius: 100px;
      margin: 0 25%;
      position: absolute;
      bottom: 10px;
      left: 0;
      z-index: $zIndex3
    }
  }

@media (max-width: 375px) {
  .mobile-menu {
    &__icon {
      width: 32px;
      height: 32px;
    }
  }
}
</style>