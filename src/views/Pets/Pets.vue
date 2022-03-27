<template>
        <div class="pets pets__wrp">
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
  props:['id'],
    methods: {
        ...mapActions('filtersModule', ['addFilter','removeFilter']),
    },
    computed:{
        ...mapGetters('filtersModule', ['getFilterItems','getFilteredPets']),
        pets() {
            return this.getFilterItems
        },
    },
    // mounted() {
    //     if (this.$route.matched[0].path=='/pets'){
    //         document.querySelector('body').style.minWidth = 'auto';
    //     }
    // }
    }
</script>

<style lang="scss" scoped>
  @import "Pets.module";
</style>