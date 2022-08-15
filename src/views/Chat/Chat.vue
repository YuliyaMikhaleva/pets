<template>
        <div class="chat">
            <tabs type="chat">
                <tab type="chat"
                     name="1111"
                     color="blue"
                     time="17:20"
                     message="Пельмень с мясом был вкусный, сытный, а..."
                     :selected="true">
                    <div>1111</div>
                </tab>
                <tab type="chat"
                     name="2222"
                     color="blue"
                     time="17:20"
                     message="Пельмень с мясом был вкусный, сытный, а..."

                >
                    <div>2222</div>
                </tab>
                <tab type="chat"
                     name="3333"
                     color="blue"
                     time="17:20"
                     message="Пельмень с мясом был вкусный, сытный, а..."

                >
                    <div>3333</div>
                </tab>
            </tabs>
<!--          <ChatList/>-->
<!--          <ChatWindow/>-->
        </div>
</template>

<script>

// import ChatList from "@/components/Chat/Chat-list/Chat-list";
// // import ChatWindow from "@/components/Chat/Chat-window/Chat-window";
import Tabs from "../../components/Tabs/Tabs";
import Tab from "../../components/Tabs/Tab/Tab";
export default {
        name: "Chat",
    components: {Tabs, Tab},
    // components: {ChatWindow, ChatList},
}
</script>

<style lang="scss" scoped>
  .chat{
    padding-top: 156px;
    padding-bottom: 25px;
    color: white;
    /*display: grid;*/
    /*grid-template-columns: 410px auto;*/
    /*grid-gap: 40px;*/
    /*height: 100%;*/
  }
</style>