<template>
        <div class="chat">
          <ChatList/>
          <ChatWindow/>
        </div>
</template>

<script>

import ChatList from "@/components/Chat/Chat-list/Chat-list";
import ChatWindow from "@/components/Chat/Chat-window/Chat-window";
export default {
        name: "Chat",
  components: {ChatWindow, ChatList},
}
</script>

<style lang="scss" scoped>
  .chat{
    padding-top: 156px;
    padding-bottom: 25px;
    color: white;
    display: grid;
    grid-template-columns: 410px auto;
    grid-gap: 40px;
    height: 100%;
  }
</style>