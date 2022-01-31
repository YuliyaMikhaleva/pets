<template>
  <div id="app" class="main">
    <Loader v-if="getShowloader"/>
    <Menu v-if="actualWidth>768" class="main__menu"/>
    <MobileMenu v-if="actualWidth<=768" class="main__mobile-menu"/>
    <div>
      <Header class="main__header"/>
      <router-view  class="router-view main__router-view"/>
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
    ...mapGetters('showloaderModule',['getShowloader']),
  },
}
</script>

<style>

</style>
