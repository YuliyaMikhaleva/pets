<template>
<!--  <tabs>-->
<!--    <tab name="Ynfan">-->
<!--      <div>1111</div>-->
<!--    </tab>-->
<!--    <tab name="2222">-->
<!--      <div>2222</div>-->
<!--    </tab>-->
<!--    <tab name="3333">-->
<!--      <div>3333</div>-->
<!--    </tab>-->
<!--  </tabs>-->
<!--  <div>-->
    <div class="chat-list__top">
      <div class="chat-list__search-component">
        <label for="chat-search" class="chat-list__search-label">
          <SearchIcon/>
        </label>
        <input class="chat-list__search" type="text" placeholder="Поиск..." id="chat-search">
      </div>
      <button class="chat-list__search-button" title="Создать новую беседу">
        <SearchButton/>
      </button>
    </div>
<!--    <div class="chat-list__main">-->
<!--&lt;!&ndash;      <ChatListItem title="Ynfan"/>&ndash;&gt;-->

<!--    </div>-->

<!--  </div>-->


</template>

<script>
// import SearchIcon from "@/../public/images/search-Icon.svg?inline";
// import SearchButton from "@/../public/images/search-button.svg?inline";
import Tabs from "../../Tabs/Tabs";
import Tab from "../../Tabs/Tab/Tab";
// import ChatListItem from "@/components/Chat/Chat-list/Chat-list-item/Chat-list-item";
export default {
  name: "ChatList",
  components:{Tabs, Tab}
}
</script>

<style lang="scss" scoped>
  @import "Chat-list.scss";
</style>