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
        <TabsFormItem name="4">этап 4</TabsFormItem>
      </TabsForm>

  </section>

</template>

<script>
import TabsForm from "@/components/Tabs/TabsForm/TabsForm";
import TabsFormItem from "@/components/Tabs/TabsForm/TabsFormItem/TabsFormItem";
import PetForm from "@/components/AboutPetForm/form-steps/PetForm/PetForm";
import FileInput from "@/components/AboutPetForm/form-steps/FileInput/FileInput";
import PetForm3 from "@/components/AboutPetForm/form-steps/PetForm3/PetFormStep3";
export default {
  name: "AboutPetForm",
  components: {FileInput, PetForm, TabsFormItem, TabsForm, PetForm3}
}
</script>

<style scoped lang="scss">
  @import "AboutPetForm";
</style>