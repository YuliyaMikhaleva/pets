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
@import "./src/assets/variables";
.filter-block{
  transition: all 0.25s;

  &__txt{
    color: var(--color-text);
    transition: all 0.25s;
    position: absolute;
    bottom: 10%;
  }
  &__text-active{
    color: #EDF2F7;
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
    position: relative;
    transition: all 0.25s;
    &:hover{
      opacity: 40%;
      transition: background 0.25s, opacity 0.25s;
    }
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
    margin-bottom: 15px;
    transition: all 0.25s;
  }
  &__wrpImg-active{
    //padding-bottom: 20%;
    width: 100%;
    height: 100%;
    margin-bottom: 0;
    border-radius: 16px;
    transition: all 0.25s;
  }

  &__filter-img{
    display: flex;
    justify-content: center;
    margin: 0;
    transition: all 0.25s;
  }
  &__img-active{
    margin-bottom: 18.5%;
    transition: all 0.25s;
  }
  &__filter-input{
    display: none;
  }

}

@media (max-width: 1280px) {
  .filter-block{
    &__filter {
      width: 95px;
      height: 91px;
    }
    //&__txt{
    //  margin-bottom: 20%;
    //}
  }
}

</style>