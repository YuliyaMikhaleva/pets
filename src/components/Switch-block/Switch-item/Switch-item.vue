<template>
    <label class="switch">
      <input type="checkbox" class="switch__input" @change="$emit('change')" :checked="value === true">
      <span class="switch__slider switch__slider--round"></span>
    </label>
</template>

<script>
export default {
  name: "SwitchItem",
  props:{
    value:{
      type:Boolean,
    },
  }
}
</script>

<style scoped lang="scss">
  @import "Switch-item";
</style>