<template>
  <section class="settings">
    <h3 class="settings__title">Настройки</h3>
    <h4 class="settings__group-title">Аккаунт</h4>
      <SwitchBlock @change="enableNotifications" class="settings__item" :value="settings.enableNotifications">Включить уведомления</SwitchBlock>
      <SwitchBlock @change="getNews" class="settings__item" :value="settings.getNews">Получать новостную рассылку</SwitchBlock>
    <h4 class="settings__group-title">Приложение</h4>
      <SwitchBlock @change="turnOnNightTheme" class="settings__item" :value="settings.turnOnNightTheme">Включить ночной режим</SwitchBlock>
      <SwitchBlock @change="getNewsWithSound" class="settings__item" :value="settings.getNewsWithSound">Получать уведомления со звуком</SwitchBlock>
      <SwitchBlock @change="enableBrouserNotifications" class="settings__item" :value="settings.enableBrouserNotifications">Браузерные уведомления</SwitchBlock>
  </section>
</template>

<script>
import SwitchBlock from "@/components/Switch-block/Switch-block";
import {mapActions, mapGetters} from "vuex";
export default {
  name: "Settings",
  components: {SwitchBlock},
  computed:{
    ...mapGetters('profileModule',['getUserSettings']),
    settings(){
      return this.getUserSettings
    }
  },
  methods:{
    ...mapActions('profileModule',['changeSettings']),
    //включить уведомления
    enableNotifications(){
      this.settings.enableNotifications = !this.settings.enableNotifications;
      this.changeSettings(this.settings)
    },
    //Получать новостную рассылку
    getNews(){
      this.settings.getNews = !this.settings.getNews;
      this.changeSettings(this.settings)
    },
    //Включить ночной режим
    turnOnNightTheme(){
      this.settings.turnOnNightTheme = !this.settings.turnOnNightTheme;
      this.changeSettings(this.settings)
    },
    //Получать уведомления со звуком
    getNewsWithSound(){
      this.settings.getNewsWithSound = !this.settings.getNewsWithSound;
      this.changeSettings(this.settings)
    },
    //Браузерные уведомления
    enableBrouserNotifications(){
      this.settings.enableBrouserNotifications = !this.settings.enableBrouserNotifications;
      this.changeSettings(this.settings)
    }
  }
}
</script>

<style scoped lang="scss">
 @import "Settings";
</style>