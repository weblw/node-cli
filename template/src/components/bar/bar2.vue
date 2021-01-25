<template>
  <div class="bar2-container">
    <div id="bar2"></div>
  </div>
</template>

<script>

function genOption (chartData) {
  const option = {
    grid: {
      left: '3%',
      right: '3%',
      bottom: '3%',
      top: '15%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['I-Ⅲ类', 'Ⅳ-Ⅴ类', '劣V类'],
      axisLabel: {
        color: '#333'
      },
      axisLine: {
        show: true,
        color: '#2f3541'
      }
    },
    yAxis: {
      type: 'value',
      splitNumber: 5,
      axisLabel: {
        show: true,
        color: '#333',
        formatter: '{value} %'
      },
      splitLine: {
        lineStyle: {
          // 使用深浅的间隔色
          color: '#2f3541'
        }
      },
      axisLine: {
        show: false
      }
    },
    series: [
      {
        name: '现在',
        data: [
          chartData[0] &&
            ((chartData[0].ONE / (chartData[0].ONE + chartData[0].TWO + chartData[0].THREE)) * 100).toFixed(0),
          chartData[0] &&
            ((chartData[0].TWO / (chartData[0].ONE + chartData[0].TWO + chartData[0].THREE)) * 100).toFixed(0),
          chartData[0] &&
            ((chartData[0].THREE / (chartData[0].ONE + chartData[0].TWO + chartData[0].THREE)) * 100).toFixed(0)
        ],
        type: 'bar',
        showBackground: false,
        label: {
          show: true,
          formatter: function (params) {
            const { seriesName, value } = params
            const str = `{a|${value}%}\n{b|${seriesName}}`
            return str
          },
          rich: {
            a: {
              color: 'white',
              fontSize: 16,
              fontWeight: 'blod',
              align: 'center'
            },
            b: {
              color: '#333',
              fontSize: 10,
              align: 'center'
            }
          },
          position: 'top',
          color: '#fff'
        },
        itemStyle: {
          normal: {
            // 这里是重点
            color: function (params) {
              // 注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
              var colorList = ['#3AFF80', '#F9B222', '#F75604']
              return colorList[params.dataIndex]
            }
          }
        }
      },
      {
        name: '去年',
        data: [
          chartData[1] &&
            ((chartData[1].ONE / (chartData[1].ONE + chartData[1].TWO + chartData[1].THREE)) * 100).toFixed(0),
          chartData[1] &&
            ((chartData[1].TWO / (chartData[1].ONE + chartData[1].TWO + chartData[1].THREE)) * 100).toFixed(0),
          chartData[1] &&
            ((chartData[1].THREE / (chartData[1].ONE + chartData[1].TWO + chartData[1].THREE)) * 100).toFixed(0)
        ],
        type: 'bar',
        showBackground: false,
        label: {
          show: true,
          formatter: function (params) {
            const { seriesName, value } = params
            const str = `{a|${value}%}\n{b|${seriesName}}`
            return str
          },
          rich: {
            a: {
              color: 'white',
              fontSize: 16,
              fontWeight: 'blod',
              align: 'center'
            },
            b: {
              color: '#333',
              fontSize: 10,
              align: 'center'
            }
          },
          position: 'top',
          color: '#fff'
        },
        itemStyle: {
          normal: {
            // 这里是重点
            color: function (params) {
              // 注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
              var colorList = ['#1E924E', '#967632', '#8A3D18']
              return colorList[params.dataIndex]
            }
          }
        }
      }
    ]
  }
  return option
}
export default {
  name: 'Bar2',
  props: {
    chartData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  mounted () {
    this.chart = this.$echarts.init(document.getElementById('bar2'))
    const option = genOption(this.chartData)
    this.chart.setOption(option)
  }
}
</script>

<style scoped lang="scss">
.bar2-container {
  width: 100%;
  height: 100%;
  position: relative;
  #bar2 {
    width: 100%;
    height: 270px;
  }
}
</style>
