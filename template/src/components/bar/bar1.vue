<template>
  <div class="bar1-container">
    <div class="title">各地市优良天数</div>
    <img class="img-title" src="@/images/yltl.png" alt="" />
    <div class="content-yl"><div id="bar1"></div></div>
  </div>
</template>

<script>
import { containerScrollX } from '@/utils/scroll.js'
const getOption = (current, currentRest, target, data, echarts) => {
  return {
    grid: {
      show: false,
      left: 0,
      right: 0
    },
    tooltip: {
      trigger: 'axis',
      formatter: params => {
        let res = ''
        for (let i = 0; i < params.length; i++) {
          const series = params[i]
          if (i === 0) {
            res =
              series.axisValue +
              '<br/>' +
              series.marker.replace('[object Object]', 'rgba(71, 119, 255, 1)') +
              series.seriesName +
              ':' +
              series.data +
              '<br/>'
          }
          if (i === 3) {
            res +=
              series.marker.replace('transparent', 'rgba(255, 255, 255, 0.3)') +
              series.seriesName +
              ':' +
              series.data +
              '<br/>'
          }
        }
        return res
      }
    },
    xAxis: {
      type: 'category',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: 'rgba(204, 213, 237, 1)'
        }
      },
      data
    },
    yAxis: {
      show: false
    },
    series: [
      {
        name: '当前优良天数',
        stack: '当前',
        type: 'bar',
        barMaxWidth: 20,
        data: current,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              1,
              0,
              0,
              [
                {
                  offset: 1,
                  color: 'rgba(71, 119, 255, 1)' // 0% 处的颜色
                },
                {
                  offset: 0,
                  color: 'rgba(46, 233, 255, 1)' // 100% 处的颜色
                }
              ],
              false
            )
          }
        }
      },
      {
        type: 'bar',
        stack: '当前',
        barMaxWidth: 20,
        data: currentRest,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              1,
              0,
              0,
              [
                {
                  offset: 1,
                  color: 'rgba(33, 42, 68, 0.8)' // 0% 处的颜色
                },
                {
                  offset: 0,
                  color: 'rgba(33, 42, 68, 0.8)' // 100% 处的颜色
                }
              ],
              false
            )
          }
        }
      },
      {
        type: 'scatter',
        symbolSize: 5,
        itemStyle: {
          color: '#fff'
        },
        silent: true,
        data: target
      },
      {
        name: '目标天数',
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 16,
        data: target,
        type: 'line',
        itemStyle: {
          normal: {
            color: 'transparent',
            borderColor: 'rgba(255, 255, 255, 0.3)',
            borderWidth: 1
          }
        },
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.3)'
        }
      }
    ]
  }
}
export default {
  name: 'Bar1',
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
    this.chart = this.$echarts.init(document.getElementById('bar1'))
    const current = []
    const target = []
    const cityName = []
    this.chartData.forEach(item => {
      current.push(item.AVG_YLTS)
      target.push(item.TARGET_DAY)
      cityName.push(item.AREA_NAME.substring(0, 2))
    })
    const currentRest = []
    current.forEach(item => {
      currentRest.push(30 - item)
    })
    const option = getOption(current, currentRest, target, cityName, this.$echarts)
    this.chart.setOption(option)
    this.scrollObj = containerScrollX('.content-yl')
  }
}
</script>

<style scoped lang="scss">
.bar1-container {
  width: 100%;
  height: 100%;
  padding: 10px;
  position: relative;
  ::-webkit-scrollbar {
    height: 0;
  }
  .title {
    font-size: 16px;
    color: #333;
    line-height: 20px;
    padding-left: 20px;
  }
  .img-title {
    display: block;
    position: absolute;
    top: 50px;
    z-index: 999;
    left: 20px;
  }

  .content-yl {
    margin-top: 10px;
    width: 100%;
    height: 230px;
    background: rgba(3, 8, 22, 0.15);
    border-radius: 2px;
    position: relative;
    overflow-x: scroll;
    overflow-y: hidden;
    img {
      position: absolute;
      top: 10px;
      left: 10px;
    }
    #bar1 {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
