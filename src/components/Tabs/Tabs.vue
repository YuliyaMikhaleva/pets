<template>
  <div class="tabs">
    <div class="tabs__links">
      <div class="chat-list__top" v-if="tabs.type === 'chat'" >
        <div class="chat-list__search-component">
          <label for="chat-search" class="chat-list__search-label">
            <SearchIcon/>
          </label>
          <input class="chat-list__search" type="text" placeholder="Поиск..." id="chat-search" ref="input" v-model="searchValue">
        </div>
        <button class="chat-list__search-button">
          <SearchButton/>
        </button>
      </div>
      <ul ref="list" :class="{'chat-list__list' : tabs.type === 'chat'}" >
        <a v-for="(tab, index) in filteredTabs"
           :href="tab.href" @click="selectTab(tab,index)"
           :key="tab+index" class="tabs__item"
           :class="{ 'tabs__item--active': tab.isActive }"
        >
          <li class="tabs__item-wrp" v-if="tab.img">
            <Component
                :is="require(`@/../public/${tab.img}?inline`)"
            />
            {{ tab.name }}
          </li>
          <li v-if="tab.type === 'chat'" class="tabs__item-wrp tabs__item-wrp--chat-list">
            <Avatar :name="tab.name" :bgColor="tab.color" :bgImage="tab.bgImage"/>
            <div>
              <div class="tabs__item-wrp-top">
                <div class="tabs__item-name">{{tab.name}}</div>
                <div class="tabs__item-time">{{tab.time}}</div>
              </div>
              <div class="tabs__item-wrp-main">
                {{tab.message}}
              </div>
            </div>
          </li>
        </a>
      </ul>
    </div>
    <div class="tabs__details" ref="test">
      <ChatWindow v-if="activeTabIndex === -1 && (this.$route.path == '/chat')"/>
      <slot v-show="activeTabIndex >= 0"></slot>
    </div>
  </div>
</template>

<script>
import ChatWindow from "@/components/Chat/Chat-window/Chat-window";
import SearchButton from "@/../public/images/search-button.svg?inline";
import SearchIcon from "@/../public/images/search-Icon.svg?inline";
import Avatar from "../Avatar/Avatar";
import {mapGetters} from "vuex";
import Vue from "vue";
export default {
  name: "Tabs",
  components: {Avatar, SearchButton, SearchIcon, ChatWindow},
  props:{
    array:{
      type:Array,
      required:false
    },
  },
  data() {
    return {
      searchValue:"",
      activeTabIndex:-1,
      tabs:{
        type:"",
        tabs:[]
      }
    };
  },
  mounted() {
    if (this.$route.path === "/chat"){
      this.tabs.type = "chat"
    }
    console.log('!', this.$slots.default)
    this.tabs.tabs = this.$slots.default.map(slot => slot.componentInstance)
  },
  watch:{
    array(){
      this.nextTick(() => {
        console.log(this.$slots)
      })
      this.tabs.tabs = this.$slots.default
      // this.tabs.tabs = this.$slots.default.map(slot => slot.componentInstance)
    },

  },
  computed:{
    ...mapGetters('profileModule',['getUser']),
    names(){
      if (this.name){
        let nameUser = this.name.split(' ', 2)
        let newname = nameUser.map((el) => el[0])
        return newname.join('')
      } else return ""
    },
    filteredTabs(){
      return this.tabs.tabs.filter(el => el.name.includes(this.searchValue))
    }
  },
  methods:{
    img(image){
      return `require('@/../public/${image}?inline')`
    },
    selectTab(selectedTab, index) {
      this.activeTabIndex = index
      this.filteredTabs.forEach(tab => {
        tab.isActive = (tab.name == selectedTab.name);
      });
    },
  }
}
</script>

<style scoped lang="scss" >
@import "Tabs";
@import "../Chat/Chat-list/Chat-list.scss";
</style>