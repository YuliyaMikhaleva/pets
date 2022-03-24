<template>
  <div class="avatar" :style="'background:'+ bgColor">{{names}}</div>
</template>

<script>
export default {
  name: "Avatar",
  props:{
    name:{
      type:String,
      required:true,
      default:"Пользователь"
    },
    bgColor:{
      type:String,
      required:true
    }
  },
  computed:{
    names(){
      if (this.name){
        let nameUser = this.name.split(' ', 2)
        let newname = nameUser.map((el) => el[0])
        return newname.join('')
      } else return ""
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "Avatar.module";
</style>