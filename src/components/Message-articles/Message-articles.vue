<template>
    <section class="message-articles">
      <swiper
          class="swiper"
          :options="swiperOption"
      >
        <swiper-slide>
          <MessageArticle
              author="Ynfan"
              time="17:20"
              description="Пельмень с мясом."
              txt1="Мой кот постоянно ходит по краю бассейна, как будто ждет, что оттуда выпрыгнет утка."
              txt2="Я его уже не уговариваю."
              txt3="Он так сидит уже несколько лет."
              bg="linear-gradient(224.47deg, #FF92AE 8.18%, #FF3D9A 95.84%)"
          />
        </swiper-slide>
        <swiper-slide>
          <MessageArticle
              author="Qulliman"
              time="12:20"
              description="Пес – это тоже я."
              txt1="Если собаку гладить против шерсти, то она кусаться будет."
              bg="linear-gradient(225deg, #D665FF 0%, #4C6FFF 100%)"
          />
        </swiper-slide>
        <swiper-slide>
          <MessageArticle
              author="Ran"
              time="8:20"
              description="Взгляд - это зеркало души."
              txt1="Жил да был как-то хомяк, он любил играть с прищепками и был одинок, и решил создать семью, которая состояла из хомячихи и двух хомячат."
              txt2="И вот однажды в доме появился еще один хомяк..."
              bg="linear-gradient(225deg, #FFEF5E 0%, #F7936F 100%)"
          />
        </swiper-slide>
        <swiper-slide>
          <MessageArticle
              author="Frefyse"
              time="10:20"
              description="ауф диар фройндшафт!"
              txt1="Что делать если кот укусил собаку? Прочитать эту историю.
                  Кот укусил собаку.
                  Собака укусила кошку.
                  А кошка, случайно, укусила человека.
                  И теперь на нем живого места нет!"
              bg="linear-gradient(225deg, #FFC656 0%, #F16063 100%)"
          />
        </swiper-slide>
        <swiper-slide>
          <MessageArticle
              author="Ynfan"
              time="17:20"
              description="Пельмень с мясом."
              txt1="Мой кот постоянно ходит по краю бассейна, как будто ждет, что оттуда выпрыгнет утка."
              txt2="Я его уже не уговариваю."
              txt3="Он так сидит уже несколько лет."
              bg="linear-gradient(224.47deg, #FF92AE 8.18%, #FF3D9A 95.84%)"
          />
        </swiper-slide>
        <swiper-slide>
          <MessageArticle
              author="Qulliman"
              time="12:20"
              description="Пес – это тоже я."
              txt1="Если собаку гладить против шерсти, то она кусаться будет."
              bg="linear-gradient(225deg, #D665FF 0%, #4C6FFF 100%)"
          />
        </swiper-slide>
        <swiper-slide>
          <MessageArticle
              author="Ran"
              time="8:20"
              description="Взгляд - это зеркало души."
              txt1="Жил да был как-то хомяк, он любил играть с прищепками и был одинок, и решил создать семью, которая состояла из хомячихи и двух хомячат."
              txt2="И вот однажды в доме появился еще один хомяк..."
              bg="linear-gradient(225deg, #FFEF5E 0%, #F7936F 100%)"
          />
        </swiper-slide>
        <swiper-slide>
          <MessageArticle
              author="Frefyse"
              time="10:20"
              description="ауф диар фройндшафт!"
              txt1="Что делать если кот укусил собаку? Прочитать эту историю.
                  Кот укусил собаку.
                  Собака укусила кошку.
                  А кошка, случайно, укусила человека.
                  И теперь на нем живого места нет!"
              bg="linear-gradient(225deg, #FFC656 0%, #F16063 100%)"
          />
        </swiper-slide>
      </swiper>
    </section>
</template>

<script>
import MessageArticle from "@/components/Message-article/Message-article";
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: "Message-articles",
  components: {
    MessageArticle,
    Swiper,
    SwiperSlide,
  },
  data:() => ({
    swiperOption: {
      slidesPerView: 4,
      spaceBetween: 40,
    }
  })

}
</script>

<style lang="scss" scoped>
  @import "Message-articles.module";
</style>