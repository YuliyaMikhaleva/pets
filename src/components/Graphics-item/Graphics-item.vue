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
    .graphics-item{
        width: 9.68px;
        height: 138.38px;
        background-color: #2A3C44;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        &__views{
            background-color: #66CB9F;
            border-radius: 6px;
        }
        &__likes{
            background-color: #F16063;
            border-radius: 6px;
            margin-bottom: 3.82px;
        }
    }
</style>