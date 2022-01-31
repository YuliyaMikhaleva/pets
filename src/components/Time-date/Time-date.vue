<template>
    <article class="article article__time">
        <div class="article__wrp">
            <div class="article__clock">
                <img :src="img" alt="icon">
            </div>
            <span>{{ text }}</span>
        </div>
        <span class="article__time-data">{{timeDate}}</span>
      <div class="article__wrp" v-if="text2">
        <div class="article__clock">
          <img :src="img2" alt="icon">
        </div>
        <span>{{ text2 }}</span>
      </div>
      <span class="article__time-data">{{timeDate2}}</span>
    </article>
</template>

<script>
    export default {
        name: "Time-date",
        props:{
            text:{
                type:String,
                required:true
            },
            timeDate:{
                type:String,
                required:true
            },
            img:{
                type:String,
                required:true
            },
            text2:{
              type:String,
              required:false
            },
            timeDate2:{
              type:String,
              required:false
            },
            img2:{
              type:String,
              required:false
            },
        }
    }
</script>

<style scoped lang="scss">
@import "Time-date.module";
</style>