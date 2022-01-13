<template>
    <vc-donut
        foreground="grey"
        background="black"
        :size="200" unit="px" :thickness="20"
        legend-placement="top"
        :sections="sections" :total="100"
    >
      <div class="diagram"></div>
    </vc-donut>
</template>

<script>

export default {
  name: "Diagram",
  data() {
    return {
      sections: [
        { label: 'Обед', value: 25, color: '#66CB9F' },
        { label: 'Перекус 1/2', value: 10, color: 'yellow' },
        { label: 'Прогулка в парке', value: 25, color: '#F16063' }
      ]
    };
  },
  computed: {
    color(){
      return "var(--color-article)"
    },

  }

}

</script>

<style lang="scss" scoped>
  .diagram{
    background-color: red;
    //background-color: var(--bg-dark);
  }
</style>