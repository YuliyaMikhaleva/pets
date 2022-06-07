<template>
  <div class="tabs-form">
    <div >
      <ul class="tabs-form__links">
        <a v-for="(tab, index) in tabs" :href="tab.href" @click="selectTab(tab)" :key="tab+index" class="tabs-form__item">
          <li class="tabs-form__item-wrp" :class="{'tabs-form__item-wrp--active': tab.isActive }" >
              {{ tab.name }}
          </li>
          <div v-if="index < (tabs.length-1)" class="tabs-form__item-scrollbar">
            <div :class="{'tabs-form__item-scrollbar--active': tab.isActive }"></div>
          </div>
        </a>

      </ul>
    </div>
    <div class="tabs-form__details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabsForm",
  data() {
    return {
      tabs: []
    };
  },
  created() {
    this.tabs = this.$children;
  },
  methods:{
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name == selectedTab.name);
      });
    }
  }
}
</script>

<style scoped lang="scss">
  @import "TabsForm";
</style>