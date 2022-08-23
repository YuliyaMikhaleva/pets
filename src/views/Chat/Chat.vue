<template>
        <div class="chat">
            <tabs type="chat" :array="chats">
                <tab v-for="(chat, index) in chats"
                      :key="index"
                      :type="chat.type"
                      :name="chat.name"
                      :color="chat.color"
                      :time="chat.time"
                      :message="chat.message"
                      :id="chat.id"
                      :bgImage="chat.bgImage"
                >
                  <ChatWindow
                    :author="chat.name"
                    :text-message="chat.message"
                    :time-message="chat.time"
                    @deleteChat="deleteChat(index)"
                  />
                </tab>
<!--                <tab type="chat"-->
<!--                     name="Ynfan"-->
<!--                     color="linear-gradient(224.47deg, #FF92AE 8.18%, #FF3D9A 95.84%);"-->
<!--                     time="17:20"-->
<!--                     message="Пельмень с мясом был вкусный, сытный, а..."-->
<!--                     id="1"-->
<!--                >-->
<!--                    <ChatWindow author="Ynfan" textMessage="Пельмень с мясом был вкусный, сытный, а..." timeMessage="17:20" @deleteChat="deleteChat(1)"/>-->
<!--                </tab>-->
<!--                <tab type="chat"-->
<!--                     name="Gaming"-->
<!--                     bgImage="'images/avatar1.png'"-->
<!--                     time="13:15"-->
<!--                     message="Олег: Го катку ребят"-->
<!--                     id="2"-->
<!--                >-->
<!--                    <ChatWindow author="Gaming" textMessage="Олег: Го катку ребят" timeMessage="13:15"/>-->

<!--                </tab>-->
<!--                <tab type="chat"-->
<!--                     name="Raven"-->
<!--                     color="linear-gradient(225deg, #FFEF5E 0%, #F7936F 100%);"-->
<!--                     time="вчера"-->
<!--                     message="День прошел супер."-->
<!--                     id="3"-->

<!--                >-->
<!--                    <ChatWindow author="Raven" textMessage="День прошел супер." timeMessage="вчера"/>-->
<!--                </tab>-->
<!--                <tab type="chat"-->
<!--                     name="Qulliman"-->
<!--                     color="linear-gradient(225deg, #FFC656 0%, #F16063 100%);"-->
<!--                     time="16 янв"-->
<!--                     message="Изображение."-->
<!--                     id="4"-->

<!--                >-->
<!--                  <ChatWindow author="Qulliman" textMessage="Изображение." timeMessage="16 янв"/>-->
<!--                </tab>-->
<!--                <tab type="chat"-->
<!--                     name="Food"-->
<!--                     bgImage="'images/avatar2.png'"-->
<!--                     time="5 ноя 2021"-->
<!--                     message="Вы: Жареная кортошка топ!!!"-->
<!--                     id="5"-->

<!--                >-->
<!--                  <ChatWindow author="Food" textMessage="Вы: Жареная кортошка топ!!!" timeMessage="5 ноя 2021"/>-->
<!--                </tab>-->

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
  data(){
    return {
      chats:[
        {
          type:'chat',
          name:'Ynfan',
          color:'linear-gradient(224.47deg, #FF92AE 8.18%, #FF3D9A 95.84%)',
          time:'17:30',
          message:'Пельмень с мясом был вкусный, сытный, а...',
          id:1,
        },
        {
          type:'chat',
          name:'Gaming',
          bgImage:'images/avatar1.png',
          time:'13:15',
          message:'Олег: Го катку ребят',
          id:2,
        },
        {
          type:'chat',
          name:'Raven',
          color:'linear-gradient(225deg, #FFEF5E 0%, #F7936F 100%);',
          time:'вчера',
          message:'День прошел супер.',
          id:3,
        },
        {
          type:'chat',
          name:'Qulliman',
          color:'linear-gradient(225deg, #FFC656 0%, #F16063 100%);',
          time:'16 янв',
          message:'Изображение.',
          id:4,
        },
        {
          type:'chat',
          name:'Food',
          bgImage: "images/avatar2.png",
          time:'5 ноя 2021"',
          message:'Вы: Жареная кортошка топ!!!',
          id:5,
        },
      ]
    }
  },
  watch:{
    chats(){}
  },
  methods:{
    deleteChat(index){
      this.chats.splice(index,1)
    }
  }

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