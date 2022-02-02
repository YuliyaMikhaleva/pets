<template>
  <div class="pet">
    <PetCard class="pet__pet-card"
             :img="img"
             :location="location"
             :likes="likes"
             :sex="sex"
             :images="images"
             :name="name"
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
    location:String,
    img:String,
    likes:Number,
    sex:Boolean,
    images:Array
  },
  mounted() {
    console.log('props', this.props)
    console.log('img', this.img)
    console.log(this.$route)
    console.log(this.$router)
  }
}
</script>

<style lang="scss" scoped>
  .pet{
    &__pet-card{
      margin-top: 50px;
      margin-bottom: 124px;
    }
  }
</style>