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
    @import "./src/assets/variables";
    .article{
        border-radius: 16px;
        padding: 30px;
        box-sizing: border-box;
        background: var(--color-article);
        &__clock{
            background-color: #4C6FFF;
            border-radius: 8px;
            padding: 6px;
            box-sizing: border-box;
            width: 32px;
            height: 32px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 10px;
        }
        &__time{
            width: 260px;
            height: 137px;
            display: flex;
            font-family: Rubik;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 32px;
            color: var(--color-text);
            display: flex;
            flex-direction: column;
            &:first-child{
                margin-bottom: 40px;
            }
        }
        &__time-data{
            font-family: Rubik;
            font-weight: 500;
            font-size: 32px;
            line-height: 32px;
        }
        &__wrp{
            display: flex;
            margin-bottom: 13px;
        }
    }

    @media (max-width: 375px) {
      .article{
        &__time{
          width: 100%;
          height: 100%;
        }
        &__time-data{
          font-size: 24px;
        }
        &__time-data:nth-child(2){
          margin-bottom: 15px;
        }
      }
    }
</style>