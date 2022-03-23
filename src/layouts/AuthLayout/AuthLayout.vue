<template>
  <div class="auth-main">
    <Loader v-if="getShowloader"/>
      <router-view  class="router-view" style=""/>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "AuthLayout",
  computed: {
    ...mapGetters('showloaderModule', ['getShowloader']),
  }
}
</script>

<style scoped>

</style>