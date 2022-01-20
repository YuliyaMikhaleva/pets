<template>
  <div class="chart">
    <div class="chart__item">
      <svg viewBox="0 0 36 36" class="chart__svg">
        <path class="chart__svg-bg"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20.35" class="chart__txt">{{ maxPercent }}%</text>
      </svg>
    </div>
      <div v-for="item of indexes" :key="item" :styles="styles">
        <div class="chart__item">
          <svg viewBox="0 0 36 36" :class="'chart__svg '+styles[item]">
            <path class="chart__circle"
                  :stroke-dasharray="number[item]+',100'"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
        </div>
      </div>
  </div>
</template>

<script>


export default {
  name: 'Chart',
  data(){
    return {
      sections: [25,11,26],
      styles:['red','yellow','green','blue']
    };
  },
  computed: {
    indexes(){
      return this.sections.map((el) => this.sections.indexOf(el))
    },
    number() {
      const indexes = this.sections.map((el) => this.sections.indexOf(el))//Все индексы
      //перебираем массив всех элементов
      const elements = this.sections.map((el) => {
        let currentIndex = this.sections.indexOf(el);//индекс текущего элемента
        let indexArr = indexes.filter((el) => el<currentIndex);//все индексы, которые меньше индекса текущего элемента
        let result = indexArr.reduce((summ, current) => summ+this.sections[current],el)//добавляем к каждому элементу все предыдущие элементы
        return result
      })
      return elements.sort((a,b) => b-a)
    },
    maxPercent(){
      let element = this.number[0];
      return element
    }
  }

}

</script>

<style lang="scss" scoped>
  @import "Chart.module";
</style>
