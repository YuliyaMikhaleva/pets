<template>
  <nav class="menu">
    <router-link to="/">
      <Logo class="menu__logo"/>
    </router-link>
    <ul class="menu__list">
      <div class="menu__wrp">
        <li class="menu__item">
          <router-link
              class="menu__link"
              exact-active-class="menu__item-active"
              to="/">
            <HomeIcon/>
          </router-link>
        </li>
        <li class="menu__item">
          <router-link
              class="menu__link"
              active-class="menu__item-active"
              exact-active-class="menu__item-active"
              to="/pets">
            <PetsIcon/>
          </router-link>
        </li>
        <li class="menu__item">
          <router-link
              class="menu__link"
              active-class="menu__item-active"
              exact-active-class="menu__item-active"
              to="/blog">
            <BlogIcon/>
          </router-link>
        </li>
        <li class="menu__item">
          <router-link
              class="menu__link"
              active-class="menu__item-active"
              exact-active-class="menu__item-active"
              to="/chat">
            <ChatIcon/>
          </router-link>
        </li>
        <li class="menu__item">
          <router-link
              class="menu__link"
              active-class="menu__item-active"
              exact-active-class="menu__item-active"
              to="/person-frame">
            <PersonIcon/>
          </router-link>
        </li>
      </div>
      <li class="menu__item menu__logout">
        <router-link
            class="menu__link"
            active-class="menu__item-active"
            exact-active-class="menu__item-active"
            to="/logout">
          <LogoutIcon/>
        </router-link>
      </li>
    </ul>

  </nav>
</template>

<script>
import Logo from "@/components/Logo/Logo";
import HomeIcon from "@/../public/images/homeIcon.svg?inline";
import PetsIcon from "@/../public/images/petsIcon.svg?inline";
import BlogIcon from "@/../public/images/blogIcon.svg?inline";
import ChatIcon from "@/../public/images/chatIcon.svg?inline";
import PersonIcon from "@/../public/images/personIcon.svg?inline";
import LogoutIcon from "@/../public/images/logoutIcon.svg?inline";
export default {
  name: "Menu",
  components: {Logo, PetsIcon, HomeIcon, BlogIcon, ChatIcon, PersonIcon, LogoutIcon},
  // data(){
  //   return{
  //     active: 'home',
  //   }
  // },
  // computed:{
  //   isActive(){
  //     return this.active()
  //   }
  // },
}
</script>

<style lang="scss" scoped>
@import "Menu.module.scss";
</style>