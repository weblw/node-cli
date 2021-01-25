<template>
  <div class="guage2-container">
    <div id="guage2"></div>
    <div class="right">
      <div class="top">
        <div class="chart1-item">
          <img src="@/images/dbsyzl.png" alt="" /> <span class="text">地表水源总量</span>
          <span class="value">10</span>
        </div>
        <div class="chart1-item">
          <img src="@/images/3lbzdbl.png" alt="" /> <span class="text">Ⅲ类标准达标率</span>
          <span class="value">100%</span>
        </div>
      </div>
      <div class="bottom">
        <div class="chart1-item">
          <img src="@/images/dxsyzl.png" alt="" /> <span class="text">地下水源总量</span>
          <span class="value">7</span>
        </div>
        <div class="chart1-item">
          <img src="@/images/3lbzdbl.png" alt="" /> <span class="text">Ⅲ类标准达标率</span>
          <span class="value">100%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const option = {
  title: {
    text: '90%',
    x: 'center',
    y: 'center',
    textStyle: {
      fontSize: 18,
      fontWeight: 400,
      color: '#ffffff'
    }
  },
  series: [
    {
      type: 'gauge',
      radius: '85%',
      clockwise: false,
      startAngle: '269.999',
      endAngle: '-90',
      splitNumber: 30,
      detail: {
        show: false
      },
      pointer: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: [[0, '#2CFAFC'], [10 / 100, '#00FFFF'], [1, '#0E192D']],
          width: 15
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: true,
        length: 15,
        lineStyle: {
          color: '#0E192D',
          width: 2
        }
      },
      axisLabel: {
        show: false
      }
    },
    {
      type: 'pie',
      name: '内层细圆环',
      radius: ['61%', '62%'],
      hoverAnimation: false,
      clockWise: false,
      itemStyle: {
        normal: {
          color: '#00FFFF'
        }
      },
      label: {
        show: false
      },
      data: [100]
    },
    {
      type: 'pie',
      name: '外层细圆环',
      radius: ['91%', '92%'],
      hoverAnimation: false,
      clockWise: false,
      itemStyle: {
        normal: {
          color: 'rgba(33, 245, 255, 1)'
        }
      },
      label: {
        show: false
      },
      data: [100]
    }
  ]
}
function genOption (data) {
  return option
}
export default {
  name: 'Guage2',
  props: {
    chartData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  mounted () {
    this.chart = this.$echarts.init(document.getElementById('guage2'))
    const option = genOption(this.chartData)
    this.chart.setOption(option)
  }
}
</script>

<style scoped lang="scss">
.guage2-container {
  width: 100%;
  height: 100%;
  position: relative;

  #guage2 {
    width: 200px;
    height: 300px;
    position: absolute;
    top: -5px;
    left: 0px;
  }

  .chart-title {
    position: absolute;
    bottom: 0px;
    left: 20px;
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #21f5ff;
    line-height: 20px;
  }

  .right {
    position: absolute;
    top: 80px;
    right: 20px;

    .top {
      border-bottom: 1px solid rgba(204, 213, 237, 0.1);
      padding-bottom: 10px;
      margin-bottom: 10px;
    }

    .chart1-item {
      .text {
        display: inline-block;
        width: 100px;
        padding-left: 10px;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333;
        line-height: 25px;
      }

      .value {
        display: inline-block;
        text-align: left;
        font-size: 16px;
        font-family: DINPro;
        font-weight: 400;
        color: #ffffff;
        line-height: 25px;
        width: 50px;
      }
    }
  }
}
</style>
