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
  </section>
</template>

<script>
export default {
  name: "UserData"
}
</script>

<style scoped lang="scss">
@import "Userdata.module";
</style>