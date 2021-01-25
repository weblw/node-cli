<template>
  <Pie3 :chartData="chartData"/>
</template>

<script>
import Pie3 from '@/components/pie/pie3.vue'
export default {
  components: { Pie3 },
  data () {
    return {
      chartData: {
        AD_DBSL: 38,
        AD_WDBSL: 2,
        DM_ZSL: 40,
        HXXYL_DBSL: 39,
        HXXYL_WDBSL: 1,
        RJY_DBSL: 18,
        RJY_WDBSL: 22,
        ZL_DBSL: 10,
        ZL_WDBSL: 1
      }
    }
  }
}
</script>
