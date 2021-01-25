<template>
  <Line2 :chartData="chartData"/>
</template>

<script>
import Line2 from '@/components/line/line2.vue'
export default {
  components: { Line2 },
  data () {
    return {
      chartData: [
        {
          name: '西安',
          value1: 185,
          value2: 167
        },
        {
          name: '咸阳',
          value1: 168,
          value2: 186
        },
        {
          name: '宝鸡',
          value1: 203,
          value2: 128
        },
        {
          name: '渭南',
          value1: 126,
          value2: 98
        },
        {
          name: '延安',
          value1: 218,
          value2: 190
        },
        {
          name: '汉中',
          value1: 105,
          value2: 185
        }
      ],
      colors: [
        [
          '#fe9a8bb3',
          '#fe9a8b03'
        ],
        [
          '#9E87FFb3',
          '#9E87FF03'
        ]
      ]
    }
  }
}
</script>
