<template>
  <div>
    <div class="chat-list__top">
      <div class="chat-list__search-component">
        <label for="chat-search" class="chat-list__search-label">
          <SearchIcon/>
        </label>
        <input class="chat-list__search" type="text" placeholder="Поиск..." id="chat-search">
      </div>
      <button class="chat-list__search-button">
        <SearchButton/>
      </button>
    </div>
    <div class="chat-list__main">
      <ChatListItem title="Ynfan"/>
    </div>

  </div>


</template>

<script>
import SearchIcon from "@/../public/images/search-Icon.svg?inline";
import SearchButton from "@/../public/images/search-button.svg?inline";
import ChatListItem from "@/components/Chat/Chat-list/Chat-list-item/Chat-list-item";
export default {
  name: "ChatList",
  components:{ChatListItem, SearchIcon, SearchButton}
}
</script>

<style lang="scss" scoped>
  @import "Chat-list.scss";
</style>