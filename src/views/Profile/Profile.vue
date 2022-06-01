<template>
        <div class="profile">
          Профиль
          <tabs>
            <tab name="Аккаунт" :selected="true">
              <span>What we do</span>
            </tab>
            <tab name="Настройки">
              <span>How much we do it for</span>
            </tab>
            <tab name="Ваши питомцы">
              <span>Why we do it</span>
            </tab>
          </tabs>
        </div>
</template>

<script>
import Tabs from "@/components/Tabs/Tabs";
import Tab from "@/components/Tabs/Tab/Tab";

export default {
        name: "Profile",
        components: {Tabs, Tab},
}
</script>

<style lang="scss" scoped>
  .profile{
    margin-top: 156px;
    color: white;
  }
</style>