<template>
  <article class="statistic">
    <div class="statistic__block">
      <img class="statistic__img" src="images/cat.jpg" alt="photo">
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
export default {
  name: "Statistic",
  components: {StatisticDiagram}
}
</script>

<style lang="scss" scoped>
  @import "Statistic.module";
</style>