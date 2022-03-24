<template>
        <div class="blog">
          <div class="blog__new-post">
            <div class="blog__new-post-data">
              <Avatar class="blog__avatar" :name="this.getUser.name" bg-color="rgb(76, 111, 255)"/>

              <textarea class="blog__write-input" type="text" placeholder="Что у вас нового?" v-model="post.text"/>

              <div class="blog__add-photo">
                <div id="img-preview" class="blog__new-post-img"></div>
                <label for="input" class="blog__new-post-label">
                  <PhotoIcon class="blog__icon"/>
                </label>
                <input class="blog__new-post-input" type="file" name="avatar" id="input" @change="getImgData" multiple>
                <div id="preview" class="blog__photo-preview"></div>
                <div id="preview" class="blog__photo-preview"></div>
                <div id="preview" class="blog__photo-preview"></div>
                <button  @click="addPost">Отправить</button>
              </div>


            </div>
          </div>

<!--          <div class="blog__new-post">-->

          <div class="blog__posts">
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

        </div>
</template>

<script>
import PhotoIcon from "@/../public/images/photo-icon.svg?inline";
import BlogPost from "../../components/Blog-post/Blog-post";
import Avatar from "@/components/Avatar/Avatar";


import {mapGetters} from "vuex";
export default {
        name: "Blog",
        components: {BlogPost, PhotoIcon, Avatar},
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
              post:{
                 text:"",
                 photos:[
                   {path:""},
                   {path:""},
                   {path:""},
                 ],
                 // photo1:{},
                 // photo2:{},
                 // photo3:{}
              }.photos,
             photo1:"",
             photo2:"",
             photo3:""
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
                        },100);
                },
                getImgData() {
                  // let inputBlock = document.querySelector('input')
                  let files = document.getElementById('input').files
                  console.log(files)
                  // console.log('input.value', document.getElementById('input').files)
                  let preview = document.getElementById('preview')

                  for (let i = 0; i < files.length; i++) {
                    let file = files[i];

                    if (!file.type.startsWith('image/')){ continue }

                    let img = document.createElement("img");
                    img.classList.add("blog__photo-preview");
                    img.file = file;
                    preview.appendChild(img); // Предполагается, что "preview" это div, в котором будет отображаться содержимое.

                    let reader = new FileReader();
                    reader.onload = (function(aImg) {
                      return function(e) {
                        aImg.src = e.target.result;
                        // this.post.photos.push(e.target.result)
                      };
                    })(img);
                    reader.readAsDataURL(file);
                  }

                  let photos = document.getElementById("preview").children

                  // let photos = document.querySelectorAll('img.blog__photo-preview');
                  this.photo1 = [...photos][0].currentSrc;
                  this.photo2 = [...photos][1].currentSrc;
                  this.photo3 = [...photos][2].currentSrc;
                  // console.log('photos', [...photos][0].src )
                },
                addPost(){
                  event.preventDefault()
                    const post = {
                        author:this.getUser.name,
                        comments:[],
                        date:"25 марта",
                        id:3,
                        images:[
                          // {path:""}
                        ],
                        likesCount:0,
                        status:"",
                        text:this.post.text,
                        time:""
                    };
                    this.post.text="";
                    setTimeout(() => {
                      this.articles.push(post);
                      this.func()
                    }, 1000)
                }


        },
        computed:{
                ...mapGetters('profileModule',['getUser']),
          // photo1(){
          //         let photo1 = document.querySelectorAll('img.blog__photo-preview')
          //         console.log('photo1', photo1)
          //   return 1
          // }
        },

}
</script>

<style lang="scss" src="./Blog.scss">

</style>