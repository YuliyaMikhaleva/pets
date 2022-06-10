<template>
    <label class="switch-item-img">
      <input type="checkbox" class="switch-item-img__input" @change="checkInput" :checked="value === 'W'">
      <span class="switch-item-img__slider switch-item-img__slider--round"></span>
      <WomenIcon class="switch-item-img__iconLeft"/>
      <ManIcon class="switch-item-img__iconRight"/>
    </label>
</template>

<script>
import WomenIcon from "@/../public/icons/icon-sex-w.svg?inline";
import ManIcon from "@/../public/icons/icon-sex-m.svg?inline";
export default {
  name: "SwitchItemImg",
  components:{WomenIcon, ManIcon},
  props:{
    value:{
      type:Boolean,
    },
  },
  data(){
    return{
      isChecked: false,
    }
  },
  methods:{
    checkInput(){
      this.$emit('change');
      this.isChecked = !this.isChecked
    }
  }
}
</script>

<style scoped lang="scss">
  @import "Switch-item-img";
</style>