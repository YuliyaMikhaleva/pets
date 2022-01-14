<template>
  <article class="new-post">
    <div class="new-post__wrp">
      <Avatar class="new-post__item" name="R" bg="red"/>
      <Avatar class="new-post__item" name="T" bg="red"/>
      <Avatar class="new-post__item" name="Q" bg="red"/>
      <Avatar class="new-post__item" name="Y" bg="red"/>
      <Avatar class="new-post__item" name="J" bg="red"/>
      <Avatar class="new-post__item" name="+" bg="transparent"/>
    </div>
    <button class="new-post__btn">Напиши сейчас</button>
  </article>
</template>

<script>
import Avatar from "@/components/Avatar/Avatar";
export default {
  name: "New-post",
  components: {Avatar}
}
</script>

<style scoped lang="scss">
  @import "new-post.module";
</style>