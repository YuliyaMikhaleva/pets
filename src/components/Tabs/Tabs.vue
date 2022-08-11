<template>
  <div class="tabs">
    <div class="tabs__links">
      <ul>
        <a v-for="(tab, index) in tabs" :href="tab.href" @click="selectTab(tab)" :key="tab+index" class="tabs__item"   :class="{ 'tabs__item--active': tab.isActive }">
          <li class="tabs__item-wrp">
            <Component
                :is="require(`@/../public/${tab.img}?inline`)"
            />
            {{ tab.name }}
          </li>
        </a>
      </ul>
    </div>
    <div class="tabs__details">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "Tabs",
  data() {
    return {
      tabs: []
    };
  },
  created() {
    this.tabs = this.$children;
  },
  computed:{

  },
  methods:{
    img(image){
      return `require('@/../public/${image}?inline')`
    },
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name == selectedTab.name);
      });
    }
  }
}
</script>

<style scoped lang="scss" >
@import "Tabs";
</style>