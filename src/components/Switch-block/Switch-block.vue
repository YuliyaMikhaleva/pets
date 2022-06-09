<template>
  <div class="switch-block">
    <SwitchItem @change="$emit('change')" :value="value"/>
    <div class="switch-block__title"><slot/></div>
  </div>

</template>

<script>
import SwitchItem from "@/components/Switch-block/Switch-item/Switch-item";
export default {
  name: "SwitchBlock",
  components: {SwitchItem},
  props:{
    value:{
      type:Boolean,
    },
  }
}
</script>

<style scoped lang="scss">
  @import "Switch-block";
</style>