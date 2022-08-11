<template>
  <div v-show="isActive" style="height: 100%; display: flex; flex-direction: column">
    <slot></slot>
    <div class="tabs-form-item__btns" :class="{'tabs-form-item__btns--one': (Number(name) == 1) }">
      <Button v-if="Number(name) != 1 && Number(name) != tabsLength" class="button button--save tabs-form-item__button" @click="$parent.goPrevTab">Назад</Button>
      <Button v-if="Number(name) != tabsLength" class="button button--save tabs-form-item__button" @click="goNext">Дальше</Button>
      <Button v-if="Number(name) === tabsLength" class="button button--save tabs-form-item__button tabs-form-item__button--finish" @click="goToPet">Завершить</Button>
    </div>

  </div>
</template>

<script>
import Button from "@/components/Button/Button";
import {mapActions} from "vuex";
export default {
  name: "TabsFormItem",
  components:{Button},
  props:{
    name:{
      type:String,
      required:true
    },
    img:{
      type:String,
      required:false
    },
    selected:{
      type:Boolean,
      default: false
    },
  },
  data(){
    return {
      isActive: false,
      tabsLength: 1,
      error:false
    };
  },
  computed:{
    ...mapActions('profileModule',['addErrors']),

  },
  mounted() {
    this.isActive = this.selected;
    this.tabsLength = this.$parent.$children.length
  },
  methods:{
    changeError(errorBool){
      this.error = errorBool
    },
    goNext(){
      if (this.error === false){
        this.$parent.goNextTab();
      }
    },
    goToPet(){
      this.$emit('finish2')
    }
  }
}
</script>

<style scoped lang="scss">
  @import "TabsFormItem";
</style>