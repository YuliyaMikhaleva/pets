<template>
  <nav class="menu">
    <router-link to="/">
      <LogoIcon class="menu__logo"/>
    </router-link>
    <ul class="menu__list">
      <div class="menu__wrp">

        <li class="menu__item" v-for="item of menuLinks" :key="item.path">
          <router-link
              class="menu__link"
              exact-active-class="menu__item-active"
              :to="{path:item.path, params:{id:1}}">
            <component :is="item.meta.icon"/>
          </router-link>
        </li>
      </div>
      <li class="menu__item menu__logout" @click="this.signOut">
        <router-link
            class="menu__link"
            active-class="menu__item-active"
            exact-active-class="menu__item-active"
            to="/signIn"
        >
          <LogoutIcon/>
        </router-link>
      </li>
    </ul>

  </nav>
</template>

<script>
import HomeIcon from "@/../public/images/homeIcon.svg?inline";
import PetsIcon from "@/../public/images/petsIcon.svg?inline";
import BlogIcon from "@/../public/images/blogIcon.svg?inline";
import ChatIcon from "@/../public/images/chatIcon.svg?inline";
import PersonIcon from "@/../public/images/personIcon.svg?inline";
import LogoutIcon from "@/../public/images/logoutIcon.svg?inline";
import LogoIcon from "@/../public/images/logo.svg?inline";
import {mapActions} from "vuex";
export default {
  name: "Menu",
  components: {LogoIcon,HomeIcon, PetsIcon, BlogIcon, ChatIcon, PersonIcon, LogoutIcon},
  computed:{
    menuLinks(){
      return this.$router.options.routes.filter(el => el.meta && el.meta.menu)
    }
  },
  methods:{
    ...mapActions('profileModule',['signOut']),
  }


}
</script>

<style lang="scss" scoped>
@import "Menu.module.scss";
</style>