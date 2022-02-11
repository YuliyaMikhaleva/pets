<template>
  <div id="app" class="main">
    <Loader v-if="getShowloader"/>
    <Menu v-if="actualWidth>768" class="main__menu" :class="{'hidden':this.block}"/>
    <MobileMenu v-if="actualWidth<=768 && show" class="main__mobile-menu"/>
    <div>
      <Header class="main__header" :class="{'hidden':this.block}" v-if="$route.matched[0].path!=='/pets/:name'"/>
      <Header v-if="$route.matched[0].path=='/pets/:name'" class="main__header2"/>

      <router-view  class="router-view"/>
    </div>
  </div>
</template>


<script>
  import Header from "./components/Header/Header";
  import Menu from "./components/Menu/Menu";
  import {mapGetters} from "vuex";
  import MobileMenu from "@/components/Mobile-menu/Mobile-menu";
  import Loader from "@/components/Loader/Loader";
  import { Mixin } from "@/assets/Mixin";

  export default {
  name: 'App',
  components: {
    Loader,
    MobileMenu,
    Menu,
    Header
  },
    mixins:[Mixin],
    computed:{
    ...mapGetters('showloaderModule',['getShow loader']),
      block(){
        if (this.$route.path=='/signIn' || this.$route.path=='/signUp'){
          return true
        } else {
          return  false
        }
      },
      show(){
        if (this.$route.path!=='/pets/:name' && this.$route.path !== '/signIn' && this.$route.path !== '/signUp'){
          return true
        } else {
          return false
        }
      }
  },
}
</script>

<style>

</style>
