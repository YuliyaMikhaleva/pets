<template>
  <div id="app" class="main">
    <Menu class="main__menu"/>
    <Header class="main__header"/>
    <UserData class="main__userData"></UserData>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Menu from "@/components/Menu/Menu";
import UserData from "@/components/User-data/User-data";

export default {
  name: 'App',
  components: {
    UserData,
    Menu,
    Header
  }
}
</script>

<style>

</style>
