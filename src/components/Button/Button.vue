<template>
  <button class="button">{{ title }}</button>
</template>

<script>
export default {
  name: "Button",
  props:{
    title:{
      type:String,
      required:true
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "Button.module";
</style>