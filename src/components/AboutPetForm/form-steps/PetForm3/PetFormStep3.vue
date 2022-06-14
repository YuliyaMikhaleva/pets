<template>
  <div>
    <div>Давайте узнаем больше о вашем питомце</div>
    <div>Ваш питомец...</div>
    <div class="pet-form-step3">
      <PetsFilters class="pet-form-step3__filters"/>
    </div>
  </div>

</template>

<script>
import PetsFilters from "@/components/Pets-filters/Pets-filters";
export default {
  name: "PetFormStep3",
  components: {PetsFilters}
}
</script>

<style scoped lang="scss">
  @import "PetFormStep3";
</style>