<template>
  <div>
    <FilterBlock v-for="(item,index) in array"
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
  props:{
    array:{
      type:Array,
      required: false
    },
  },
  components: {FilterBlock},
  computed: {
    ...mapGetters('filtersModule', ['getFilteredPets']),
  },
  methods:{
    ...mapActions('filtersModule', ['addFilter','removeFilter']),
  }

}
</script>
<style lang="scss" scoped>

</style>