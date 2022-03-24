<template>
    <div class="graphic">
        <div :activeSlide="slide" v-show="(index)==+activeSlide" class="graphic__block" v-for="(element,index) in array" v-bind:key="index" :id="index">
            <GraphicsItem v-for="item of element" :likes="item.likes" :views="item.views" v-bind:key="item.id" :maxCount="maxItem(element)+2"/>
       </div>
    </div>
</template>

<script>
    import GraphicsItem from "../Graphics-item/Graphics-item";
    export default {
        name: "Graphic",
        components: {GraphicsItem},
        props:{
            activeSlide:{
                type:Number,
                required:true
            },
            array:{
                type:Array,
                required:true
            },
        },
        methods:{
            maxItem(item){
                let newArr = item.map((el) => {
                    return el.views + el.likes
                })
                let maxCount = Math.max(...newArr)
                return maxCount
            }
        },
        computed:{
            slide(){
              return this.activeSlide
            }
          }
    }
</script>

<style lang="scss" scoped>
  @import "Graphic.module";
</style>