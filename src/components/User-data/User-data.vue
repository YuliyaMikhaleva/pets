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
        <img src="images/diagram.png" alt="diagram">
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