<template>
  <div class="auth-main">
    <Loader v-if="getShowloader"/>
    <Header style="display: none"/>

      <router-view  class="router-view" style=""/>
  </div>
</template>

<script>
  import Header from "@/components/Header/Header";
  import Loader from "@/components/Loader/Loader";
  import {mapGetters} from "vuex";


export default {
  name: "AuthLayout",
  components:{Header, Loader},
  computed:{
    ...mapGetters('showloaderModule',['getShowloader']),

  }

}
</script>

<style scoped>

</style>