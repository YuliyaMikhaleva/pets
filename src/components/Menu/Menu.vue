<template>
  <nav class="menu">
    <router-link to="/">
      <Logo class="menu__logo"/>
    </router-link>
    <ul class="menu__list">
      <div class="menu__wrp">
        <li class="menu__item" @click="active='home'" :class="{'menu__item-active':active==='home'}">
          <router-link to="/" class="menu__link">
            <HomeIcon/>
          </router-link>
        </li>
        <li class="menu__item" @click="active='pets'" :class="{'menu__item-active':active=='pets'}">
          <router-link
              class="menu__link"
              active-class="menu__item-active"
              exact-active-class="menu__item-active"
              to="/pets">
            <PetsIcon/>
          </router-link>
        </li>
        <li class="menu__item" @click="active='blog'" :class="{'menu__item-active':active=='blog'}">
          <router-link to="/blog" class="menu__link">
            <BlogIcon/>
          </router-link>
        </li>
        <li class="menu__item" @click="active='chat'" :class="{'menu__item-active':active=='chat'}">
          <router-link to="/chat" class="menu__link">
            <ChatIcon/>
          </router-link>
        </li>
        <li class="menu__item" @click="active='person-frame'" :class="{'menu__item-active':active=='person-frame'}">
          <router-link to="/person-frame" class="menu__link">
            <PersonIcon/>
          </router-link>
        </li>
      </div>
      <li class="menu__item" @click="active='logout'" :class="{'menu__item-active':active=='logout'}">
        <router-link to="/logout" class="menu__link">
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
  data(){
    return{
      active: 'home',
    }
  },
  computed:{
    isActive(){
      return this.active()
    }
  },
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style lang="scss" scoped>
@import "Menu.module.scss";
</style>