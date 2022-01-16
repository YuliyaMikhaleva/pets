<template>
  <div class="avatar" :style="'background:'+ bgColor">{{name}}</div>
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
  }
}
</script>

<style lang="scss" scoped>
  .avatar{
    width: 48px;
    height: 48px;
    border-radius: 32.5px;
    display: flex;
    justify-content: center;
    line-height: 48px;
    text-transform: uppercase;
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #FFFFFF;
  }
</style>