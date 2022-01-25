<template>
  <div class="filter-block">
    <label :for="item" class="filter-block__label">
      <div class="filter-block__filter" :class="{'filter-block__active': active}">
        <div class="filter-block__wrp-img">
          <slot class="filter-block__filter-img"/>
        </div>
        <span class="filter-block__txt">{{item}}</span>
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
@import "./src/assets/variables";
.filter-block{
  width: 73px;
  height: 73px;
  &__txt{
    color: var(--color-text);
  }


  &__filter{
    width: 73px;
    height: 73px;
    background: var(--color-article);
    border-radius: 16px;
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Rubik;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;
    cursor: pointer;
  }
  &__wrp-img{
    width: 42px;
    height: 42px;
    background: #4C6FFF;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 5px;
  }
  &__active{
    background: #4C6FFF;
  }
  &__filter-img{
    display: flex;
    justify-content: center;
    margin: 0;
  }
  &__filter-input{
    display: none;
  }

}

</style>