<template>
  <div class="auth-main">
    <Header style="display: none"/>

      <router-view  class="router-view" style=""/>
  </div>
</template>

<script>
  import Header from "@/components/Header/Header";


export default {
  name: "AuthLayout",
  components:{Header}

}
</script>

<style scoped>

</style>