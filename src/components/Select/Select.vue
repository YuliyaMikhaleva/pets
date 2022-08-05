<template>
    <div class="select">
      <label class="select__label">
        <input-block class="select__input" @focus="func" ref="inputBlock" v-model="value"><slot/></input-block>
  <!--        <input-block class="select__input type="text" :date="true">Дата рождения</input-block>-->
  <!--        <input class="select__input" @click="func" v-model="value" ref="input">-->
          <IconArrow class="select__input-arrow" ref="arrow"/>
      </label>
      <vue-custom-scrollbar class="scroll-area" :settings="settings">
      <ul class="select__list" ref="list">
        <li v-for="(item,index) of filteredArray" :key="item.text+index" class="select__list-item" @click="changeValue">{{item.text}}</li>
      </ul>
      </vue-custom-scrollbar>
    </div>
</template>

<script>
import InputBlock from "@/components/InputBlock/InputBlock";
import IconArrow from "@/../public/icons/icon-arrow.svg?inline";
import vueCustomScrollbar from 'vue-custom-scrollbar'

export default {
  name: "Select",
  components:{IconArrow, vueCustomScrollbar, InputBlock},
  props:{
    array:{
      type:Array,
      required:true,
      default: () => [],
    },
  },
  data(){
    return{
      value:"",
      openedList:false,
      settings: {
        suppressScrollY: false,
        suppressScrollX: false,
        wheelPropagation: false
      },
    }
  },
  computed:{
      filteredArray(){
        return this.array.filter(el => el.text.includes(this.value))
      }
  },
  watch:{
    value(){
      this.$emit('input', this.value)
    }
  },
  methods:{
    func(){
      let list = this.$refs.list
      list.classList.add('active');
      this.$refs.arrow.classList.add('select__input-arrow--opened')
      this.$refs.inputBlock.$refs.input.classList.add('active')
      console.log('11111111111',this.$refs.inputBlock.$refs.input)
      if (list.style.display === "flex"){

        list.style.display = "none";
      } else {


        list.style.display = "flex";
        console.log('1',list)
      }
    },
    blurFunc(){


        console.log('Событие расфокусировки')
        if (this.$refs.inputBlock.$refs.input.classList.contains('active')){
          this.$refs.inputBlock.$refs.input.classList.remove('active')
        }
        let list = this.$refs.list
        list.style.display = "none";


    },
    changeValue(e){
      if (e.target.classList.contains('select__list-item')){
        this.value = e.target.textContent;
        this.$refs.list.style.display = "none";
        this.$refs.arrow.classList.toggle('select__input-arrow--opened');
      } else {
        this.$refs.list.style.display = "none";
      }
      console.log('e1', e)

    }
  }
}
</script>

<style lang="scss" scoped>
  .select{
    position: relative;
    &__label{
      position: unset;
    }
    &__input-arrow{
      cursor: pointer;
      position: absolute;
      top: 50%;
      right: 8px;
      z-index: -1;
      path{
        stroke: white;
      }
      &--opened{
        transform: rotate(180deg);
      }
    }
    &__input{
      background: none;
      border: none;
      outline: none;
      transition: 0.4s;
      width: 100%;
      border-bottom: 1px solid white;
      color: #EDF2F7;
      font-family: 'Rubik';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      cursor: pointer;
      box-sizing: border-box;
    }
    &__list{
      z-index: 2;
      list-style: none;
      margin: 0;
      display: none;
      //overflow: hidden;
      background: #FFFFFF;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
      border-radius: 0px 0px 2px 2px;
      padding: 8px;
      box-sizing: border-box;
      flex-direction: column;
      gap: 10px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      //max-height: 300px;
    }
    &__list-item{
      cursor: pointer;
      color: #334155;
      font-family: 'Rubik';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      z-index: 3;
      &:hover{
        color: #4C6FFF;
      }
    }

  }
  .scroll-area {
    position: absolute;
    width: 100%;
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .scroll-area ::v-deep{
    .ps__thumb-y{
      background-color: #4C6FFF;
      width: 2px;
      z-index: 9;
    }
    .ps__rail-y{
      width: 2px;
    }
  }
</style>