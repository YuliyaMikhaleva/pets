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
          <li class="mobile-menu__item" v-for="item of menuLinks" :key="item.path">
            <router-link
                :to="item.path"
                class="mobile-menu__link-svg"
                exact-active-class="mobile-menu__item-active">
              <component :is="item.meta.icon"/>
              <span class="mobile-menu__link">{{item.name}}</span>
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
  computed:{
    menuLinks(){
      return this.$router.options.routes.filter(el => el.meta && el.meta.menu)
    }
  }


}
</script>

<style lang="scss" scoped>
@import "Mobile-menu.module";
</style>