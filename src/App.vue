<template>
  <div id="app" class="main">
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

export default {
  name: 'App',
  components: {
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
      this.width = window.innerWidth;
    },
  },
  created() {
    window.addEventListener('resize', this.updateWidth);
    this.updateWidth();
  },
  computed:{
    ...mapGetters('postsModule',['getPosts']),
    ...mapGetters('articlesModule',['getArticles']),
    postsArticles(){
      return this.getPosts
    },
    messagesArticles(){
      return this.getArticles
    },
    actualWidth(){
      return this.width
    }
  }
}
</script>

<style>

</style>
