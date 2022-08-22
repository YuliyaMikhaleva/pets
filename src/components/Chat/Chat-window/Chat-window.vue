<template>
  <div class="chat-window">
    <div v-if="textMessage" class="chat-window__text-dialog">
      <div class="chat-window__dialog-header">
        <div>{{author}}</div>
        <BasketIcon/>
      </div>
      <div class="chat-window__dialog-container">
        <div class="chat-window__other-message">
          <div class="chat-window__other-message-text">{{textMessage}}</div>
          <div class="chat-window__other-message-time">{{timeMessage}}</div>
        </div>
        <div v-for="(message, index) of arrayMessages" :key="message+index" class="chat-window__message" >
          <div v-if="message.author === 'you'" class="chat-window__your-message">
            <div  class="chat-window__your-message-text">{{message.message}}</div>
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
    }
  },
  components:{
    ChatsIcon,
    BasketIcon,
    InputLogo,
    CatIcon,
    SendIcon
  },
  data(){
    return{
      message:"",
      arrayMessages:[],
      timeNow:"",
      botMessage:""
    }
  },
  methods:{
    moment,
    time() {
      let self = this
      this.timeNow = moment().locale('ru').format('LT');
      setTimeout(self.time, 1000)
    },
    send(){
      if(this.message.trim().length){
        this.arrayMessages.push({
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
        author: "Bot",
        message:"Привет, я бот, как дела? Хочешь поговорить?",
        time:this.timeNow
      })

    }
  },
  watch:{
    arrayMessages(){}
  },
  mounted() {
    this.time();
  }
}
</script>

<style lang="scss" scoped>
  @import "Chat-window.scss";
</style>