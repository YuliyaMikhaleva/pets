<template>
  <div class="pet">
    <PetCard class="pet__pet-card"
             :name="name"
             :id="id"
    />
  </div>
</template>

<script>
import PetCard from "@/components/Pet-card/Pet-card";
export default {
  name: "Pet",
  components: {PetCard},
  props:{
    name:String,
    id:Number
  },
  mounted() {
    if (this.$route.matched[0].path=='/pets/:name'){
      document.querySelector('body').style.minWidth = '375px';
    }
  }

}
</script>

<style lang="scss" src="./Pet.scss" scoped>

</style>