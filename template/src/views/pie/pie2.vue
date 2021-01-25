<template>
  <Pie2 :chartData="chartData" :colors="colors" />
</template>

<script>
import Pie2 from '@/components/pie/pie2.vue'
export default {
  components: { Pie2 },
  data () {
    return {
      chartData: {
        DM_ZS: 154,
        ONE_PRE_SL: 59,
        ONE_SL: 100,
        THREE_PRE_SL: 47,
        THREE_SL: 15,
        TWO_PRE_SL: 62,
        TWO_SL: 39
      },
      colors: ['rgba(255, 75, 33, 1)', 'rgba(255, 216, 33, 1)', 'rgba(33, 255, 190, 1)']
    }
  }
}
</script>
