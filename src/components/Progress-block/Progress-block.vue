<template>
  <article class="progress-block">
    <div class="progress-block__diagram">
      <Chart/>
    </div>
    <div class="progress-block__text">
      <h2 class="progress-block__title">Ежедневный прогресс</h2>
      <ul class="progress-block__list">
        <li class="progress-block__item">Прогулка в парке</li>
        <li class="progress-block__item">Обед</li>
        <li class="progress-block__item">Перекус 1/2</li>
        <li class="progress-block__item">Игры</li>
      </ul>
    </div>
  </article>
</template>

<script>
import Chart from "@/components/Chart/Chart";
export default {
  name: "Progress-block",
  components: {Chart}
}
</script>

<style lang="scss" scoped>
  @import "Progress.module";
</style>