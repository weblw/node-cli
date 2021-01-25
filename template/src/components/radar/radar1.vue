<template>
  <div class="radar1-container">
    <div id="radar1">Radar1</div>
  </div>
</template>

<script>
const option = {
  radar: {
    center: ['50%', '50%'],
    radius: '70%',
    startAngle: 90,
    splitNumber: 4,
    shape: 'circle',
    name: {
      textStyle: {
        color: 'tomato',
        fontSize: 14,
        padding: [-10, -40, -10, -40]
      }
    },
    splitArea: {
      areaStyle: {
        color: [
          'RGBA(65, 89, 131, 1)',
          'RGBA(57, 78, 113, 1)',
          'RGBA(47, 64, 92, 1)',
          'RGBA(36, 47, 66, 1)'
        ]
      }
    },
    indicator: []
  },
  series: {
    name: '高一(1)班',
    type: 'radar',
    symbol: 'circle',
    symbolSize: 5,
    areaStyle: {
      normal: {
        color: 'rgba(1, 255, 255, 0.6)'
      }
    },
    itemStyle: {
      color: 'rgba(1, 255, 255, 1)',
      borderColor: 'rgba(1, 255, 255, 1)',
      borderWidth: 1
    },
    lineStyle: {
      normal: {
        type: 'solid',

        color: 'rgba(1, 255, 255, 1)',
        width: 1
      }
    },
    data: []
  }
}
function genOption (data1, data2) {
  option.radar.indicator = data1
  option.series.data = data2
  return option
}
export default {
  name: 'Radar1',
  props: {
    chartData1: {
      type: Array,
      default () {
        return []
      }
    },
    chartData2: {
      type: Array,
      default () {
        return []
      }
    }
  },
  mounted () {
    this.chart = this.$echarts.init(document.getElementById('radar1'))
    const option = genOption(this.chartData1, this.chartData2)
    this.chart.setOption(option)
  }
}
</script>

<style scoped lang="scss">
.radar1-container {
  width: 100%;
  height: 100%;
  position: relative;
  #radar1 {
    width: 270px;
    height: 300px;
  }
}
</style>
