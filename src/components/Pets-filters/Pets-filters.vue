<template>
  <div>
    <FilterBlock v-for="(item,index) in array"
                 :key="index"
                 :item="item.name"
                 @add="addFilterFunc(item)"
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
    quantity:{
      type:Number,
    },
  },
  components: {FilterBlock},
  computed: {
    ...mapGetters('filtersModule', ['getFilteredPets','getFilters']),
  },
  methods:{
    ...mapActions('filtersModule', ['addFilter','removeFilter', 'removeAllFilters']),
    addFilterFunc(item){
      if (this.quantity){
        this.removeAllFilters();
        this.addFilter(item)
      } else {
        this.addFilter(item)
      }
    }
  }

}
</script>
<style lang="scss" scoped>

</style>