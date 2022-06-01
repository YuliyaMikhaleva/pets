<template>
  <form class="accaunt">
    <h3 class="accaunt__title">Информация</h3>
    <button class="accaunt__button-add">
      <img src="icons/icon-image.svg" alt="add image">
    </button>
    <div class="accaunt__form">
      <input-block :value="getUser.name">Имя</input-block>
      <input-block value="--/--/----" type="dateBirdth">Дата рождения</input-block>
      <input-block>Статус</input-block>
      <div class="accaunt__location">
        <select-block :array="getCountries"/>
        <select-block :array="getCities"/>
      </div>

    </div>
    <h3 class="accaunt__title accaunt__title--second">Безопасность</h3>
    <div class="accaunt__form">
      <input-block :value="getUser.password">Текущий пароль</input-block>
      <input-block>Новый пароль</input-block>
    </div>
    <Button class="button button--save" type="submit">Сохранить</Button>
  </form>

</template>

<script>
import Button from "@/components/Button/Button";
import InputBlock from "@/components/InputBlock/InputBlock";
import {mapActions, mapGetters} from "vuex";
import SelectBlock from "@/components/SelectBlock/SelectBlock";
export default {
  name: "Account-info",
  components:{
    SelectBlock,
    InputBlock,
    Button
  },
  mounted() {
    this.loadCountries;
    this.loadCities;
  },
  computed:{
    ...mapGetters('profileModule',['getUser']),
    ...mapActions('locationsModule',['loadCities', 'loadCountries']),
    ...mapGetters('locationsModule',['getCities', 'getCountries']),
  },
}
</script>

<style scoped lang="scss">
  @import "Accaunt";
</style>