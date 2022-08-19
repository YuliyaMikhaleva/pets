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
    type:{
      type:String,
      required: false
    },
    color:{
      type:String,
      default: 'green'
    },
    time:{
      type:String,
      required: false
    },
    message:{
      type:String,
      required:false
    },
    bgImage:{
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

<style scoped>

</style>