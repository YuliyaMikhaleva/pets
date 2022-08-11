<template>
  <div class="finish-form">
    <div>{{getPetsInfo.name}}</div>
    <div>{{getPetsInfo.text}}</div>
    <div>{{getPetsInfo.city}}</div>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: "FinishForm",
  computed:{
    ...mapGetters('profileModule',['getPetsInfo']),
  }
}
</script>

<style scoped lang="scss">
  @import "StartForm";
</style>