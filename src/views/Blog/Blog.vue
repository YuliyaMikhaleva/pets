<template>
        <div class="blog">
          <div class="blog__new-post">
            <div class="blog__new-post-data">
              <Avatar class="blog__avatar" :name="this.getUser.name" bg-color="rgb(76, 111, 255)"/>

              <textarea class="blog__write-input" type="text" placeholder="Что у вас нового?" v-model="post.text" @keyup.enter="addPost" @input="func2()"/>

              <div class="blog__add-photo">
                <div id="img-preview" class="blog__new-post-img"></div>
                <label for="input" class="blog__new-post-label" :class="{'blog__photo-hidden': this.post.photos.length > 0}">
                  <PhotoIcon class="blog__icon"/>
                </label>
                <input class="blog__new-post-input" type="file" name="avatar" id="input" @change="getImgData" multiple>

                <label class="blog__plus" for="input">
                  <div id="preview" class="blog__photo-preview-wrp" :class="{'blog__photo-hidden': this.post.photos.length === 0}">
                    <span class="blog__plus-icon">+</span>
                  </div>
                </label>

                <label class="blog__plus" for="input">
                  <div id="preview2" class="blog__photo-preview-wrp" :class="{'blog__photo-hidden': this.post.photos.length === 0}">
                    <span class="blog__plus-icon">+</span>
                  </div>
                </label>

                <label for="input" class="blog__plus">
                  <div id="preview3" class="blog__photo-preview-wrp" :class="{'blog__photo-hidden': this.post.photos.length === 0}">
                    <span class="blog__plus-icon">+</span>
                  </div>
                </label>

              </div>
            </div>
          </div>

<!--          <div class="blog__posts">-->
            <masonry-wall
                :items="articles"
                :gap="20"
            >

              <template #default="{ item, index }">
                <div
                    class="item"
                    :class="{ secondary: (item.images.length <= 1 && !item.img), accent: (item.images.length > 1)}"

                >
                  <BlogPost
                      :class="{ secondary: (item.images.length <= 1 && !item.img ), accent: (item.images.length > 1)}"
                      class="blog__item"
                      :item="item"
                      :key="index"
                      @add="addComment(item.id, $event)"
                      @on-change="func()"
                      @show="showBlock(item.id)"
                  />

                </div>
              </template>
            </masonry-wall>
<!--          </div>-->


<!--          <div class="blog__posts">-->
<!--            <BlogPost-->
<!--                class="blog__item"-->
<!--                v-for="article of articles"-->
<!--                :item="article"-->
<!--                :key="article.id"-->
<!--                @add="addComment(article.id, $event)"-->
<!--                @on-change="func()"-->
<!--                @show="showBlock(article.id)"-->
<!--            />-->
<!--          </div>-->

        </div>
</template>

<script>
import PhotoIcon from "@/../public/images/photo-icon.svg?inline";
import BlogPost from "../../components/Blog-post/Blog-post";
import Avatar from "@/components/Avatar/Avatar";
import moment from "moment"


import {mapGetters, mapActions} from "vuex";
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
                               bgColor:'linear-gradient(224.47deg, #FF92AE 8.18%, #FF3D9A 95.84%)'
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
                               bgColor: 'linear-gradient(225deg, #D665FF 0%, #4C6FFF 100%);'
                       }
               ],
               user:{
                  author:"",
                  textMessage: ""
               },
              post:{
                 text:"",
                 photos:[],
              },
             timeNow:"",
             dateNow:""
           }
        },
        methods:{
          ...mapActions('showloaderModule',['addShowloader', 'deleteShowloader']),
          moment,
          time() {
            let self = this
            this.timeNow = moment().locale('ru').format('LT');
            setTimeout(self.time, 1000)
          },
          date(){
            let self = this
            this.dateNow = moment().locale('ru').format('LL').split(' ', 2).join(' ')
            setTimeout(self.date, 1000)
          },

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
                func2(){
                    const textareaHeight2 = document.querySelector(".blog__write-input");
                    textareaHeight2.style.height = 0;
                    textareaHeight2.style.height = textareaHeight2.scrollHeight + "px";
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
                  document.querySelectorAll('.blog__plus').forEach(el => {
                    el.style.display = "block"
                  })
                  let files = document.getElementById('input').files
                  let preview = document.getElementById('preview')

                  for (let i = 0; i < files.length; i++) {
                    let file = files[i];

                    if (!file.type.startsWith('image/')){ continue }

                    let img = document.createElement("img");
                    img.classList.add("blog__photo-preview");
                    img.file = file;
                    preview.appendChild(img); // Предполагается, что "preview" это div, в котором будет отображаться содержимое.
                    let plus = [...preview.children].find( el => el.className === 'blog__plus')
                    if (plus){
                      preview.removeChild(plus)

                    }

                    let reader = new FileReader();
                    reader.onload = (function(aImg) {
                      return function(e) {
                        aImg.src = e.target.result;
                      };
                    })(img);
                    reader.readAsDataURL(file);
                  }

                  setTimeout(()=> {
                    let photos = document.querySelectorAll('img.blog__photo-preview');
                    let plusIcons = document.querySelectorAll('.blog__plus-icon');
                    if (photos[0]){
                      this.post.photos.push({path: photos[0].src})
                      plusIcons[0].parentElement.style.border = '1px solid transparent'
                    }
                    if (photos[1]){
                      this.post.photos.push({path: photos[1].src})
                      plusIcons[1].parentElement.style.border = '1px solid transparent'

                    }
                    if (photos[2]){
                      this.post.photos.push({path: photos[2].src})
                      plusIcons[2].parentElement.style.border = '1px solid transparent'
                    }

                  }, 1000)
                },
                addPost(){
                  event.preventDefault()
                    const post = {
                        author:this.getUser.name,
                        comments:[],
                        date:this.dateNow,
                        id:this.lastId+1,
                        images:this.post.photos,
                        likesCount:0,
                        status:"Тут должен быть какой-то статус",
                        text:this.post.text,
                        time:this.timeNow,
                        bgColor:'#4C6FFF'
                    };
                    this.post.text="";
                    this.post.photos=[];
                    document.querySelectorAll('.blog__photo-preview').forEach((el) => {
                      el.classList.add('blog__photo-hidden')
                    })
                  this.addShowloader()
                    setTimeout(() => {
                      this.articles.unshift(post);
                      this.func2()
                      this.deleteShowloader()
                    }, 1000)
                }
        },
        computed:{
                ...mapGetters('profileModule',['getUser']),
          lastId(){
            return this.articles.length
          }
        },
  mounted() {
    this.time();
    this.date();
  }

}
</script>

<style lang="scss" src="./Blog.scss">

</style>