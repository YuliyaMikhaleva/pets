<template>
  <article class="statistic">
    <div class="statistic__block">
      <div class="statistic__img">
        <swiper :options="swiperOption" class="statistic__slider">
          <swiper-slide class="statistic__slide">
              <img class="statistic__img-cat" src="images/cat2.jpg" alt="photo">
          </swiper-slide>
          <swiper-slide class="statistic__slide">
            <img class="statistic__img-cat" src="images/cat2.jpg" alt="photo">
          </swiper-slide>
          <swiper-slide class="statistic__slide">
            <img class="statistic__img-cat" src="images/cat2.jpg" alt="photo">
          </swiper-slide>
          <swiper-slide class="statistic__slide">
            <img class="statistic__img-cat" src="images/cat2.jpg" alt="photo">
          </swiper-slide>
          <swiper-slide class="statistic__slide">
            <img class="statistic__img-cat" src="images/cat2.jpg" alt="photo">
          </swiper-slide>
          <div class="swiper-button-prev statistic__arrow-left" slot="button-prev"></div>
          <div class="swiper-button-next statistic__arrow-right" slot="button-next"></div>
        </swiper>
      </div>

      <div class="statistic__txt">
        <span class="statistic__title">Johny</span>
        <span>3 лайка</span>
      </div>
    </div>
    <div class="statistic__diagram">
      <div class="statistic__data">
        <span class="statistic__data-item">Лайки</span>
        <span class="statistic__data-item">Просмотры</span>
      </div>
      <StatisticDiagram/>
      <ul class="statistic__dates statistic__date-numbers">
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
      </ul>
      <ul class="statistic__dates statistic__date-days">
        <li>ПН</li>
        <li>ВТ</li>
        <li>СР</li>
        <li>ЧТ</li>
        <li>ПТ</li>
        <li>СБ</li>
        <li>ВС</li>
      </ul>
    </div>
  </article>

</template>

<script>
import StatisticDiagram from "@/components/Statistic-diagram/Statistic-diagram";
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  name: "Statistic",
  components: {StatisticDiagram, Swiper, SwiperSlide},
  data:() => ({
    swiperOption: {
      slidesPerView: 1,
      spaceBetween: 100,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    },
    width:null
  }),
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
  },
  created() {
    window.addEventListener('resize', this.updateWidth);
    this.updateWidth();
  },
}
</script>

<style lang="scss" scoped>
  @import "Statistic.module";
  .swiper-button-disabled{
    display:none;
  }
</style>