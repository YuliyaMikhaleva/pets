<template>
        <div class="profile">
          <tabs>
            <tab name="Аккаунт" img="icons/icon-account.svg" :selected="true">
              <AccountInfo/>
            </tab>
            <tab name="Настройки" img="icons/icon-settings.svg">
              <Settings/>
            </tab>
            <tab name="Ваши питомцы" img="icons/icon-pets.svg">
              <AboutPetForm/>
            </tab>
          </tabs>
        </div>
</template>

<script>
import Tabs from "@/components/Tabs/Tabs";
import Tab from "@/components/Tabs/Tab/Tab";
import AccountInfo from "@/components/Accaunt/Accaunt";
import Settings from "@/components/Settings/Settings";
import AboutPetForm from "@/components/AboutPetForm/AboutPetForm";

export default {
        name: "Profile",
        components: {AboutPetForm, Settings, AccountInfo, Tabs, Tab},
}
</script>

<style lang="scss" scoped>
  .profile{
    margin-top: 156px;
    color: white;
    font-family: Rubik;
  }
</style>