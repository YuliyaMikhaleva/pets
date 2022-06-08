<template>
  <div v-show="isActive">
    <slot></slot>
    <Button class="button button--save tabs-form-item__button" @click="$parent.goNextTab">{{titleBtn}}</Button>
  </div>
</template>

<script>
import Button from "@/components/Button/Button";
export default {
  name: "TabsFormItem",
  components:{Button},
  props:{
    name:{
      type:String,
      required:true
    },
    img:{
      type:String,
      required:false
    },
    selected:{
      type:Boolean,
      default: false
    },
    titleBtn:{
      type:String,
      required:false
    }
  },
  data(){
    return {
      isActive: false
    };
  },
  computed:{

  },
  mounted() {
    this.isActive = this.selected
  }
}
</script>

<style scoped lang="scss">
  @import "TabsFormItem";
</style>