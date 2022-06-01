<template>
      <select class="select-block">
        <option class="select-block__item" v-for="item of array" :value="item.value" :key="item.value">{{item.text}}</option>
      </select>
</template>

<script>
export default {
  name: "SelectBlock",
  props:{
    array:{
      type:Array,
      required:true,
      default: () => [],
    },
  },
}
</script>

<style scoped lang="scss">
  @import "SelectBlock";
</style>