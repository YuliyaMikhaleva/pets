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
      active: false
    }
  },
  methods:{
    func(){
      this.active = !this.active
      this.active ? this.$emit('add', this.item) : this.$emit('remove', this.item)
    },
  },
}
</script>

<style lang="scss" scoped>
@import "Filter-block.module";
</style>