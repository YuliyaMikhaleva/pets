<template>
  <div class="chat-window" @click="deleteContextmenu">
    <div v-if="author" class="chat-window__text-dialog">
      <div class="chat-window__dialog-header" >
        <div class="chat-window__container" @contextmenu="e => addContextMenu(e)">
          <div class="chat-window__context-menu chat-window__context-menu--name-room" ref="edit">
            <ul>
              <li @click="e => addEditForm(e, 11)">редактировать название беседы</li>
            </ul>
          </div>
          <div class="author-js" title="Название беседы">{{author}}</div>
        </div>
        <div class="chat-window__buttons">
          <div class="chat-window__delete-icon" @click="$emit('deleteChat')" title="Удалить беседу">
            <BasketIcon/>
          </div>
          <div class="chat-window__delete-history-icon" title="Удалить историю сообщений" @click="deleteHistory">
            x
          </div>
        </div>

      </div>
      <div class="chat-window__dialog-container">
        <div v-for="(message, index) of arrayMessages" :key="message+index" class="chat-window__message" >
          <div v-if="message.author === 'you'" class="chat-window__your-message" @contextmenu="e => addContextMenu(e)" :id="message.id">
            <div class="chat-window__context-menu" ref="edit">
              <ul>
                <li @click="e => addEditForm(e)">редактировать</li>
                <li @click="e => deleteMessage(e)">удалить</li>
              </ul>
            </div>

            <div class="chat-window__your-message-text">{{message.message}}</div>
            <div class="chat-window__your-message-time">{{message.time}}</div>
          </div>
          <div v-else class="chat-window__other-message">
            <div class="chat-window__other-message-text">{{message.message}}</div>
            <div class="chat-window__other-message-time">{{message.time}}</div>
          </div>

        </div>
        <div class="chat-window__text-area">
          <InputLogo/>
          <textarea class="chat-window__textarea" @keyup.enter="send" name="" id="" placeholder="Написать сообщение..." v-model="message"></textarea>
          <CatIcon/>
          <button class="chat-window__send-btn" @click="send">
            <SendIcon/>
          </button>
        </div>
      </div>
    </div>
    <div class="chat-window__hello-block" v-else>
      <ChatsIcon/>
      <div>Выберите чат<br/> или <b>создайте новую беседу</b></div>
    </div>
    <form class="chat-window__edit-popup" ref="edit-popup" @submit="e => submitFunc(e)">
      <input type="text" class="chat-window__edit-string" v-model="editString" @keyup.enter="editMessage">
      <Button class="button button--save" type="submit">Редактировать</Button>
    </form>
    <div class="chat-window__input"></div>
  </div>
</template>

<script>
import SendIcon from "@/../public/images/sendIcon.svg?inline";
import CatIcon from "@/../public/images/catIcon.svg?inline";
import InputLogo from "@/../public/images/chat-textarea-logo.svg?inline";
import BasketIcon from "@/../public/images/basketIcon.svg?inline";
import ChatsIcon from "@/../public/images/chatsIcon.svg?inline";
import moment from "moment";
import Button from "@/components/Button/Button";

export default {
  name: "ChatWindow",
  props:{
    textMessage:{
      type:String,
      default:""
    },
    author:{
      type:String,
      default:""
    },
    timeMessage:{
      type:String,
      required:false
    },
    id:{
      type:Number,
      required: false
    }
  },
  components:{
    ChatsIcon,
    BasketIcon,
    InputLogo,
    CatIcon,
    SendIcon,
    Button
  },
  data(){
    return{
      message:"",
      arrayMessages:[],
      timeNow:"",
      botMessage:"",
      editString:"",
      editMessageId:""
    }
  },
  methods:{
    submitFunc(e){
      if (this.editMessageId){
        this.editMessage(e)
      } else {
        this.editNameRoom(e)
      }
    },
    moment,
    time() {
      let self = this
      this.timeNow = moment().locale('ru').format('LT');
      setTimeout(self.time, 1000)
    },
    send(){
      if(this.message.trim().length){
        this.arrayMessages.push({
          id:this.arrayMessages.length+1,
          author: "you",
          message:this.message,
          time:this.timeNow
        })
        this.message = "";
        setTimeout(() => this.sendBotMessage(), 1000)
      }
    },
    sendBotMessage(){
      this.arrayMessages.push({
        id:this.arrayMessages.length+1,
        author: "Bot",
        message:"Привет, я бот, как дела? Хочешь поговорить? 1245 316",
        time:this.timeNow
      })

    },
    addContextMenu(e){
      e.preventDefault()
      e.target.parentElement.querySelector('.chat-window__context-menu').style.display = "block";
    },
    deleteContextmenu(){
      console.log('Удаление')
      console.log(typeof this.$refs.edit)
      console.log(this.$refs.edit[0])
      if (this.$refs.edit.style){
        this.$refs.edit.style.display = "none"
      } else {
        this.$refs.edit[0].style.display = "none"
      }
      document.querySelector('.chat-window__context-menu').style.display = "none";
    },
    addEditForm(e, nameRoom=""){
      if (nameRoom === ""){
        this.$refs["edit-popup"].style.display = "block";
        this.editString = e.target.closest('.chat-window__your-message')?.querySelector('.chat-window__your-message-text').outerText;
        this.editMessageId = e.target.closest('.chat-window__your-message')?.getAttribute('id')
      } else {
        this.$refs["edit-popup"].style.display = "block";
        this.editString = e.target.closest('.chat-window__container').querySelector('.author-js')?.outerText;
      }
      // this.deleteContextmenu()
    },
    editMessage(e){
      e.preventDefault()
      this.$refs["edit-popup"].style.display = "none";
      this.arrayMessages.map(el => {
        if (el.id === Number(this.editMessageId)){
          el.message = this.editString;
        }
      })
      this.editString = "";
      this.editMessageId = ""
    },
    editNameRoom(e){
      e.preventDefault();
      this.$refs["edit-popup"].style.display = "none";
      this.$emit('changeNameRoom', this.id, this.editString)
      this.editString = ""

    },
    deleteMessage(e){
      this.editMessageId = e.target.closest('.chat-window__your-message').getAttribute('id')
      this.arrayMessages.splice(this.editMessageId-1, 1);
      this.arrayMessages.forEach((el, index) => el.id = index + 1)
    },
    deleteHistory(){
      this.arrayMessages = []
    }
  },
  watch:{
    arrayMessages(){}
  },
  mounted() {
    this.time();
    this.arrayMessages.push({
      id:0,
      author: this.author ,
      message:this.textMessage,
      time:this.timeMessage
    })
  },
}
</script>

<style lang="scss" scoped>
  @import "Chat-window.scss";
</style>