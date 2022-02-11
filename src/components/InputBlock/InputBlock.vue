<template>
  <div class="input-block">
    <label  class="input-block__label" for="data">
      <div :class="{'transparent': auth}">
        <slot/>
      </div>
    </label>
    <input class="input-block__input" :type="type" id="data" :placeholder="placeholder"/>
    <p class="input-block__error">Error message</p>
  </div>
</template>

<script>
export default {
  name: "InputBlock",
  props:{
    placeholder:{type:String},
    type:{type:String}
  },

  computed:{
    auth(){
      if (this.$route.path=='/signIn'){
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .input-block{
    display: flex;
    flex-direction: column;
    color: var(--color-auth-text);
    &::placeholder{
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
    }
    &__label{
      font-weight: 400;
      font-size: 10px;
      line-height: 15px;
      padding-top: 3px;
      padding-left: 8px;
    }
    &__input{
      background: none;
      border: 0;
      border-bottom: 1px solid var(--color-auth-text);
      padding: 0;
      padding-top: 8px;
      padding-bottom: 8px;
      padding-left: 8px;
      color: var(--color-auth-text);
    }
    &__div{
      height: 17.99px;
    }
    &__error{
      text-align: end;
      font-weight: 400;
      font-style: normal;
      font-size: 8px;
      line-height: 12px;
      margin: 0;
    }
  }
  input::placeholder{
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: var(--color-auth-text);
  }

</style>