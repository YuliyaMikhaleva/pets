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
            <div style="display:flex;">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="blog-post__comments-icon" fill-rule="evenodd" clip-rule="evenodd" d="M1.10648 1.13253C0 2.26508 0 4.08786 0 7.73345V15.1241C0 15.8806 0 16.2589 0.0977122 16.4613C0.307417 16.8957 0.798953 17.1042 1.24736 16.9488C1.45629 16.8763 1.71761 16.6089 2.24026 16.074H2.24027L2.24029 16.0739C2.6641 15.6401 2.876 15.4232 3.10951 15.248C3.59885 14.881 4.16737 14.64 4.76696 14.5454C5.05308 14.5002 5.35276 14.5002 5.95212 14.5002H9.91667C13.0215 14.5002 14.5739 14.5002 15.6188 13.6225C15.8101 13.4618 15.9855 13.2823 16.1424 13.0865C17 12.017 17 10.4281 17 7.25011C17 4.07216 17 2.48319 16.1424 1.4137C15.9855 1.21791 15.8101 1.03839 15.6188 0.877708C14.5739 0 13.0215 0 9.91667 0H7.55556C3.99383 0 2.21298 0 1.10648 1.13253ZM4.25004 8.70008C5.03245 8.70008 5.66671 8.05085 5.66671 7.25006C5.66671 6.44926 5.03245 5.80003 4.25004 5.80003C3.46763 5.80003 2.83337 6.44926 2.83337 7.25006C2.83337 8.05085 3.46763 8.70008 4.25004 8.70008ZM9.91671 7.25006C9.91671 8.05085 9.28242 8.70008 8.50004 8.70008C7.71766 8.70008 7.08337 8.05085 7.08337 7.25006C7.08337 6.44926 7.71766 5.80003 8.50004 5.80003C9.28242 5.80003 9.91671 6.44926 9.91671 7.25006ZM12.75 8.70008C13.5324 8.70008 14.1667 8.05085 14.1667 7.25006C14.1667 6.44926 13.5324 5.80003 12.75 5.80003C11.9677 5.80003 11.3334 6.44926 11.3334 7.25006C11.3334 8.05085 11.9677 8.70008 12.75 8.70008Z" fill="#EDF2F7"/>
                </svg>
                <div class="blog-post__comments" @click="$emit('show')">{{item.comments.length}} комментариев</div>
            </div>
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
        background-color: var(--color-article) ;
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
            color: var(--color-logo);
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
            color: var(--color-logo);
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
            color: var(--color-logo);
        }
        &__comments{
            position: relative;
            cursor: pointer;
            color: var(--color-logo);
            margin-left: 10px;
        }
        &__comments-icon{
            fill: var(--color-title);
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
            border-bottom: 1px solid var(--color-title);
            resize: none;
            overflow: hidden;
            color: var(--color-pet-type);
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
            color: var(--color-title);
        }
        textarea::placeholder{
            font-family: Rubik;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
            color: var(--color-pet-type);
        }
    }
    .comment{
        display: flex;
        margin-bottom: 15px;
    }
</style>