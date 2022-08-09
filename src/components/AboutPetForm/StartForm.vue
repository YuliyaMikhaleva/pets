<template>
  <div class="start-form">
    <img src="images/startform.svg" alt="photo">
    <div class="start-form__title">У вас ещё нет питомцев, скорее добавьте его</div>
    <Button class="button button--save tabs-form-item__button tabs-form-item__button--start" @click="$emit('addPet')">Добавить питомца</Button>
  </div>
</template>

<script>
import Button from "@/components/Button/Button";

export default {
  name: "StartForm",
  components:{Button}
}
</script>

<style scoped lang="scss">
  @import "StartForm";
</style>