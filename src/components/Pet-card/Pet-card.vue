<template>
  <div class="pet-card">
    <div class="pet-card__slider"></div>
    <div class="pet-card__description">
      <h1 class="pet-card__title">Bob,
        <Gps/>
        <span class="pet-card__country">Германия</span></h1>
      <span class="pet-card__kind">Британский короткошорстный</span><span class="pet-card__type">Кот</span>
      <div class="pet-card__data">
        <span class="pet-card__likes">593 Лайка</span>
        <span class="pet-card__price">5000 P</span>
      </div>
      <div class="pet-card__params">
        <span class="pet-card__param">Возраст</span>
        <span class="pet-card__param">Вес</span>
        <span class="pet-card__param">Пол</span>
        <span class="pet-card__param">2 года</span>
        <span class="pet-card__param">2 кг</span>
        <span class="pet-card__param">Мужской</span>
      </div>
      <div class="pet-card__txt">
        <h3 class="pet-card__txt-title">Описание</h3>
        <p class="pet-card__txt-paragraph">Кот Локи больше не просит есть. Он просто сидит напротив и смотрит на меня так, будто ждет, что я подам ему еду. Как-то ночью я проснулся от того, что почувствовал, что рядом кто-то есть. Я повернулся, чтобы увидеть, кто это, но там никого не было. Мне было страшно.</p>
      </div>
      <button class="pet-card__button">Купить - 5000 Р</button>


    </div>
  </div>
</template>

<script>
import Gps from "@/../public/images/gpsIcon.svg?inline";
export default {
  name: "Pet-card",
  components:{Gps}
}
</script>

<style lang="scss" scoped>
  @import "Pet-card.module";
</style>