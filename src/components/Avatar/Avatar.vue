<template>
  <div class="avatar" :style="'background:'+ bgColor">{{names}}</div>
</template>

<script>
export default {
  name: "Avatar",
  props:{
    name:{
      type:String,
      required:true
    },
    bgColor:{
      type:String,
      required:true
    }
  },
  computed:{
    names(){
      let names = this.name.match(/\b(\w)/g);
      return names.join('').substr(0,2)
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "Avatar.module";
</style>