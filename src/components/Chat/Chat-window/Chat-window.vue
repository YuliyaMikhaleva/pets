<template>
  <div class="chat-window">
    <div class="chat-window__text-dialog"></div>
    <div class="chat-window__hello-block">
      <ChatsIcon/>
      <div>Выберите чат или <b>создайте новую беседу</b></div>
    </div>
<!--    <div class="chat-window__hello-block"><ChatsIcon/><div>Выберите чат или создайте новую беседу<div></div>-->
    <div class="chat-window__input"></div>
  </div>
</template>

<script>
import ChatsIcon from "@/../public/images/chatsIcon.svg?inline";
export default {
  name: "ChatWindow",
  components:{
    ChatsIcon
  }
}
</script>

<style lang="scss" scoped>
  @import "Chat-window.scss";
</style>