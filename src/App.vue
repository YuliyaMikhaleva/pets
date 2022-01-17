<template>
  <div id="app" class="main">
    <Menu class="main__menu"/>
    <MobileMenu class="main__mobile-menu"/>
    <div>
      <Header class="main__header"/>
      <UserData class="main__user-data"></UserData>
      <MessageArticles class="main__message-articles" :articles="messagesArticles" />
      <Posts class="main__posts" :posts="postsArticles"/>
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

export default {
  name: 'App',
  components: {
    MobileMenu,
    Posts,
    MessageArticles,
    UserData,
    Menu,
    Header
  },
  computed:{
    ...mapGetters('postsModule',['getPosts']),
    ...mapGetters('articlesModule',['getArticles']),
    postsArticles(){
      return this.getPosts
    },
    messagesArticles(){
      return this.getArticles
    }

  }
}
</script>

<style>

</style>
