<template>
    <div class="graphics-item">
        <div class="graphics-item__likes" :style="'height:'+likesPercent+'%'"></div>
        <div class="graphics-item__views" :style="'height:'+viewsPercent+'%'"></div>
    </div>
</template>

<script>
    export default {
        name: "Graphics-item",
        props:{
            likes:{
                type:Number,
                required:true
            },
            views:{
                type:Number,
                required:true
            },
            maxCount:{
                type:Number,
                required:true
            },
        },
         computed:{
             viewsPercent(){
               return this.views*100/this.maxCount
             },
             likesPercent(){
                 return this.likes*100/this.maxCount
             }

         }
    }
</script>

<style lang="scss" scoped>
  @import "Graphics-item.module";
</style>