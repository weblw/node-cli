<template>
  <Bar2 :chartData="chartData" />
</template>

<script>
import Bar2 from '@/components/bar/bar2.vue'
export default {
  components: { Bar2 },
  data () {
    return {
      chartData: [
        {
          MOUTHYEAR: '2020-09',
          ONE: 19,
          THREE: 2,
          TWO: 3
        },
        {
          MOUTHYEAR: '2019-09',
          ONE: 174,
          THREE: 49,
          TWO: 62
        }
      ]
    }
  }
}
</script>
