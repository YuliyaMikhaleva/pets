<template>
  <form class="chat-popup" @submit="func">
    <input type="text" class="chat-popup__string" v-model="chatPopupInput" @keyup.enter="e => func(e)" :placeholder="placeholder">
    <Button class="button button--save" type="submit">
      <slot/>
    </Button>
  </form>
</template>

<script>
import Button from "@/components/Button/Button";
export default {
  name: "Chat-popup",
  props:{
    method: {
      type: Function,
    },
    placeholder: {
      type: String,
      default:""
    },
  },
  components:{Button},
  data(){
    return{
      chatPopupInput:"",
    }
  },
  methods:{
    func(e){
      e.preventDefault()
      this.$emit('method', this.chatPopupInput);
      this.chatPopupInput = ""

    }
  }
}
</script>

<style scoped lang="scss">
  .chat-popup{
    background-color: var(--bg-dark);
    position: absolute;
    z-index: 222;
    border-radius: 10px;
    padding: 10px;
    width: 300px;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    background: var(--bg-button);
    color: white;
    display: none;
    border: 2px solid #4C6FFF;
    background: var(--bg-dark);
    button{
      display: block;
      margin: 0 auto;
    }
    &__string{
      margin-bottom: 20px;
      width: 100%;
      background: none;
      border: none;
      border-bottom: 1px solid white;
      color: white;
      outline: none;
      text-align: center;
      font-family: Rubik;
      &::placeholder{
        font-family: Rubik;
        text-align: center;
      }
    }
  }
</style>