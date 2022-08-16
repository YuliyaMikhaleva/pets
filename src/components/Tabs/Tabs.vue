<template>
  <div class="tabs">
    <div class="tabs__links">
      <div class="chat-list__top" v-if="tabs.type" >
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
      <ul>
        <a v-for="(tab, index) in tabs" :href="tab.href" @click="selectTab(tab)" :key="tab+index" class="tabs__item"   :class="{ 'tabs__item--active': tab.isActive }">
          <li class="tabs__item-wrp" v-if="tab.img">
            <Component
                :is="require(`@/../public/${tab.img}?inline`)"
            />
            {{ tab.name }}
          </li>
          <li v-if="tab.type" class="tabs__item-wrp tabs__item-wrp--chat-list">
            <div class="tabs__item-avatar" :style='`background:${tab.color}`'>{{names}}</div>

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
<!--          <li v-if="tab.type === 'chat-list-item' " class="tabs__item-wrp">-->
<!--            <Avatar :name="tab.name" :bg-color="tab.color"/>-->
<!--            <div class="tabs__item-wrp-top">-->
<!--              <div>{{tab.name}}</div>-->
<!--              <div>{{tab.time}}</div>-->
<!--            </div>-->
<!--            <div class="tabs__item-wrp-main">-->
<!--              {{tab.message}}-->
<!--            </div>-->
<!--          </li>-->
        </a>
      </ul>
    </div>
    <div class="tabs__details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import SearchButton from "@/../public/images/search-button.svg?inline";
import SearchIcon from "@/../public/images/search-Icon.svg?inline";
import Avatar from "../Avatar/Avatar";
import {mapGetters} from "vuex";
export default {
  name: "Tabs",
  components: {Avatar, SearchButton, SearchIcon},
  data() {
    return {
      tabs: []
    };
  },
  mounted() {

    this.tabs = this.$children
    console.log(this)
    // let newArr = this.$children.filter(el => el.className !== 'avatar')

    // console.log(this)
    // console.log('tabs', this.$children.filter(el => el.$el !== this.$refs.avatar) )
  },

  // mounted() {
  //   this.tabs = this.childNodes
  // },
  computed:{
    ...mapGetters('profileModule',['getUser']),
    names(){
      if (this.name){
        let nameUser = this.name.split(' ', 2)
        let newname = nameUser.map((el) => el[0])
        return newname.join('')
      } else return ""
    },
  },
  methods:{
    img(image){
      return `require('@/../public/${image}?inline')`
    },
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name == selectedTab.name);
      });
    },
  }
}
</script>

<style scoped lang="scss" >
@import "Tabs";
</style>