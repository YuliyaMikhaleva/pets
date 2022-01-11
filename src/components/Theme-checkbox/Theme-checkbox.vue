<template>
  <div class="checkbox">
    <img class="checkbox__darkTheme" src="images/darkTheme.svg" alt="darkTheme">
    <img class="checkbox__lightTheme" src="images/lightTheme.svg" alt="darkTheme">
    <input class="checkbox__input" type="checkbox" id="switch" />
    <label class="checkbox__label" for="switch">Toggle</label>
  </div>
</template>

<script>
export default {
  name: "Theme-checkbox"
}
</script>

<style lang="scss" scoped>
  @import "Themecheckbox.module";
</style>