<template>
  <LineComp :chartData="chartData" />
</template>

<script>
import LineComp from '@/components/line/line1.vue'
export default {
  components: { LineComp },
  data () {
    return {
      chartData: [
        {
          name: '2016',
          value1: 500,
          value2: 300

        },
        {
          name: '2017',
          value1: 600,
          value2: 300
        },
        {
          name: '2018',
          value1: 700,
          value2: 564
        },
        {
          name: '2019',
          value1: 800,
          value2: 875
        },
        {
          name: '2020',
          value1: 500,
          value2: 765
        },
        {
          name: '2021',
          value1: 900,
          value2: 439
        }
      ]
    }
  }
}
</script>
