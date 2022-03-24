<template>
  <div class="checkbox">
    <DarkTheme class="checkbox__darkTheme"/>
    <LightTheme class="checkbox__lightTheme"/>
    <input class="checkbox__input" type="checkbox" id="switch" v-model="darkMode" checked/>
    <label class="checkbox__label" for="switch">Toggle</label>
  </div>
</template>

<script>
import LightTheme from "@/../public/images/light.svg?inline";
import DarkTheme from "@/../public/images/dark.svg?inline";
export default {
  name: "Theme-checkbox",
  components:{LightTheme,DarkTheme},
  data() {
    return {
      darkMode: false,
    }
  },
  mounted() {
    let bodyElement = document.body;
    bodyElement.classList.add("app-background");

     if (localStorage.theme === 'light'){
      this.darkMode = true;
    }
  },
  watch: {
    darkMode: function () {
      let htmlElement = document.documentElement;
      if (!this.darkMode) {
        localStorage.setItem("theme", 'dark');
        htmlElement.setAttribute('theme', 'dark');
      } else {
        localStorage.setItem("theme", 'light');
        htmlElement.setAttribute('theme', 'light');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "Themecheckbox.module";
</style>