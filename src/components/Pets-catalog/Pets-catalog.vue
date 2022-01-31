<template>
  <masonry-wall
      :items="pets"
      :column-width="actualColumnWidth"
      :gap="actualGap"
  >
    <template #default="{ item, index }">
      <div
          class="item"
          :class="{ secondary: index % 2 === 0, accent: index % 2 === 1 }"
      >
        <Card
            :class="{ secondary: index % 2 === 0, accent: index % 2 === 1 }"
            :name="item.name"
            :tag="item.type"
            :likes="item.likes"
            :img="item.img"
            :bg="item.bgColor"
            style="height: 100%"
            :imgHeight="(index % 2 === 0)  ? 181 : 250" />
      </div>
    </template>
  </masonry-wall>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Card from "@/components/Card/Card";
import { Mixin } from "@/assets/Mixin";


export default {
  name: "Pets-catalog",
  components: {Card},
  mixins:[Mixin],
  mounted() {
    if (!this.pets.length){
      this.loadCatalog;
    }
  },
  computed: {
    ...mapGetters('filtersModule', ['getFilteredPets']),
    ...mapActions('filtersModule',['loadCatalog']),
    pets(){
      return this.getFilteredPets
    },
    actualWidth(){
      return this.width
    },
    actualGap(){
      if (this.actualWidth >= 1281){
        return 40
      } else if (this.actualWidth > 768 && this.actualWidth <=1280){
        return 20
      } else if (this.actualWidth > 375 && this.actualWidth <=768){
        return 30
      } else {
        return 20
      }
    },
    actualColumnWidth(){
      if (this.actualWidth >= 1281){
        return 335
      } else if (this.actualWidth > 768 && this.actualWidth <=1280){
        return 325
      } else if (this.actualWidth > 375 && this.actualWidth <=768){
        return 345
      } else {
        return 325
      }
    }
  },
}
</script>

<style scoped lang="scss">

</style>