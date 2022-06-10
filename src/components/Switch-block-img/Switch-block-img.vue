<template>
  <div class="switch-block-img">
    <SwitchItemImg @change="$emit('change')" :value="value"/>
    <div class="switch-block-img"><slot/></div>
  </div>

</template>

<script>
import SwitchItemImg from "@/components/Switch-block-img/Switch-item-img/Switch-item-img";
export default {
  name: "SwitchBlockImg",
  components: {SwitchItemImg},
  props:{
    value:{
      type:Boolean,
    },
  },
}
</script>

<style scoped lang="scss">
  @import "Switch-block-img";
</style>