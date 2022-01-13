<template>
  <div class="flex-wrapper">
    <div class="single-chart">
      <svg viewBox="0 0 36 36" class="circular-chart red">
        <path class="circle-bg"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path class="circle"
              :stroke-dasharray="number[0]+',100'"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20.35" class="percentage"></text>
      </svg>
    </div>

    <div class="single-chart">
      <svg viewBox="0 0 36 36" class="circular-chart yellow">
        <path class="circle"
              :stroke-dasharray="number[1]+',100'"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20.35" class="percentage"></text>
      </svg>
    </div>

    <div class="single-chart">
      <svg viewBox="0 0 36 36" class="circular-chart green">
        <path class="circle"
              :stroke-dasharray="number[2]+',100'"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20.35" class="percentage"></text>
      </svg>
    </div>

  </div>
</template>

<script>


export default {
  name: 'Chart',
  data(){
    return {
      sections: [ 25,35,18]
    };
  },
  computed: {
    number() {
      // const newSections = this.sections.sort((a,b) => b-a);
      // console.log(newSections,'newSections');
      // const indexes = this.sections.map((index) => index)
      const newArray = this.sections.map((el, index) => {
        if (index != 0){
          let newIndex = index-1;

          return el+this.sections[newIndex]
        } else {
          return el
        }

      })
      console.log('newArray', newArray)


      // const newArr = this.sections.map( (el) => {
      //   const array = this.sections.filter((item) => item !== el && item > el);//массив без конкретного элемента
      //   const summArr = array.reduce((a, b) => a+b, 0);//сумма этого массива
      //   return el + summArr
      // })





      // const summ = this.sections.reduce((a,b) => a+b, 0)//сумма всех элементов секций
      // const newArr = this.sections.filter((el,index) => el)
      // const newArr = this.sections.map((el, index) => {
      //   if (this.sections.indexOf(el) !== index){
      //     summ
      //   }
      //
      // })
      // console.log(newArray.sort((a,b) => b-a))
      return newArray.sort((a,b) => b-a)
    },
  }

}

</script>

<style lang="scss" scoped>

.flex-wrapper {
  display: flex;
  flex-flow: row nowrap;
}

.single-chart {
  position:absolute;
  width: 100%;
  justify-content: space-around ;
}

.circular-chart {
  display: block;
  margin: 10px auto;
  max-width: 80%;
  max-height: 250px;
}

.circle-bg {
  fill: none;
  stroke: #334155;
  stroke-width: 2.8;
}

.circle {
  fill: none;
  stroke-width: 2.8;
  stroke-linecap: round;
  animation: progress 1s ease-out forwards;
}

@keyframes progress {
  0% {
    stroke-dasharray: 30 100;
  }
}

.circular-chart.red .circle {
  stroke: #F16063;
}

.circular-chart.yellow .circle {
  stroke: #FFC542;
}

.circular-chart.green .circle {
  stroke: #66CB9F;
}

.percentage {
  fill: #666;
  font-family: sans-serif;
  font-size: 0.5em;
  text-anchor: middle;
}

</style>
