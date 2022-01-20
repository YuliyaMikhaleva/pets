<template>
        <div class="pets">
          <h1 class="pets__title">...</h1>
        </div>
</template>

<script>
    export default {
        name: "Pets",
    }
</script>

<style lang="scss" scoped>
  @import "./src/assets/variables";
  .pets{
    &__title{
      color: var(--color-text);
    }
  }
</style>