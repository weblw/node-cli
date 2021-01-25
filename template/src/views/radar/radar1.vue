<template>
  <Radar1 :chartData1="data1" :chartData2="data2" />
</template>

<script>
import Radar1 from '@/components/radar/radar1.vue'
export default {
  components: { Radar1 },
  data () {
    return {
      data1: [
        {
          name: '水质优',
          max: 100
        },
        {
          name: '水质良',
          max: 100
        },
        {
          name: '轻度污染',
          max: 100
        }
      ],
      data2: [
        [80, 50, 55]
      ]
    }
  }
}
</script>
