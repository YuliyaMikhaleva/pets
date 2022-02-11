<template>
  <button class="button" :type="type">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "Button",
  props:{
    type:{type:String}
  },
}
</script>

<style lang="scss" scoped>
  @import "Button.module";
</style>