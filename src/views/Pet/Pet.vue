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
      padding-right: 30px;
      min-width: 1702px;
    }
  }

  @media (max-width: 1280px) {
    .pet{
      &__pet-card{
        padding-right: 25px;
        box-sizing: border-box;
        margin-bottom: 160px;
        min-width: 1130px;
      }
    }
  }

  @media (max-width: 768px) {
    .pet{
      &__pet-card{
        padding-right: 24px;
        min-width: 0;
        margin-top: 324px;
        padding-left: 24px;
        box-sizing: border-box;
        margin-bottom: 8px;
      }
    }
  }
</style>