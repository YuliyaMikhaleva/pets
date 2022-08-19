<template>
  <div class="chat-window">
    <div v-if="title" class="chat-window__text-dialog">
      <div class="chat-window__dialog-header">
        <div>{{author}}</div>
        <BasketIcon/>
      </div>
      <div class="chat-window__dialog-container">
        <div>{{title}}</div>
        <div>{{sendMessage}}</div>
        <div class="chat-window__text-area">
          <InputLogo/>
          <textarea @keyup.enter="send" name="" id="" placeholder="Написать сообщение..." v-model="message"></textarea>
          <CatIcon/>
          <button class="chat-window__send-btn">
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
      sendMessage:""
    }
  },
  methods:{
    send(){
      this.sendMessage = this.message ;
      this.message = ""
      console.log('отправление сообщения')
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "Chat-window.scss";
</style>