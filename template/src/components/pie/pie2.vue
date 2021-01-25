<template>
  <div class="pie2-container">
    <div id="pie2"></div>
    <div class="content"><img src="@/images/dmsz.png" alt="" /> <span class="text">断面水质</span></div>
  </div>
</template>

<script>
const genOption = (asyncData, option, colors) => {
  var data = []
  for (var i = 0; i < asyncData.length; i++) {
    data.push(
      {
        value: asyncData[i].value,
        name: asyncData[i].name,
        label: {
          color: colors[i]
        },
        itemStyle: {
          normal: {
            borderWidth: 5,
            borderColor: colors[i]
          }
        }
      },
      {
        value: 5,
        name: '',
        itemStyle: {
          normal: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 0
          }
        }
      }
    )
  }
  const seriesOption = [
    {
      name: '',
      type: 'pie',
      clockWise: false,
      radius: [55, 59],
      hoverAnimation: false,
      itemStyle: {
        normal: {
          label: {
            show: true,
            position: 'outside',
            color: 'rgba(204, 213, 237, 1)',
            fontSize: 14,
            formatter: function (params) {
              if (params.name === 'Ⅰ~Ⅲ') {
                return option.aa.isUp
                  ? [`{b|${option.aa.bb}}  {a|Ⅰ~Ⅲ}`, `{d|${option.aa.tt}} {e| }   {c|同比} `].join('\n')
                  : [`{b|${option.aa.bb}}  {a|Ⅰ~Ⅲ}`, `{d|${option.aa.tt}} {f| }   {c|同比} `].join('\n')
              } else if (params.name === 'Ⅳ~Ⅴ') {
                return option.bb.isUp
                  ? [`{b|${option.bb.bb}}  {a|Ⅳ~Ⅴ}`, `{d|${option.bb.tt}} {e| }   {c|同比} `].join('\n')
                  : [`{b|${option.bb.bb}}  {a|Ⅳ~Ⅴ}`, `{d|${option.bb.tt}} {f| }   {c|同比} `].join('\n')
              } else if (params.name === '劣Ⅴ') {
                return option.cc.isUp
                  ? [`{b|${option.cc.bb}}  {a|劣Ⅴ}`, `{d|${option.cc.tt}} {e| }   {c|同比}`].join('\n')
                  : [`{b|${option.cc.bb}}  {a|劣Ⅴ}`, `{d|${option.cc.tt}} {f| }   {c|同比}`].join('\n')
              } else {
                return ''
              }
            },
            rich: {
              a: {
                fontSize: 14,
                color: '#333'
              },
              b: {
                fontSize: 18
              },
              c: {
                fontSize: 14,
                color: '#333'
              },
              d: {
                fontSize: 14
              },
              e: {
                fontSize: 14,
                backgroundColor: {
                  image: '../../images/up-2.png'
                }
              },
              f: {
                fontSize: 14,
                backgroundColor: {
                  image: '../../images/down-arrow.png'
                }
              }
            }
          },
          labelLine: {
            length: 15,
            length2: 30,
            show: true,
            color: '#00ffff'
          }
        }
      },
      data: data
    }
  ]
  return {
    color: colors,
    tooltip: {
      show: false
    },
    toolbox: {
      show: false
    },
    series: seriesOption
  }
}
export default {
  name: 'Pie2',
  props: {
    chartData: {
      type: Object,
      default () {
        return {}
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
    this.chart = this.$echarts.init(document.getElementById('pie2'))
    const asyncData = [
      {
        name: '劣Ⅴ',
        value: this.chartData.THREE_SL
      },
      {
        name: 'Ⅳ~Ⅴ',
        value: this.chartData.TWO_SL
      },
      {
        name: 'Ⅰ~Ⅲ',
        value: this.chartData.ONE_SL
      }
    ]
    const asyncOption = {
      aa: {
        bb: ((this.chartData.ONE_SL / this.chartData.DM_ZS) * 100).toFixed(0) + '%',
        tt: ((Math.abs(this.chartData.ONE_SL - this.chartData.ONE_PRE_SL) / this.chartData.ONE_PRE_SL) * 100).toFixed(0) + '%',
        isUp: this.chartData.ONE_SL - this.chartData.ONE_PRE_SL > 0
      },
      bb: {
        bb: ((this.chartData.TWO_SL / this.chartData.DM_ZS) * 100).toFixed(0) + '%',
        tt: ((Math.abs(this.chartData.TWO_SL - this.chartData.TWO_PRE_SL) / this.chartData.TWO_PRE_SL) * 100).toFixed(0) + '%',
        isUp: this.chartData.TWO_SL - this.chartData.TWO_PRE_SL > 0
      },
      cc: {
        bb: ((this.chartData.THREE_SL / this.chartData.DM_ZS) * 100).toFixed(0) + '%',
        tt: ((Math.abs(this.chartData.THREE_SL - this.chartData.THREE_PRE_SL) / this.chartData.THREE_PRE_SL) * 100).toFixed(0) + '%',
        isUp: this.chartData.THREE_SL - this.chartData.THREE_PRE_SL > 0
      }
    }
    const option = genOption(asyncData, asyncOption, this.colors)
    this.chart.setOption(option)
  }
}
</script>

<style scoped lang="scss">
.pie2-container {
  width: 100%;
  height: 100%;
  position: relative;
  #pie2 {
    width: 100%;
    height: 300px;
  }
  .content {
    position: absolute;
    top: 37.5%;
    left: 39%;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 2px solid RGBA(24, 76, 69, 1);
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
}
</style>
