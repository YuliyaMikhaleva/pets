<template>
        <div class="home">
          <UserData class="main__user-data"></UserData>
          <Statistic v-if="actualWidth<=375" class="main__statistic container"/>
          <MessageArticles v-if="actualWidth>1280 || actualWidth<=375" class="main__message-articles" :articles="messagesArticles" />
          <Cards v-if="actualWidth<=375 || actualWidth>768" class="main__cards" :posts="postsArticles"/>
          <div v-if="actualWidth<=375" class="main__line-bottom container"></div>
          <div v-if="actualWidth>375 && actualWidth <=768" class="main__statistic-wrp container">
              <Statistic class="main__statistic-graphic"/>
              <TimeDate
                        class="main__statistic-time"
                        text="На часах у нас"
                        :time-date="timeNow"
                        img="images/clock.svg"
                        text2="На календаре у нас"
                        :time-date2="dateNow"
                        img2="images/calendar.svg"
              />
              <NewPost class="main__statistic-new"/>
          </div>
          <MessageArticles v-if="actualWidth<=1280 && actualWidth>375" class="main__message-articles container" :articles="messagesArticles" />
          <Cards v-if="actualWidth>375 && actualWidth<=768" class="main__cards" :posts="postsArticles"/>

        </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import UserData from "@/components/User-data/User-data";
    import Statistic from "@/components/Statistic/Statistic";
    import MessageArticles from "@/components/Message-articles/Message-articles";
    import Cards from "@/components/Cards/Cards";
    import { Mixin } from "@/assets/Mixin";
    import TimeDate from "../../components/Time-date/Time-date";
    import NewPost from "../../components/New-post/New-post";
    import moment from "moment";
    export default {
        name: "Home",
      components: {NewPost, TimeDate, Cards, MessageArticles, Statistic, UserData},
      mixins:[Mixin],
        data(){
          return{
              timeNow:"",
              dateNow:""
          }
        },
        computed:{
          ...mapGetters('cardsModule',['getCards']),
          ...mapGetters('articlesModule',['getArticles']),
          postsArticles(){
            return this.getCards
          },
          messagesArticles(){
            return this.getArticles
          },
        },
        methods:{
            moment,
            time() {
                let self = this
                this.timeNow = moment().locale('ru').format('LTS');
                setTimeout(self.time, 1000)
            },
            date(){
                let self = this
                this.dateNow = moment().locale('ru').format('DD.MM.YYYY')
                setTimeout(self.date, 1000)
            },
        },
        mounted() {
            this.time();
            this.date();
        }

    }
</script>

<style lang="scss" scoped>

</style>