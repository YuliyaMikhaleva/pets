<template>
  <div id="app">
    <component :is="layout"/>
  </div>
</template>


<script>
  import MainLayout from "@/layouts/MainLayout/MainLayout";
  import AuthLayout from "@/layouts/AuthLayout/AuthLayout";

  export default {
  name: 'App',
  components: {
    MainLayout,
    AuthLayout
  },
    computed:{
      layout(){
        return this.$route.meta.layout || "MainLayout"
      }
  },
}
</script>

<style>

</style>
