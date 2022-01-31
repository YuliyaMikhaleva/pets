<template>
        <div class="pets">
          <div class="pets__filter-wrp">
            <PetsFilters class="pets__filters pets__container"/>
          </div>
          <PetsCatalog class="pets__container"/>
          <div class="pets__footer"></div>

        </div>
</template>

<script>
    import PetsFilters from "@/components/Pets-filters/Pets-filters";
    import PetsCatalog from "@/components/Pets-catalog/Pets-catalog";
    import {mapActions, mapGetters} from "vuex";
export default {
        name: "Pets",
  components: {PetsCatalog, PetsFilters},
    methods: {
        ...mapActions('filtersModule', ['addFilter','removeFilter']),
    },
    computed:{
        ...mapGetters('filtersModule', ['getFilterItems','getFilteredPets']),
        pets() {
            return this.getFilterItems
        },
    }
    }
</script>

<style lang="scss" scoped>
  @import "./src/assets/variables";
  .pets{
    display: grid;
    grid-template-columns: 260px auto;
    grid-column-gap: 40px;

    &__container{
      margin-right: 30px;
    }
    &__filters{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px;
    }
    &__footer{
      width: 100%;
      height: 32px;
      background-color: var(--bg-dark);
      position: fixed;
      bottom: 0;
    }
  }
  @media (max-width: 1280px) {
    .pets{
      grid-template-columns: 95px auto;
      grid-column-gap: 20px;

      &__container{
        margin-right: 25px;
      }
      &__filters{
        grid-template-columns: 1fr;
      }
    }
  }
  @media (max-width: 768px) {
    .pets{
      grid-template-columns: auto;
      &__container{
        margin-left: 24px;
        margin-right: 24px;
      }
      &__filters{
        grid-template-columns: repeat(auto-fill, 95px);
        margin-bottom: 30px;
        justify-content: space-between;
      }
    }
  }
  @media (max-width: 375px) {
    .pets{
      &__filters{
          grid-template-columns: repeat(6, 95px);
      }
      &__filter-wrp{
        overflow: auto;
      }
    }
  }

</style>