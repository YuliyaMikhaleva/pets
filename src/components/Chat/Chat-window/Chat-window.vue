<template>
  <div class="chat-window">
    <div v-if="title" class="chat-window__text-dialog">
      <div class="chat-window__dialog-header">
        <div>{{author}}</div>
        <BasketIcon/>
      </div>
      <div class="chat-window__dialog-container">
        <div class="chat-window__other-message">{{title}}</div>
        <div v-for="(message, index) of arrayMessages" :key="message+index" class="chat-window__your-message">
          <div  class="chat-window__your-message-text">{{message.message}}</div>
          <div class="chat-window__your-message-time">{{message.time}}</div>
        </div>
        <div class="chat-window__text-area">
          <InputLogo/>
          <textarea @keyup.enter="send" name="" id="" placeholder="Написать сообщение..." v-model="message"></textarea>
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
    title:{
      type:String,
      default:""
    },
    author:{
      type:String,
      default:""
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
      this.arrayMessages.push({
        message:this.message,
        time:this.timeNow
      })
      this.message = ""
    },
  },
  mounted() {
    this.time();
  }
}
</script>

<style lang="scss" scoped>
  @import "Chat-window.scss";
</style>