<template>
  <article class="new-post">
    <div class="new-post__wrp">
      <Avatar class="new-post__item" name="R" bg-color="linear-gradient(225deg, #FFEF5E 0%, #F7936F 100%);"/>
      <Avatar v-if="actualWidth>=1870 || actualWidth<=375" class="new-post__item" name="T" bg-color="linear-gradient(225deg, #D665FF 0%, #4C6FFF 100%)"/>
      <Avatar class="new-post__item" name="Q" bg-color="linear-gradient(225deg, #FFC656 0%, #F16063 100%)"/>
      <Avatar v-if="actualWidth<=768 && actualWidth>375" class="new-post__item" name="T" bg-color="linear-gradient(225deg, #D665FF 0%, #4C6FFF 100%)"/>

      <Avatar v-if="actualWidth<=768" class="new-post__item" name="J" bg-color="linear-gradient(225deg, #67E9F1 0%, #24E795 100%)"/>
      <Avatar v-if="actualWidth>=1870 || actualWidth<=768" class="new-post__item" name="Y" bg-color="linear-gradient(224.47deg, #FF92AE 8.18%, #FF3D9A 95.84%)"/>
      <Avatar v-if="actualWidth>768 || actualWidth<=375" class="new-post__item" name="J" bg-color="linear-gradient(225deg, #67E9F1 0%, #24E795 100%)"/>
      <NewPost class="new-post__add"/>
    </div>
    <Button class="new-post__btn" title="Напиши сейчас"/>
  </article>
</template>

<!--В идеале выводятся в цикле!!!-->

<script>
import NewPost from "@/../public/images/new-post.svg?inline";
import { Mixin } from "@/assets/Mixin";
import Avatar from "@/components/Avatar/Avatar";
import Button from "@/components/Button/Button";
export default {
  name: "New-post",
  components: {Button, Avatar, NewPost},
  mixins:[Mixin],
}
</script>

<style scoped lang="scss">
  @import "new-post.module";
</style>