<template>
        <div class="profile">
          <tabs class="profile__tabs">
            <tab name="Аккаунт" img="icons/icon-account.svg" selected>
              <AccountInfo/>
            </tab>
            <tab name="Настройки" img="icons/icon-settings.svg">
              <Settings/>
            </tab>
            <tab name="Ваши питомцы" img="icons/icon-pets.svg">
              <StartForm @addPet="addPet" ref="startform"/>
              <AboutPetForm class="profile__hidden-item" ref="form" @finish="goToPet"/>
              <FinishForm class="profile__hidden-item" ref="finishForm"/>
            </tab>
          </tabs>
        </div>
</template>

<script>
import Tabs from "@/components/Tabs/Tabs";
import Tab from "@/components/Tabs/Tab/Tab";
import AccountInfo from "@/components/Accaunt/Accaunt";
import Settings from "@/components/Settings/Settings";
import StartForm from "@/components/AboutPetForm/StartForm";
import AboutPetForm from "@/components/AboutPetForm/AboutPetForm";
import FinishForm from "@/components/AboutPetForm/FinishForm";

export default {
        name: "Profile",
        components: {FinishForm, AboutPetForm ,StartForm, Settings, AccountInfo, Tabs, Tab},
        methods:{
          addPet(){
            this.$refs.form.$el.classList.remove('profile__hidden-item');
            this.$refs.startform.$el.classList.add('profile__hidden-item');
          },
          goToPet(){
            this.$refs.form.$el.classList.add('profile__hidden-item');
            this.$refs.finishForm.$el.classList.remove('profile__hidden-item')
          }
        }
}
</script>

<style lang="scss" scoped>
  .profile{
    margin-top: 156px;
    color: white;
    font-family: Rubik;
    &__hidden-item{
      display: none;
    }

  }
  @media (max-width: 1320px) {
    .profile{
      margin-top: 0;
      //padding: 0 24px;
      &__tabs{
        grid-template-columns: 1fr;
        grid-row-gap: 25px;
        & >.tabs__details{
          max-width: 100%;
        }
      }
      & >.tabs__details{
        max-width: 100%;
        margin: 0 24px;
      }
      .tabs__links > ul{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
  }

</style>