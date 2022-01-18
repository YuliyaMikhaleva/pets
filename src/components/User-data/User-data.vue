<template>
  <section class="user-data">
    <article class="user-data__hello">
      <h1 class="user-data__title">С возвращением, Владимир</h1>
      <p class="user-data__text">Не забудь покормить своего питомца</p>
      <p class="user-data__text">Хорошего дня!</p>
      <img class="user-data__picture" src="images/poligons.svg" alt="photo">
    </article>
    <article class="user-data__progress">
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
    <TimeDate v-if="width>375" class="user-data__time" text="На часах у нас" :time-date="timeNow" img="images/clock.svg" />
    <TimeDate v-if="width>375" class="user-data__date" text="На календаре у нас" :time-date="dateNow" img="images/calendar.svg"/>
    <TimeDate
        v-if="width<=375"
        class="user-data__time"
        text="На часах у нас"
        :time-date="timeNow"
        img="images/clock.svg"
        text2="На календаре у нас"
        :time-date2="dateNow"
        img2="images/calendar.svg"
    />

  </section>
</template>

<script>
import moment from "moment"
import Chart from "@/components/Chart/Chart";
import TimeDate from "../Time-date/Time-date";
export default {
  name: "UserData",
  components: {TimeDate, Chart},
  data(){
    return{
      timeNow:"",
      dateNow:"",
      width:null
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
    },
    updateWidth() {
      this.width = window.innerWidth;
    },
  },
  created() {
    window.addEventListener('resize', this.updateWidth);
    this.updateWidth();
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