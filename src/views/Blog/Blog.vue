<template>
        <div class="blog">
                <BlogPost
                        class="blog__item"
                        v-for="article of articles"
                        :item="article"
                        :key="article.id"
                        @add="addComment(article.id, $event)"
                        @on-change="func()"
                        @show="showBlock(article.id)"
                />
        </div>
</template>

<script>

import BlogPost from "../../components/Blog-post/Blog-post";
import {mapGetters} from "vuex";
export default {
        name: "Blog",
        components: {BlogPost},
        data(){
           return{
               articles:[
                       {
                               id:1,
                               author: 'Ynfan',
                               status:'Пельмень с мясом',
                               date:'22 сентября',
                               time:'17:20',
                               text:'Мой кот постоянно ходит по краю бассейна, как будто ждет, что оттуда выпрыгнет утка. Я его уже не уговариваю. Он так сидит уже несколько лет.',
                               images:[
                                       {path:'images/blog-post1.jpg'},
                                       {path:'images/blog-post2.jpg'},
                                       {path:'images/blog-post3.jpg'}
                               ],
                               likesCount:20,
                               comments:[
                                       {
                                               author:'Jack Daniels',
                                               bgColor:'green',
                                               textMessage:'Мой коментарий очень длиный потому что я люблю длинные комментарии вот поэтому они такие длинные. Мой коментарий очень длиный потому что я люблю длинные комментарии вот поэтому они такие длинные. Мой коментарий очень длиный потому что я люблю длинные комментарии вот поэтому они такие длинные'
                                       }
                               ],
                       },
                       {
                               id:2,
                               author: 'Quilman',
                               status:'Пес – это тоже я.',
                               date:'11 июня',
                               time:'11:20',
                               text:'Если собаку гладить против шерсти, то она кусаться будет.',
                               images:[
                                       {path:'images/blog-post4.jpg'},
                               ],
                               likesCount:23,
                               comments:[],
                       }
               ],
               user:{
                  author:"",
                  textMessage: ""
               },
           }
        },
        methods:{
                showBlock(id){
                        let item = this.articles.find((el) => el.id == id);
                        if (item.comments.length){
                                const elem = document.querySelector(`#post${id}`);
                                const block = elem.querySelector('.blog-post__hidden-block');
                                block.classList.toggle('blog-post__show-block')
                        }

                },
                func(){
                        const textareaHeight = document.getElementById("text");
                        textareaHeight.style.height = 0;
                        textareaHeight.style.height = textareaHeight.scrollHeight + "px";
                },
                addComment(id, text){
                        const element = {
                                author: this.getUser.name,
                                textMessage: text,
                        };
                        this.user.textMessage = '';
                        setTimeout(() => {
                                let elem = this.articles.find((el) => el.id == id);
                                elem.comments.push(element)
                                this.func()
                        },100);
                }
        },
        computed:{
                ...mapGetters('profileModule',['getUser']),
        }
}
</script>

<style lang="scss" scoped src="./Blog.scss">

</style>