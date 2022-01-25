<template>
  <masonry-wall
      :items="items"
      :column-width="columnWidth"
      :gap="gap">
    <template #default="{ imgHeight,item, index }">
      <div
          class="item"
          :class="{ secondary: index % 2 === 0, accent: index % 2 === 1 }"
          :style="`height: ${item}px;`"
      >
        <Post
            :class="{ secondary: index % 2 === 0, accent: index % 2 === 1 }"
            name="1"
            tag="123"
            :likes="5"
            img="images/petBob.png"
            bg="blue"
            style="height: 100%"
            :imgHeight="(index % 2 === 0) ? 181 : 250" />
      </div>
    </template>
  </masonry-wall>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Post from "@/components/Post/Post";

console.info()

export default {
  name: "Pets-catalog",
  components: {Post},
  data() {
    return {
      items: [290, 359, 290, 359, 290, 359, 290, 359,290, 359, 290, 359],
      posts:this.cats,
      columnWidth: 335,
      gap: 40,
      rtl: false,
    }
  },
  mounted() {
    this.loadPosts;
  },
  computed: {
    ...mapGetters('postsModule', ['getPosts']),
    ...mapActions('postsModule',['loadPosts']),
    cats() {
      return this.getPosts
    },
  },

}
</script>

<style scoped lang="scss">
  //.item{
  //  background: #66CB9F;
  //  border: 1px solid white;
  //}
</style>