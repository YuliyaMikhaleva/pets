<template>
  <div v-show="isActive" style="height: 100%">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tab",
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

<style scoped>

</style>