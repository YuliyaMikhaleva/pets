<template>
        <div class="home">
          <UserData class="main__user-data"></UserData>
          <Statistic v-if="actualWidth<=375" class="main__statistic container"/>
          <MessageArticles v-if="actualWidth>1280 || actualWidth<=375" class="main__message-articles" :articles="messagesArticles" />
          <Cards class="main__cards" :posts="postsArticles"/>
          <div v-if="actualWidth<=375" class="main__line-bottom container"></div>
          <MessageArticles v-if="actualWidth<=1280 && actualWidth>375" class="main__message-articles container" :articles="messagesArticles" />
        </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import UserData from "@/components/User-data/User-data";
    import Statistic from "@/components/Statistic/Statistic";
    import MessageArticles from "@/components/Message-articles/Message-articles";
    import Cards from "@/components/Cards/Cards";
    import { Mixin } from "@/assets/Mixin";
    export default {
        name: "Home",
      components: {Cards, MessageArticles, Statistic, UserData},
      mixins:[Mixin],
        computed:{
          ...mapGetters('cardsModule',['getCards']),
          ...mapGetters('articlesModule',['getArticles']),
          postsArticles(){
            return this.getCards
          },
          messagesArticles(){
            return this.getArticles
          },
        }

    }
</script>

<style lang="scss" scoped>
  .home{
    margin-top: 156px;
  }
</style>