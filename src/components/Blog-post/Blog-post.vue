<template>
    <div class="blog-post" :id="'post' + item.id">
        <div class="blog-post__header">
            <Avatar class="blog-post__avatar" :name="item.author" bg-color="linear-gradient(224.47deg, #FF92AE 8.18%, #FF3D9A 95.84%)"/>
            <div class="blog-post__wrp-header">
                <div class="blog-post__left-header">
                    <div class="blog-post__author">{{item.author}}</div>
                    <div>{{item.status}}</div>
                </div>
                <div class="blog-post__right-header">
                    <div>{{item.date}}</div>
                    <div>{{item.time}}</div>
                </div>
            </div>
        </div>
        <p class="blog-post__text">{{item.text}}</p>
        <div class="blog-post__images" >
            <img v-for="image of item.images" :key="image.path" class="blog-post__photo" :src="image.path" alt="photo">
        </div>
        <div class="blog-post__data">
            <div>
                <Like />
                <span class="blog-post__like-word">{{item.likesCount}} лайков</span>
            </div>
            <div class="blog-post__comments" @click="$emit('show')">{{item.comments.length}} комментариев</div>
        </div>
        <div class="blog-post__hidden-block">
            <div class="comment" v-for="element of item.comments" :key="element.textMessage">
                <Avatar class="blog-post__avatar" :name="element.author" :bg-color="element.bgColor || 'rgb(76, 111, 255)'"/>
                <p class="blog-post__hidden-text">{{element.textMessage}}</p>
            </div>
        </div>
        <div class="blog-post__comment">
            <Avatar class="blog-post__avatar" :name="this.getUser.name" bg-color="rgb(76, 111, 255)"/>
            <textarea @keyup.enter="func()" id="text" class="blog-post__textarea" placeholder="Написать комментарий..." @input="$emit('on-change')" v-model="textMessage"></textarea>
        </div>
    </div>
</template>

<script>
    import Avatar from "../Avatar/Avatar";
    import Like from "@/../public/images/like.svg?inline";
    import {mapGetters} from "vuex";
    export default {
        name: "Blog-post",
        components: {Avatar, Like},
        props:{
            item:Object
        },
        data(){
          return{
                textMessage:""
          }
        },
        methods:{
            func(){
                this.$emit('add', this.textMessage);
                this.textMessage = ""
            }
        },
        computed:{
            ...mapGetters('profileModule',['getUser']),
        }
    }
</script>

<style lang="scss" scoped>
    .blog-post{
        background: rgba(255, 255, 255, 0.05);
        border-radius: 16px;
        padding: 30px;
        box-sizing: border-box;
        font-family: Rubik;
        color: #FFFFFF;
        &__header{
            display: flex;
        }
        &__avatar{
            width: 48px;
            height: 48px;
            margin-right: 17px;
        }
        &__wrp-header{
            display: flex;
            justify-content: space-between;
            width: calc(100% - 48px - 17px);
            font-size: 14px;
            line-height: 17px;
            font-style: normal;
            font-weight: normal;
            color: #96A7AF;
        }
        &__author{
            font-weight: bold;
            font-size: 16px;
            line-height: 19px;

            margin-bottom: 5px;
        }
        &__right-header{
            text-align: end;
            display: flex;
            flex-direction: column;
            grid-row-gap: 10px;
        }
        &__text{
            font-weight: 400;
            font-style: normal;
            font-size: 14px;
            line-height: 22px;
            color: #FFFFFF;
            margin-bottom: 15px;
        }
        &__images{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: repeat(2, 1fr);
            grid-gap: 15px;
            grid-template-areas:
                    "photo1 photo2"
                    "photo1 photo3";

        }
        &__photo{
            border-radius: 13px;
        }
        &__photo:nth-child(1){
            grid-area: photo1;
        }
        &__photo:nth-child(2){
            grid-area: photo2;
        }
        &__photo:nth-child(3){
            grid-area: photo3;
        }
        /*&__image1{*/
        /*    grid-area: photo1;*/
        /*}*/
        /*&__image2{*/
        /*    grid-area: photo2;*/
        /*}*/
        /*&__image3{*/
        /*    grid-area: photo3;*/
        /*}*/
        &__data{
            margin-top: 18.5px;
            display: flex;
            grid-gap: 77px;
            padding-bottom: 18.5px;
            box-sizing: border-box;
            border-bottom: 1px solid #334155;
            margin-bottom: 15px;
        }
        &__like-word{
            margin-left: 11px;
        }
        &__comments{
            position: relative;
            cursor: pointer;
        }
        &__comments::before{
            width: 17px;
            height: 17px;
            display: block;
            content: "";
            background-image: url("../../../public/images/comments-icon.svg");
            position: absolute;
            top: 2px;
            left: -27px;
        }
        &__comment{
            display: flex;
        }
        &__input{

        }
        &__textarea{
            width: calc(100% - 48px - 17px);
            background: none;
            border: none;
            border-bottom: 1px solid #EDF2F7;
            resize: none;
            overflow: hidden;
            color: #D5D5DC;
            padding: 8px;
            box-sizing: border-box;
            font-family: Rubik;
            font-weight: 400;
            font-style: normal;
            font-size: 12px;
            line-height: 18px;
            height: 37px;

        }
        &__hidden-block{
            display: none;
            border-bottom: 1px solid #334155;
            margin-bottom: 15px;
        }
        &__show-block{
            display: block;
        }
        &__hidden-text{
            width: calc(100% - 48px - 17px);
            margin: 0;
        }
        textarea::placeholder{
            font-family: Rubik;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
            color: #D5D5DC;
        }
    }
    .comment{
        display: flex;
        margin-bottom: 15px;
    }
</style>