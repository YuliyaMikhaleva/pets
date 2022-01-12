<template>
    <section class="message-articles">
      <MessageArticle
          author="Ynfan"
          time="17:20"
          description="Пельмень с мясом."
          txt1="Мой кот постоянно ходит по краю бассейна, как будто ждет, что оттуда выпрыгнет утка."
          txt2="Я его уже не уговариваю."
          txt3="Он так сидит уже несколько лет."
      />
      <MessageArticle
          author="Qulliman"
          time="12:20"
          description="Пес – это тоже я."
          txt1="Если собаку гладить против шерсти, то она кусаться будет."
      />
      <MessageArticle
          author="Ran"
          time="8:20"
          description="Взгляд - это зеркало души."
          txt1="Жил да был как-то хомяк, он любил играть с прищепками и был одинок, и решил создать семью, которая состояла из хомячихи и двух хомячат."
          txt2="И вот однажды в доме появился еще один хомяк..."
      />
      <MessageArticle
          author="Frefyse"
          time="10:20"
          description="ауф диар фройндшафт!"
          txt1="Что делать если кот укусил собаку? Прочитать эту историю.
                Кот укусил собаку.
                Собака укусила кошку.
                А кошка, случайно, укусила человека.
                И теперь на нем живого места нет!"
      />
    </section>
</template>

<script>
import MessageArticle from "@/components/Message-article/Message-article";
export default {
  name: "Message-articles",
  components: {MessageArticle}
}
</script>

<style lang="scss" scoped>
  @import "Message-articles.module";
</style>