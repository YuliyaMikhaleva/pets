<template>
        <div class="pets">
          <div>
            <PetsFilters/>
          </div>
          <PetsCatalog class="pets__catalog"/>

        </div>
</template>

<script>
    import PetsFilters from "@/components/Pets-filters/Pets-filters";
    import PetsCatalog from "@/components/Pets-catalog/Pets-catalog";
export default {
        name: "Pets",
  components: {PetsCatalog, PetsFilters},
    }
</script>

<style lang="scss" scoped>
  @import "./src/assets/variables";
  .pets{
    display: grid;
    grid-template-columns: 260px auto;
    grid-column-gap: 40px;
    margin-top: 85px;
    margin-right: 30px;
    //height: 90%;
    &__filters{
      //border: 1px solid white;
      //display: grid;
      //grid-template-columns: 1fr 1fr 1fr;
      //grid-gap: 20px;
    }
    &__filter{
      width: 73px;
      height: 73px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      display: flex;
      color: white;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: Rubik;
      font-style: normal;
      font-weight: 600;
      font-size: 10px;
      line-height: 12px;
    }
    &__catalog{
      //border: 1px solid white;
    }

    &__title{
      color: var(--color-text);
    }
    &__filter-input{
      //display: none;
    }
    &__filter-input:checked ~ label>div{
      transform: scale(2);
      //display: none;
    }
    &__filter-img{
      display: flex;
      justify-content: center;
      margin: 0;
    }
    &__filter-block{
      width: 73px;
      height: 73px;
    }
    &__wrp-img{
      width: 42px;
      height: 42px;
      background: #4C6FFF;
      border-radius: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .pets__filter-block input[type="checkbox"]:checked + label{
    background: green;
  }
</style>