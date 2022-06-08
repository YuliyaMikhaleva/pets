<template>
  <section class="about-pet">
    <div class="about-pet__steps">
      <TabsForm>
        <TabsFormItem name="1" :selected="true" title-btn="Дальше">
          <PetForm/>
        </TabsFormItem>
        <TabsFormItem name="2" title-btn="Дальше">
          <FileInput :formats="['image/jpg', 'image/jpeg', 'image/png']"/>
        </TabsFormItem>
        <TabsFormItem name="3" title-btn="Дальше">этап 3</TabsFormItem>
        <TabsFormItem name="4" title-btn="Отправить">этап 4</TabsFormItem>
      </TabsForm>
    </div>

  </section>

</template>

<script>
import TabsForm from "@/components/Tabs/TabsForm/TabsForm";
import TabsFormItem from "@/components/Tabs/TabsForm/TabsFormItem/TabsFormItem";
import PetForm from "@/components/AboutPetForm/form-steps/PetForm/PetForm";
import FileInput from "@/components/AboutPetForm/form-steps/FileInput/FileInput";
export default {
  name: "AboutPetForm",
  components: {FileInput, PetForm, TabsFormItem, TabsForm}
}
</script>

<style scoped lang="scss">
  @import "AboutPetForm";
</style>