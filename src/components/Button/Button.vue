<template>
  <button class="button">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "Button",
}
</script>

<style lang="scss" scoped>
  @import "Button.module";
</style>