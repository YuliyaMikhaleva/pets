<template>
  <div class="tabs-form">
    <div>
      <ul class="tabs-form__links">
        <a v-for="(tab, index) in tabs" :href="tab.href" @click="selectTab(tab)" :key="tab+index" class="tabs-form__item">
          <li class="tabs-form__item-wrp" :class="{'tabs-form__item-wrp--active': (Number(tab.name) <= Number(tabActive)) }" >
              {{ tab.name }}
          </li>
          <div v-if="index < (tabs.length-1)" class="tabs-form__item-scrollbar">
            <div v-if="tab.isActive" :class="{'tabs-form__item-scrollbar--active': (Number(tab.name) <= Number(tabActive)) }"></div>
            <div v-else :class="{'tabs-form__item-scrollbar--not-active': (Number(tab.name) <= Number(tabActive)) }"></div>
          </div>
        </a>

      </ul>
    </div>
    <div class="tabs-form__details">
      <slot/>
    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  name: "TabsForm",

  data() {
    return {
      tabs: [],
      tabActive:"1",
    };
  },
  created() {
    this.tabs = this.$children;
  },
  computed:{
    ...mapGetters('profileModule',['getPetsInfo', 'getErrors']),
  },
  methods:{
    ...mapActions('profileModule',['addErrors']),
    selectTab(selectedTab) {
      if (Number(selectedTab.name) <= (Number(this.tabActive)+1)){
        this.tabs.forEach(tab => {
          tab.isActive = (tab.name == selectedTab.name);
          this.tabActive = selectedTab.name
        });
      }

    },
    goNextTab(){
      let nextTab = String(Number(this.tabActive) + 1);
      let maxTab = this.tabs.length;
      this.tabs.forEach(tab => {
        if (Number(nextTab) <= maxTab ){
          tab.isActive = (tab.name == nextTab);
          this.tabActive = nextTab;
        }
      });
    },
    goPrevTab(){
      let prevTab = String(Number(this.tabActive) - 1);//предыдущий этап
      this.tabs.forEach(tab => {
        if (Number(prevTab) >= 1 ){
          tab.isActive = (tab.name == prevTab);
          this.tabActive = prevTab;
        }
      });
    },
  },

}
</script>

<style scoped lang="scss">
  @import "TabsForm";
</style>