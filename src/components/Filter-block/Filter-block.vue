<template>
  <div class="filter-block">
    <label :for="item" class="filter-block__label">
      <div class="filter-block__filter">
        <div class="filter-block__wrp-img" :class="{'filter-block__wrpImg-active': active}">
          <div class="filter-block__filter-img" :class="{'filter-block__img-active': active}">
            <slot />
          </div>
        </div>
        <span class="filter-block__txt"  :class="{'filter-block__text-active': active}" >{{item}}</span>
      </div>
    </label>
    <input
        class="filter-block__filter-input"
        :id="item" type="checkbox"
        @change="func()"
    >
  </div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  name: "Filter-block",
  props:{
    item:{
      type:String,
      required:true
    },

  },
  data(){
    return{
      active: false,
      active1:false
    }
  },
  computed: {
    ...mapGetters('filtersModule', ['getFilteredPets','getFilters']),
  },
  methods:{
    func(){
      this.active = !this.active
      this.active ? this.$emit('add', this.item) : this.$emit('remove', this.item)
    },
  },
  watch:{
    getFilters(){
      let actualFilter = this.getFilters.filter(el => el.name === this.item)
      if (actualFilter.length){
        this.active = true
      } else {
        this.active = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "Filter-block.module";
</style>