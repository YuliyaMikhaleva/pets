<template>
  <div class="chat-list-item">
    {{title}}
  </div>
</template>

<script>
export default {
  name: "Chat-list-item",
  props:{
    title:{
      type:String,
      required: true
    },

  },
}
</script>

<style scoped lang="scss">
  @import "Chat-list-item";
</style>