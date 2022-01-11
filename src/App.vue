<template>
  <div id="app" class="main">
    <Menu class="main__menu"/>
    <Header class="main__header"/>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Menu from "@/components/Menu/Menu";

export default {
  name: 'App',
  components: {
    Menu,
    Header
  }
}
</script>

<style>

</style>
