<template>
  <div class="pie3-container">
    <div id="pie3"></div>
    <div class="chart-content"><img src="@/images/dbl.png" alt="" /> <span class="text">达标率</span></div>
    <div class="content">
      <div class="item" v-for="item in legend" :key="item.color">
        <div class="line" :style="{ backgroundColor: item.color }"></div>
        <div>
          <div class="top">{{ item.name }}</div>
          <div class="bottom">
            未达标 <span class="value">{{ item.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const genOption = (legend, data) => {
  function angleText (i, num) {
    var everyAngle = 360 / num
    var currentAngle = i * everyAngle + everyAngle / 2

    if (currentAngle <= 90) {
      return -currentAngle
    } else if (currentAngle <= 180 && currentAngle > 90) {
      return 180 - currentAngle
    } else if (currentAngle < 270 && currentAngle > 180) {
      return 180 - currentAngle
    } else if (currentAngle < 360 && currentAngle >= 270) {
      return 360 - currentAngle
    }
  }
  let data3 = []
  data3 = JSON.parse(JSON.stringify(data))
  for (var i = 0; i < data3.length; i++) {
    if (i === 0 || i === 1) {
      data3[i].label.color = 'rgba(22, 29, 37, 1)'
    }
    data3[i].itemStyle.color = legend[i].color
    data3[i].label.rotate = angleText(i, data3.length)
  }
  return {
    series: {
      top: '-20%',
      type: 'pie',
      radius: ['65%', '42%'],
      roseType: 'area',
      zlevel: 10,
      label: {
        normal: {
          show: true,
          textStyle: {
            fontSize: 14,
            color: '#fff'
          },
          position: 'inside',
          rotate: 30,
          align: 'center',
          verticalAlign: 'middle',
          padding: [10, 10, 10, 10],
          fontWeight: 'bold',
          formatter: '{c}%'
        }
      },
      animation: false,
      data: data3
    }
  }
}
export default {
  name: 'Pie3',
  props: {
    chartData: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      legend: []
    }
  },
  mounted () {
    this.chart = this.$echarts.init(document.getElementById('pie3'))
    this.legend = [
      { color: 'rgba(17, 235, 255, 1)', name: '化学需氧量', value: this.chartData.HXXYL_WDBSL },
      { color: 'rgba(33, 255, 158, 1)', name: '氨氮', value: this.chartData.AD_WDBSL },
      { color: 'rgba(17, 151, 255, 1)', name: '溶解氧', value: this.chartData.RJY_WDBSL },
      { color: 'rgba(65, 91, 225, 1)', name: '总磷', value: this.chartData.ZL_WDBSL }
    ]
    const asyncData = [
      {
        value: ((this.chartData.HXXYL_DBSL / this.chartData.DM_ZSL) * 100).toFixed(0),
        name: '化学需氧量',
        label: {
          color: '#fff'
        },
        itemStyle: {},
        emphasis: {
          itemStyle: {}
        }
      },
      {
        value: ((this.chartData.AD_DBSL / this.chartData.DM_ZSL) * 100).toFixed(0),
        name: '氨氮',
        label: {
          color: '#fff'
        },
        itemStyle: {},
        emphasis: {
          itemStyle: {}
        }
      },
      {
        value: ((this.chartData.RJY_DBSL / this.chartData.DM_ZSL) * 100).toFixed(0),
        name: '溶解氧',
        label: {
          color: '#fff'
        },
        itemStyle: {},
        emphasis: {
          itemStyle: {}
        }
      },
      {
        value: ((this.chartData.ZL_DBSL / this.chartData.DM_ZSL) * 100).toFixed(0),
        name: '总磷',
        label: {
          color: '#fff'
        },
        itemStyle: {},
        emphasis: {
          itemStyle: {}
        }
      }
    ]
    const option = genOption(this.legend, asyncData)
    this.chart.setOption(option)
  }
}
</script>

<style scoped lang="scss">
.pie3-container {
  width: 100%;
  height: 100%;
  position: relative;
  #pie3 {
    width: 270px;
    height: 300px;
    position: absolute;
    top: 0px;
    left: -30px;
    z-index: 0;
  }

  .chart-content {
    position: absolute;
    top: 80px;
    left: 55px;
    width: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    img {
      width: 28px;
      height: 27px;
    }

    .text {
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
      line-height: 22px;
    }
  }
  .content {
    width: 180px;
    height: 130px;
    position: absolute;
    top: 50px;
    left: 200px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    .item {
      display: flex;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
      .line {
        width: 4px;
        height: 36px;
        background: #11fffc;
        border-radius: 2px;
        margin-right: 10px;
      }
      .value {
        font-size: 18px;
        font-family: DINPro;
        font-weight: 400;
        color: #11ebff;
        margin-left: 5px;
      }
    }
  }
}
</style>
