<template>
  <div id="app" class="main">
    <Menu class="main__menu"/>
    <div>
      <Header class="main__header"/>
      <UserData class="main__user-data"></UserData>
      <MessageArticles class="main__message-articles" />
      <Posts class="main__posts" :posts="articles"/>
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

export default {
  name: 'App',
  components: {
    Posts,
    MessageArticles,
    UserData,
    Menu,
    Header
  },
  computed:{
    ...mapGetters('postsModule',['getPosts']),
    articles(){
      return this.getPosts
    }

  }
}
</script>

<style>

</style>
