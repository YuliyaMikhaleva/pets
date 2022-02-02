<template>
  <div class="header">
    <h1 class="header__title">
      <RouterLink to="/pets" v-if="$route.meta.namePage =='Pets/name'" class="header__arrow">
        <PetsArrow/>
      </RouterLink>
      {{ $route.name + ($route.params.name ? $route.params.name : "") }}</h1>
    <ThemeCheckbox class="header__checkbox"/>
    <div class="header__buttons">
      <button class="header__button header__middle-btn">
        <Notice/>
        <div class="header__notice-counter"></div>
      </button>
      <Avatar name="Jack Daniels" bgColor="#4C6FFF" class="header__button"/>
    </div>

  </div>
</template>
<script>
import Notice from "@/../public/images/notice.svg?inline";
import ThemeCheckbox from "@/components/Theme-checkbox/Theme-checkbox";
import Avatar from "@/components/Avatar/Avatar";
import PetsArrow from "@/../public/images/pets-arrow.svg?inline";
export default {
  name: 'Header',
  components: {Avatar, ThemeCheckbox, Notice, PetsArrow},
}
</script>

<style lang="scss">
  @import "Header.module";
</style>
