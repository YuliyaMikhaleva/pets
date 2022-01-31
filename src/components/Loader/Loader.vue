<template>
  <div class="loader">
      <div class="loader__wrp">
          <Icon class="loader__icon loader__iconLeft"/>
          <Icon class="loader__icon loader__iconRight"/>
      </div>
  </div>
</template>

<script>
import Icon from "@/../public/images/loader.svg?inline";

export default {
  name: "Loader",
  components:{Icon},
  created() {
    document.body.classList.add('block-scroll')
  },
  beforeDestroy() {
    document.body.classList.remove('block-scroll')
  }
}
</script>

<style lang="scss" scoped>
@import "Loader.module";
</style>