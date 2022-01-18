<template>
  <article class="new-post">
    <div class="new-post__wrp">
      <Avatar class="new-post__item" name="R" bg-color="linear-gradient(225deg, #FFEF5E 0%, #F7936F 100%);"/>
      <Avatar class="new-post__item" name="T" bg-color="linear-gradient(225deg, #D665FF 0%, #4C6FFF 100%)"/>
      <Avatar class="new-post__item" name="Q" bg-color="linear-gradient(225deg, #FFC656 0%, #F16063 100%)"/>
      <Avatar v-if="this.width<=375" class="new-post__item" name="J" bg-color="linear-gradient(225deg, #67E9F1 0%, #24E795 100%)"/>
      <Avatar class="new-post__item" name="Y" bg-color="linear-gradient(224.47deg, #FF92AE 8.18%, #FF3D9A 95.84%)"/>
      <Avatar class="new-post__item" name="J" bg-color="linear-gradient(225deg, #67E9F1 0%, #24E795 100%)"/>
      <Avatar class="new-post__item" name="+" bg-color="transparent"/>
    </div>
    <button class="new-post__btn">Напиши сейчас</button>
  </article>
</template>

<script>
import Avatar from "@/components/Avatar/Avatar";
export default {
  name: "New-post",
  components: {Avatar},
  data(){
    return {
      width: null
    };
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
  },
  created() {
    window.addEventListener('resize', this.updateWidth);
    this.updateWidth();
  },
}
</script>

<style scoped lang="scss">
  @import "new-post.module";
</style>