<template>
        <div class="pets">
          <h1 class="pets__title">...</h1>
          <Graphic/>
        </div>
</template>

<script>
    import Graphic from "../components/Graphic";
    export default {
        name: "Pets",
        components: {Graphic},
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