<template>
  <section class="user-data">
    <article class="user-data__hello article">
      <h1 class="user-data__title">С возвращением, Владимир</h1>
      <p class="user-data__text">Не забудь покормить своего питомца</p>
      <p class="user-data__text">Хорошего дня!</p>
      <img class="user-data__picture" src="images/poligons.svg" alt="photo">
    </article>
    <article class="article user-data__progress">
      <div class="user-data__block-diagram">

        <Chart/>

      </div>
      <div class="user-data__diagram-text">
        <h2 class="user-data__diagram-title">Ежедневный прогресс</h2>
        <ul class="user-data__diagram-list">
          <li class="user-data__diagram-item">Прогулка в парке</li>
          <li class="user-data__diagram-item">Обед</li>
          <li class="user-data__diagram-item">Перекус 1/2</li>
          <li class="user-data__diagram-item">Игры</li>
        </ul>

      </div>
    </article>
    <div class="user-data__articles">
      <article class="article article__time">
        <div class="article__wrp">
          <div class="article__clock">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#EDF2F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 6V12L16 14" stroke="#EDF2F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <span>На часах у нас</span>
        </div>
        <span class="article__time-data">{{timeNow}}</span>
      </article>
      <article class="article article__time">
        <div class="article__wrp">
          <div class="article__clock">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.8333 3.33333H4.16667C3.24619 3.33333 2.5 4.07952 2.5 4.99999V16.6667C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6667V4.99999C17.5 4.07952 16.7538 3.33333 15.8333 3.33333Z" stroke="#EDF2F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.3334 1.66667V5.00001" stroke="#EDF2F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.66663 1.66667V5.00001" stroke="#EDF2F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2.5 8.33333H17.5" stroke="#EDF2F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <span>На календаре у нас</span>
        </div>
        <span class="article__time-data">{{dateNow}}</span>
      </article>
    </div>

  </section>
</template>

<script>
import moment from "moment"
import Chart from "@/components/Chart/Chart";
export default {
  name: "UserData",
  components: {Chart},
  data(){
    return{
      timeNow:"",
      dateNow:""
    }
  },
  methods:{
    moment,
    time() {
      let self = this
      this.timeNow = moment().lang('ru').format('LTS');
      setTimeout(self.time, 1000)
    },
    date(){
      let self = this
      this.dateNow = moment().locale('ru').format('DD.MM.YYYY')
      setTimeout(self.date, 1000)
    }
  },
  mounted: function() {
    this.time();
    this.date();
  },
}
</script>

<style scoped lang="scss">
@import "Userdata.module";
</style>