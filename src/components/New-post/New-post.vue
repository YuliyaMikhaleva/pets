<template>
  <article class="new-post">
    <div class="new-post__wrp">
      <Avatar class="new-post__item" name="R" bg-color="linear-gradient(225deg, #FFEF5E 0%, #F7936F 100%);"/>
      <Avatar class="new-post__item" name="T" bg-color="linear-gradient(225deg, #D665FF 0%, #4C6FFF 100%)"/>
      <Avatar class="new-post__item" name="Q" bg-color="linear-gradient(225deg, #FFC656 0%, #F16063 100%)"/>
      <Avatar v-if="this.width<=375" class="new-post__item" name="J" bg-color="linear-gradient(225deg, #67E9F1 0%, #24E795 100%)"/>
      <Avatar class="new-post__item" name="Y" bg-color="linear-gradient(224.47deg, #FF92AE 8.18%, #FF3D9A 95.84%)"/>
      <Avatar class="new-post__item" name="J" bg-color="linear-gradient(225deg, #67E9F1 0%, #24E795 100%)"/>
      <svg class="new-post__add" width="60" height="60" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect class="new-post__circle" x="1.00391" y="1" width="60" height="60" rx="30" stroke="white" stroke-dasharray="8 8"/>
        <path class="new-post__plus" d="M30.2119 35.472C30.1052 35.472 30.0092 35.4347 29.9239 35.36C29.8492 35.2747 29.8119 35.1787 29.8119 35.072V32.144H26.9639C26.8466 32.144 26.7452 32.1067 26.6599 32.032C26.5852 31.9573 26.5479 31.8613 26.5479 31.744V30.576C26.5479 30.4587 26.5852 30.3627 26.6599 30.288C26.7452 30.2027 26.8466 30.16 26.9639 30.16H29.8119V27.328C29.8119 27.2107 29.8492 27.1147 29.9239 27.04C30.0092 26.9653 30.1052 26.928 30.2119 26.928H31.5239C31.6412 26.928 31.7372 26.9653 31.8119 27.04C31.8866 27.1147 31.9239 27.2107 31.9239 27.328V30.16H34.7559C34.8732 30.16 34.9692 30.2027 35.0439 30.288C35.1186 30.3627 35.1559 30.4587 35.1559 30.576V31.744C35.1559 31.8613 35.1186 31.9573 35.0439 32.032C34.9692 32.1067 34.8732 32.144 34.7559 32.144H31.9239V35.072C31.9239 35.1787 31.8866 35.2747 31.8119 35.36C31.7372 35.4347 31.6412 35.472 31.5239 35.472H30.2119Z" fill="white"/>
      </svg>
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