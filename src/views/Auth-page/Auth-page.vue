<template>
  <div class="auth-page">
    <div>
      <img src="images/auth-photo-1.jpg" alt="photo">
    </div>
    <Auth class="auth-page__text"/>
  </div>
</template>

<script>

import Auth from "@/components/Auth/Auth";
export default {
  name: "Auth-page",
  components: {Auth},
}
</script>

<style lang="scss" scoped>
  .auth-page{
    color: white;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    font-family: Rubik;
    &__text{
      margin-right: 250px;
      margin-top: 218px;
      width: 325px;
      height: 644px;
      border: 1px solid white;
    }
  }
</style>