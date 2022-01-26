<template>
    <div class="graphic">
<!--        <img class="statistic__img-cats" src="images/1.jpg" alt="photo">-->
        <div :activeSlide="slide" v-show="(index)==+activeSlide" class="graphic__block" v-for="(element,index) in newArray" v-bind:key="index" :id="index">
            <GraphicsItem v-for="item of element" :likes="item.likes" :views="item.views" v-bind:key="item.id" :maxCount="maxItem(element)+2"/>
<!--            <span v-show="item.likes==likesCount" v-for="(index) in 7" :key="index">{{ index + 16 }}</span>-->
<!--            <span v-show="item.likes==likesCount"  v-for="item of days" :key="item">{{ item }}</span>-->
       </div>
    </div>
</template>

<script>
    import GraphicsItem from "../Graphics-item/Graphics-item";
    export default {
        name: "Graphic",
        components: {GraphicsItem},
        props:{
            // likesCount:{
            //     type:String,
            //     required:true
            // },
            activeSlide:{
                type:Number,
                required:true
            },
        },
        data(){
            return{
                newArray:[
                    [
                        {
                            id: 1,
                            views: 7,
                            likes: 3
                        },
                        {
                            id: 2,
                            views: 4,
                            likes: 3
                        },
                        {
                            id: 3,
                            views: 5,
                            likes: 3
                        },
                        {
                            id: 4,
                            views: 9,
                            likes: 3
                        },
                        {
                            id: 5,
                            views: 6,
                            likes: 3
                        },
                        {
                            id: 6,
                            views: 4,
                            likes: 3
                        },
                        {
                            id: 7,
                            views: 6,
                            likes: 3
                        },
                    ],
                    [
                        {
                            id: 1,
                            views: 2,
                            likes: 2
                        },
                        {
                            id: 2,
                            views: 1,
                            likes: 2
                        },
                        {
                            id: 3,
                            views: 6,
                            likes: 2
                        },
                        {
                            id: 4,
                            views: 7,
                            likes: 2
                        },
                        {
                            id: 5,
                            views: 5,
                            likes: 2
                        },
                        {
                            id: 6,
                            views: 2,
                            likes: 2
                        },
                        {
                            id: 7,
                            views: 5,
                            likes: 2
                        },
                    ],
                    [
                        {
                            id: 1,
                            views: 5,
                            likes: 1
                        },
                        {
                            id: 2,
                            views: 3,
                            likes: 1
                        },
                        {
                            id: 3,
                            views: 4,
                            likes: 1
                        },
                        {
                            id: 4,
                            views: 7,
                            likes: 1
                        },
                        {
                            id: 5,
                            views: 5,
                            likes: 1
                        },
                        {
                            id: 6,
                            views: 2,
                            likes: 1
                        },
                        {
                            id: 7,
                            views: 5,
                            likes: 1
                        },
                    ],
                  [
                    {
                      id: 1,
                      views: 2,
                      likes: 2
                    },
                    {
                      id: 2,
                      views: 1,
                      likes: 2
                    },
                    {
                      id: 3,
                      views: 6,
                      likes: 2
                    },
                    {
                      id: 4,
                      views: 7,
                      likes: 2
                    },
                    {
                      id: 5,
                      views: 5,
                      likes: 2
                    },
                    {
                      id: 6,
                      views: 2,
                      likes: 2
                    },
                    {
                      id: 7,
                      views: 5,
                      likes: 2
                    },
                  ],
                  [
                    {
                      id: 1,
                      views: 5,
                      likes: 1
                    },
                    {
                      id: 2,
                      views: 3,
                      likes: 1
                    },
                    {
                      id: 3,
                      views: 4,
                      likes: 1
                    },
                    {
                      id: 4,
                      views: 7,
                      likes: 1
                    },
                    {
                      id: 5,
                      views: 5,
                      likes: 1
                    },
                    {
                      id: 6,
                      views: 2,
                      likes: 1
                    },
                    {
                      id: 7,
                      views: 5,
                      likes: 1
                    },
                  ]
                ],
                days:['пн','вт','ср','чт','пт','сб','вс']
            }
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
    .graphic{

        &__block{
            width: 253.74px;
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            grid-column-gap: 30.99px;
            /*margin-bottom: 20px;*/
            color: white;
        }
    }
</style>