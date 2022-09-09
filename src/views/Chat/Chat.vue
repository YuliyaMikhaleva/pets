<template>
        <div class="chat">
            <tabs type="chat" :array="chats" @addRoom="addRoom">
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
                      :id="chat.id"
                      :author="chat.name"
                      :text-message="chat.message"
                      :time-message="chat.time"
                      @deleteChat="deleteChat(index)"
                      @changeNameRoom="changeNameRoom"
                  />
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
  components: {ChatWindow, Tabs, Tab },
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
          time:'5 ноя 2021',
          message:'Вы: Жареная кортошка топ!!!',
          id:5,
        },
      ],
    }
  },
  watch:{
    chats(){}
  },
  methods:{
    deleteChat(index){
      this.chats.splice(index,1)
    },
    addRoom(name){
      this.chats.splice(0,0,{
        type:'chat',
        name:name,
        bgColor:'blue',
        time:'11:20',
        message:'',
        id:this.chats.length+1,
      })
    },
    changeNameRoom(id,newName){
      this.chats.map((el) => {
        if (el.id === id){
          el.name = newName
        }
        return el
      })
    },

  }

}
</script>

<style lang="scss">
  .chat{
    padding-top: 156px;
    padding-bottom: 25px;
    color: white;
    height: 100%;
    .tabs{
      width: 100%;
      overflow-x: scroll;
      overflow-y: hidden;;
    }
  }
  @media(max-width: 1000px){
    .chat{

      .tabs{
        grid-template-columns: 100% 100%;
        overflow-x: scroll;
        overflow-y: hidden;
      }
    }
  }

</style>