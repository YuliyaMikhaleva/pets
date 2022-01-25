<template>
  <div class="pets-filters">
    <FilterBlock v-for="(item,index) in pets"
                 :key="index"
                 :item="item.name"
                 @add="addFilter(item)"
                 @remove="removeFilter(item)"
    >
      <img :src="item.img" alt="photo">
    </FilterBlock>
  </div>
</template>

<script>
import FilterBlock from "@/components/Filter-block/Filter-block";
import {mapActions, mapGetters} from "vuex";
export default {
  name: "Pets-filters",
  components: {FilterBlock},
  computed: {
    ...mapGetters('filtersModule', ['getFilterItems','getFilteredPets']),
    pets() {
      return this.getFilterItems
    },
  },
  methods:{
    ...mapActions('filtersModule', ['addFilter','removeFilter']),
  }

}
</script>
<style lang="scss" scoped>
  .pets-filters{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }
</style>