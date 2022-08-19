<template>
        <div class="chat">
            <tabs type="chat">
                <tab type="chat"
                     name="Ynfan"
                     color="linear-gradient(224.47deg, #FF92AE 8.18%, #FF3D9A 95.84%);"
                     time="17:20"
                     message="Пельмень с мясом был вкусный, сытный, а..."
                >
                    <ChatWindow author="Ynfan" title="Пельмень с мясом был вкусный, сытный, а..."/>
                </tab>
                <tab type="chat"
                     name="Gaming"
                     bgImage="'images/avatar1.png'"
                     time="13:15"
                     message="Олег: Го катку ребят"
                >
                    <ChatWindow author="Gaming" title="Олег: Го катку ребят"/>

                </tab>
                <tab type="chat"
                     name="Raven"
                     color="linear-gradient(225deg, #FFEF5E 0%, #F7936F 100%);"
                     time="вчера"
                     message="День прошел супер."

                >
                    <ChatWindow author="Raven" title="День прошел супер."/>
                </tab>
                <tab type="chat"
                     name="Qulliman"
                     color="linear-gradient(225deg, #FFC656 0%, #F16063 100%);"
                     time="16 янв"
                     message="Изображение."

                >
                  <ChatWindow author="Qulliman" title="Изображение."/>
                </tab>
                <tab type="chat"
                     name="Food"
                     bgImage="'images/avatar2.png'"
                     time="5 ноя 2021"
                     message="Вы: Жареная кортошка топ!!!"

                >
                  <ChatWindow author="Food" title="Вы: Жареная кортошка топ!!!"/>
                </tab>

            </tabs>

        </div>
</template>

<script>

import Tabs from "../../components/Tabs/Tabs";
import Tab from "../../components/Tabs/Tab/Tab";
import ChatWindow from "@/components/Chat/Chat-window/Chat-window";
export default {
        name: "Chat",
    components: {ChatWindow, Tabs, Tab},

}
</script>

<style lang="scss" scoped>
  .chat{
    padding-top: 156px;
    padding-bottom: 25px;
    color: white;
    height: 100%;
  }
</style>