<template>
  <div id="app" class="main">
    <Menu v-if="actualWidth>375" class="main__menu"/>
    <MobileMenu v-if="actualWidth<=375" class="main__mobile-menu"/>
    <div>
      <Header class="main__header"/>
      <UserData class="main__user-data"></UserData>
      <Statistic v-if="actualWidth<=375" class="main__statistic"/>
      <MessageArticles v-if="actualWidth>1280 || actualWidth<=375" class="main__message-articles" :articles="messagesArticles" />
      <Posts class="main__posts" :posts="postsArticles"/>
      <div v-if="actualWidth<=375" class="main__line-bottom"></div>
      <MessageArticles v-if="actualWidth==1280" class="main__message-articles" :articles="messagesArticles" />
    </div>
  </div>
</template>


<script>
  import Header from "./components/Header/Header";
  import Menu from "./components/Menu/Menu";
  import UserData from "./components/User-data/User-data";
  import MessageArticles from "./components/Message-articles/Message-articles";
  import Posts from "./components/Posts/Posts";
  import {mapGetters} from "vuex";
  import MobileMenu from "@/components/Mobile-menu/Mobile-menu";
  import Statistic from "@/components/Statistic/Statistic";

export default {
  name: 'App',
  components: {
    Statistic,
    MobileMenu,
    Posts,
    MessageArticles,
    UserData,
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
