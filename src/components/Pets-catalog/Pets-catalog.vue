<template>
  <masonry-wall
      :items="cats"
      :column-width="335"
      :gap="gap">
    <template #default="{ item, index }">
      <div
          class="item"
          :class="{ secondary: index % 2 === 0, accent: index % 2 === 1 }"
          :style="`height: ${item}px;`"
      >
        <Post
            :class="{ secondary: index % 2 === 0, accent: index % 2 === 1 }"
            :name="item.name"
            :tag="item.type"
            :likes="item.likes"
            :img="item.img"
            :bg="item.bgColor"
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
      columnWidth: 335,
      gap: 40,
      rtl: false,
    }
  },
  mounted() {
    this.loadPosts;
    this.loadFilteredPets;
  },
  computed: {
    ...mapGetters('filtersModule', ['getPosts', 'getFilteredPets']),
    ...mapActions('filtersModule',['loadPosts','loadFilteredPets']),
    cats() {
      return this.getPosts
      // return this.getFilteredPets
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