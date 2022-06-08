<template>
  <button class="button" :type="type" @click="$emit('click')">
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