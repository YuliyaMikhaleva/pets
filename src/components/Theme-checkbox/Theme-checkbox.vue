<template>
  <div class="checkbox">
    <img class="checkbox__darkTheme" src="images/darkTheme.svg" alt="darkTheme">
    <img class="checkbox__lightTheme" src="images/lightTheme.svg" alt="darkTheme">
    <input class="checkbox__input" type="checkbox" id="switch" v-model="darkMode"/>
    <label class="checkbox__label" for="switch">Toggle</label>
  </div>
</template>

<script>
export default {
  name: "Theme-checkbox",
  data() {
    return {
      darkMode: false,
    }
  },
  mounted() {
    let bodyElement = document.body;
    bodyElement.classList.add("app-background");
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