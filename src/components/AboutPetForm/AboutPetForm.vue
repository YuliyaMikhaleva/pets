<template>
  <section class="about-pet">
      <TabsForm>
        <TabsFormItem name="1" :selected="true">
          <PetForm/>
        </TabsFormItem>
        <TabsFormItem name="2">
          <FileInput :formats="['image/jpg', 'image/jpeg', 'image/png']"/>
        </TabsFormItem>
        <TabsFormItem name="3">
          <PetForm3/>
        </TabsFormItem>
        <TabsFormItem name="4" @finish2="func">
          <PetForm4/>
        </TabsFormItem>
      </TabsForm>

  </section>

</template>

<script>
import TabsForm from "@/components/Tabs/TabsForm/TabsForm";
import TabsFormItem from "@/components/Tabs/TabsForm/TabsFormItem/TabsFormItem";
import PetForm from "@/components/AboutPetForm/form-steps/PetForm/PetForm";
import FileInput from "@/components/AboutPetForm/form-steps/FileInput/FileInput";
import PetForm3 from "@/components/AboutPetForm/form-steps/PetForm3/PetFormStep3";
import PetForm4 from "@/components/AboutPetForm/form-steps/PetForm4/PetFormStep4";

export default {
  name: "AboutPetForm",
  components: {FileInput, PetForm, TabsFormItem, TabsForm, PetForm3, PetForm4},
  methods:{
    func(){
      this.$emit('finish')
    }
  }
}
</script>

<style scoped lang="scss">
  @import "AboutPetForm";
</style>