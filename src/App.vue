<template>
  <div id="app" class="main">
    <Loader v-if="getShowloader"/>
    <Menu v-if="actualWidth>768" class="main__menu"/>
    <MobileMenu v-if="actualWidth<=768" class="main__mobile-menu"/>
    <div>
      <Header class="main__header container"/>
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

export default {
  name: 'App',
  components: {
    Loader,
    MobileMenu,
    Menu,
    Header
  },
  data(){
    return {
      width: null
    };
  },
  methods: {
    updateWidth() {
      this.width = document.body.clientWidth;
    },
  },
  created() {
    window.addEventListener('resize', this.updateWidth);
    this.updateWidth();
  },
  computed:{
    ...mapGetters('showloaderModule',['getShowloader']),
    actualWidth(){
      return this.width
    }
  }
}
</script>

<style>

</style>
