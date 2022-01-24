<template>
        <div class="pets">
          <div class="pets__filters">

            <div class="pets__filter-block" v-for="(item,index) in filters" :key="index">
              <label :for="'check'+index" class="filter__label">
                <div class="pets__filter">
                  <div class="pets__wrp-img">
                    <FilterCats class="pets__filter-img"/>
                  </div>
                  <span>{{item}}</span>
                </div>
              </label>
              <input class="pets__filter-input" :id="'check'+index" type="checkbox">
            </div>

          </div>

          <div class="pets__catalog"></div>
        </div>
</template>

<script>
import FilterCats from "../../public/images/Filter-cats.svg";
    export default {
        name: "Pets",
      components:{FilterCats},
      data(){
          return{
            filters:['Коты', 'Собаки', 'Птицы', 'Зайцы', 'Мыши', 'Другие']

          }
      },
      mounted(){
        document.querySelectorAll(".pets__filter-input").forEach((el) => el.checked = true);

      }
    }
</script>

<style lang="scss" scoped>
  @import "./src/assets/variables";
  .pets{
    display: grid;
    grid-template-columns: 260px auto;
    grid-column-gap: 40px;
    //height: 90%;
    &__filters{
      //border: 1px solid white;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px;
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