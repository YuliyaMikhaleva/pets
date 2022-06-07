<template>
  <section class="about-pet">
    <div class="about-pet__steps">
      <TabsForm>
        <Tab name="1" :selected="true">
          <form class="about-pet__form">
            <h3 class="about-pet__form-title">Давайте узнаем немного о вашем питомце?</h3>
            <div class="about-pet__form-block">

              <InputBlock class="about-pet__form">Имя питомца</InputBlock>
            </div>

            <label for="yourPet" class="about-pet__label-item">
              <textarea id="yourPet" class="about-pet__form-textarea" placeholder="Опишите вашего питомца"/>
            </label>
            <div>
              <p>С какой целью выкладываете питомца?</p>
              <div class="about-pet__form-radio-items">
                <div class="about-pet__form-radio-item">
                  <input class="about-pet__form-radio-button" type="radio" id="radio1" name="Цель" checked>
                  <label for="radio1">Просто показываю</label>
                </div>
                <div class="about-pet__form-radio-item">
                  <input  class="about-pet__form-radio-button" type="radio" id="radio2" name="Цель">
                  <label for="radio2">Отдаю в добрые руки</label>
                </div>
                <div class="about-pet__form-radio-item">
                  <input class="about-pet__form-radio-button" type="radio" id="radio3" name="Цель">
                  <label for="radio3">Торгую микрочелами</label>
                </div>
              </div>
            </div>
          </form>

        </Tab>
        <Tab name="2">этап 2</Tab>
        <Tab name="3">этап 3</Tab>
        <Tab name="4">этап 4</Tab>
      </TabsForm>
    </div>

  </section>

</template>

<script>
// import InputBlock from "@/components/InputBlock/InputBlock";
import TabsForm from "@/components/Tabs/TabsForm/TabsForm";
import Tab from "@/components/Tabs/Tab/Tab";
export default {
  name: "AboutPet",
  components: {TabsForm, Tab}
}
</script>

<style scoped lang="scss">
  @import "AboutPet";
</style>