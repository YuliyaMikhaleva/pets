<template>
  <div class="auth-main">
    <Loader v-if="getShowloader"/>
      <router-view  class="router-view" style=""/>
  </div>
</template>

<script>
export default {
  name: "AuthLayout"
}
</script>

<style scoped>

</style>