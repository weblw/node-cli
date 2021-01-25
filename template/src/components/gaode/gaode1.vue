<template>
  <div class="gaode1-container">
    <div id="gaode1">Gaode1</div>
  </div>
</template>

<script>
const option = {}
function genOption (data, colors) {
  option.color = colors
  return option
}
export default {
  name: 'Gaode1',
  props: {
    chartData: {
      type: Array,
      default () {
        return []
      }
    },
    colors: {
      type: Array,
      default () {
        return []
      }
    }
  },
  mounted () {
    this.chart = this.$echarts.init(document.getElementById('gaode1'))
    const option = genOption(this.chartData, this.colors)
    this.chart.setOption(option)
  }
}
</script>

<style scoped lang="scss">
.gaode1-container {
  width: 100%;
  height: 100%;
  position: relative;
  #gaode1 {
    width: 270px;
    height: 300px;
  }
}
</style>
