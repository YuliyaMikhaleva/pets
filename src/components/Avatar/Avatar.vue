<template>
  <div class="avatar" :style="this.getUser.avatar ? `background-image:url(${this.getUser.avatar})` : 'background:'+ bgColor">{{names}}</div>
</template>

<script>
import {mapGetters} from "vuex";

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
    ...mapGetters('profileModule',['getUser']),
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