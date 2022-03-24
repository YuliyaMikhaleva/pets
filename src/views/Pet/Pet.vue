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
}
</script>

<style lang="scss" src="./Pet.scss" scoped>

</style>