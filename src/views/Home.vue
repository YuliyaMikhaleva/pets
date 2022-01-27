<template>
        <div class="home">
          <UserData class="main__user-data"></UserData>
          <Statistic v-if="actualWidth<=375" class="main__statistic container"/>
          <MessageArticles v-if="actualWidth>1280 || actualWidth<=375" class="main__message-articles" :articles="messagesArticles" />
          <Posts class="main__posts" :posts="postsArticles"/>
          <div v-if="actualWidth<=375" class="main__line-bottom container"></div>
          <MessageArticles v-if="actualWidth<=1280 && actualWidth>375" class="main__message-articles container" :articles="messagesArticles" />

        </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import UserData from "@/components/User-data/User-data";
    import Statistic from "@/components/Statistic/Statistic";
    import MessageArticles from "@/components/Message-articles/Message-articles";
    import Posts from "@/components/Posts/Posts";

    export default {
        name: "Home",
      components: {Posts, MessageArticles, Statistic, UserData},
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

<style scoped>

</style>