<template>
  <nav class="menu">
    <a href="/">
      <Logo class="menu__logo"/>
    </a>
    <ul class="menu__list">
      <div class="menu__wrp">
        <li class="menu__item">
          <a href="#">
            <img src="images/homeIcon.svg" alt="home">
          </a>
        </li>
        <li class="menu__item">
          <a href="#">
            <img src="images/petsIcon.svg" alt="pets">
          </a>
        </li>
        <li class="menu__item">
          <a href="#">
            <img src="images/blogIcon.svg" alt="blog">
          </a>
        </li>
        <li class="menu__item">
          <a href="#">
            <img src="images/chatIcon.svg" alt="chat">
          </a>
        </li>
        <li class="menu__item">
          <a href="#">
            <img src="images/personIcon.svg" alt="person">
          </a>
        </li>
      </div>
      <li class="menu__item">
        <a href="#">
          <img src="images/logoutIcon.svg" alt="logout">
        </a>
      </li>
    </ul>

  </nav>
</template>

<script>
import Logo from "@/components/Logo/Logo";
export default {
  name: "Menu",
  components: {Logo}
}
</script>

<style lang="scss" scoped>
@import "Menu.module.scss";
</style>