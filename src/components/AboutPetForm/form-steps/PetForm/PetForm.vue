<template>
  <form class="pet-form">
    <h3 class="pet-form__title">Давайте узнаем немного о вашем питомце?</h3>
    <div class="pet-form__block">
      <InputBlock class="about-pet__form">Имя питомца</InputBlock>
    </div>
    <label for="yourPet" class="pet-form__label-item">
      <textarea id="yourPet" class="pet-form__textarea" placeholder="Опишите вашего питомца"/>
    </label>
    <div>
      <p>С какой целью выкладываете питомца?</p>
      <div class="pet-form__radio-items">
        <div class="pet-form__radio-item">
          <input class="pet-form__radio-button" type="radio" id="radio1" name="Цель" checked>
          <label for="radio1">Просто показываю</label>
        </div>
        <div class="pet-form__radio-item">
          <input  class="pet-form__radio-button" type="radio" id="radio2" name="Цель">
          <label for="radio2">Отдаю в добрые руки</label>
        </div>
        <div class="pet-form__radio-item">
          <input class="pet-form__radio-button" type="radio" id="radio3" name="Цель">
          <label for="radio3">Торгую микрочелами</label>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import InputBlock from "@/components/InputBlock/InputBlock";
export default {
  name: "PetForm",
  components: {InputBlock}
}
</script>

<style scoped lang="scss">
  @import "PetForm";
</style>