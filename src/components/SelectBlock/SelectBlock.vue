<template>
  <div class="select-block">
    <div v-if="selectedName === ''" class="select-block__placeholder">{{ placeholder }}</div>
    <select v-model="selectedName" class="select-block__select">
      <option class="select-block__item" v-for="item of array" :value="item.text" :key="item.value">{{item.text}}</option>
    </select>
    <IconArrow class="select-block__arrow"/>
  </div>

</template>

<script>
import IconArrow from "@/../public/icons/icon-arrow.svg?inline";
export default {
  name: "SelectBlock",
  components:{IconArrow},
  props:{
    array:{
      type:Array,
      required:true,
      default: () => [],
    },
    placeholder:{
      type:String,
      required: false
    }
  },
  data(){
    return{
      selectedName:''
    }
  },

  watch:{
    selectedName(){
      let name = this.selectedName;
      setTimeout(()=> {
        this.$emit('selectBlock', name)

      },3000)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "SelectBlock";
</style>