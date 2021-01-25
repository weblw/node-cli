<template>
  <Bar1 :chartData="chartData"/>
</template>

<script>
import Bar1 from '@/components/bar/bar1.vue'
export default {
  components: { Bar1 },
  data () {
    return {
      chartData: [
        {
          AREA_NAME: '黄龙县',
          AVG_YLTS: 29,
          COUNTY_CODE: '610631',
          TARGET_DAY: 26
        },
        {
          AREA_NAME: '富县',
          AVG_YLTS: 30,
          COUNTY_CODE: '610628',
          TARGET_DAY: 25
        },
        {
          AREA_NAME: '志丹县',
          AVG_YLTS: 29,
          COUNTY_CODE: '610625',
          TARGET_DAY: 25
        },
        {
          AREA_NAME: '宜川县',
          AVG_YLTS: 25,
          COUNTY_CODE: '610630',
          TARGET_DAY: 26
        },
        {
          AREA_NAME: '延长县',
          AVG_YLTS: 27,
          COUNTY_CODE: '610621',
          TARGET_DAY: 26
        },
        {
          AREA_NAME: '洛川县',
          AVG_YLTS: 26,
          COUNTY_CODE: '610629',
          TARGET_DAY: 26
        },
        {
          AREA_NAME: '延川县',
          AVG_YLTS: 24,
          COUNTY_CODE: '610622',
          TARGET_DAY: 25
        },
        {
          AREA_NAME: '子长市',
          AVG_YLTS: 23,
          COUNTY_CODE: '610623',
          TARGET_DAY: 26
        },
        {
          AREA_NAME: '甘泉县',
          AVG_YLTS: 30,
          COUNTY_CODE: '610627',
          TARGET_DAY: 26
        },
        {
          AREA_NAME: '安塞区',
          AVG_YLTS: 23,
          COUNTY_CODE: '610624',
          TARGET_DAY: 25
        }
      ]
    }
  }
}
</script>
