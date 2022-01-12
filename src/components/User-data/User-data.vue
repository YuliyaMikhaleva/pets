<template>
  <section class="user-data">
    <article class="user-data__hello article">
      <h1 class="user-data__title">С возвращением, Владимир</h1>
      <p class="user-data__text">Не забудь покормить своего питомца</p>
      <p class="user-data__text">Хорошего дня!</p>
      <img class="user-data__picture" src="images/picture-bg.png" alt="photo">
    </article>
    <article class="article user-data__progress">
      <div class="user-data__block-diagram">
        <span class="user-data__percent">62%</span>
        <svg width="254" height="254" viewBox="0 0 254 254" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle class="user-data__diagram-part" cx="127" cy="127" r="117" stroke="#EDF2F7" stroke-width="20"/>
          <path d="M209.731 209.731C198.867 220.596 185.969 229.214 171.774 235.094C157.579 240.974 142.365 244 127 244C111.635 244 96.4209 240.974 82.2258 235.094C68.0307 229.214 55.1327 220.596 44.2683 209.731" stroke="#F16063" stroke-width="20" stroke-linecap="round"/>
          <path d="M244 127C244 142.365 240.974 157.579 235.094 171.774C229.214 185.969 220.596 198.867 209.731 209.731C198.867 220.596 185.969 229.214 171.774 235.094C157.579 240.974 142.365 244 127 244" stroke="#FFC542" stroke-width="20" stroke-linecap="round"/>
          <path d="M127 10C142.365 10 157.579 13.0263 171.774 18.9061C185.969 24.7859 198.867 33.4041 209.732 44.2685C220.596 55.133 229.214 68.031 235.094 82.2261C240.974 96.4211 244 111.635 244 127" stroke="#66CB9F" stroke-width="20" stroke-linecap="round"/>
        </svg>
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
        <span class="article__time-data">{{time}}</span>
      </article>
      <article class="article article__time">
        <div class="article__wrp">
          <div class="article__clock">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.8333 1.33333H3.16667C2.24619 1.33333 1.5 2.07952 1.5 2.99999V14.6667C1.5 15.5871 2.24619 16.3333 3.16667 16.3333H14.8333C15.7538 16.3333 16.5 15.5871 16.5 14.6667V2.99999C16.5 2.07952 15.7538 1.33333 14.8333 1.33333Z" stroke="#EDF2F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <span>На календаре у нас</span>
        </div>
        <span class="article__time-data">{{date}}</span>
      </article>
    </div>

  </section>
</template>

<script>
export default {
  name: "UserData",
  computed: {
    time(){
      return new Date().toLocaleTimeString().slice(0,-3)
    },
    date(){
      return new Date().toLocaleDateString()
    }
  }
}
</script>

<style scoped lang="scss">
@import "Userdata.module";
</style>