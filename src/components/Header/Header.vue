<template>
  <div class="header">
    <h1 class="header__title">{{ $route.name }}</h1>
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
export default {
  name: 'Header',
  components: {Avatar, ThemeCheckbox, Notice},
}
</script>

<style lang="scss">
  @import "Header.module";
</style>
