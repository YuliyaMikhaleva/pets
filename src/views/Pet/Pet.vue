<template>
  <div class="pet">
    <PetCard/>
  </div>
</template>

<script>
import PetCard from "@/components/Pet-card/Pet-card";
export default {
  name: "Pet",
  components: {PetCard},
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style scoped>

</style>