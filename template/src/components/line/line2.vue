<template>
    <div id="line2">Line2</div>
</template>

<script>

export default {
  name: 'Line2',
  props: {
    chartData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  mounted () {
    this.chart = this.$echarts.init(document.getElementById('line2'))
    this.chart.setOption(this.genOption(this.chartData))
  },
  methods: {
    genOption (chartData) {
      console.log(this.chartData)
      const Xname = []
      const data1 = []
      const data2 = []
      this.chartData.forEach((v, i) => {
        Xname.push(v.name)
        data1.push(v.value1)
        data2.push(v.value2)
      })
      console.log(Xname, data1, data2)
      const option = {
        backgroundColor: '#080b30',
        title: {
          text: '渐变折线图',
          left: '12%',
          top: '13%',
          textStyle: {
            color: '#999',
            fontSize: 14
          }
        },
        legend: {
          show: true,
          icon: 'circle',
          top: '13%',
          itemWidth: 6,
          itemHeight: 6,
          itemGap: 25
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: [{
          type: 'category',
          data: Xname,
          axisLine: {
            lineStyle: {
              color: '#ddd'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0,
            textStyle: {
              color: '#c56790'
            },
            margin: 15
          },
          boundaryGap: false
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#ddd'
            }
          },
          axisLabel: {
            textStyle: {
              color: '#c56790'
            }
          },
          splitLine: {
            show: false
          }
        }],
        series: [{
          name: 'S',
          type: 'line',
          data: data1,
          symbolSize: 6,
          symbol: 'circle',
          smooth: true,
          lineStyle: {
            color: '#fe9a8b'
          },
          itemStyle: {
            normal: {
              color: '#fe9a8b',
              borderColor: '#fe9a8b'
            }
          },
          areaStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#fe9a8bb3'
            },
            {
              offset: 1,
              color: '#fe9a8b03'
            }
            ])
          },
          emphasis: {
            itemStyle: {
              color: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.5,
                colorStops: [{
                  offset: 0,
                  color: '#fe9a8b'
                },
                {
                  offset: 0.4,
                  color: '#fe9a8b'
                },
                {
                  offset: 0.5,
                  color: '#fff'
                }, {
                  offset: 0.7,
                  color: '#fff'
                }, {
                  offset: 0.8,
                  color: '#fff'
                }, {
                  offset: 1,
                  color: '#fff'
                }
                ]
              },
              borderColor: '#fe9a8b',
              borderWidth: 2
            }
          }
        }, {
          name: 'M',
          type: 'line',
          data: data2,
          symbolSize: 6,
          symbol: 'circle',
          smooth: true,
          lineStyle: {
            color: '#9E87FF'
          },
          itemStyle: {
            normal: {
              color: '#9E87FF',
              borderColor: '#9E87FF'
            }
          },
          areaStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#9E87FFb3'
            },
            {
              offset: 1,
              color: '#9E87FF03'
            }
            ])
          },
          emphasis: {
            itemStyle: {
              color: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.5,
                colorStops: [{
                  offset: 0,
                  color: '#9E87FF'
                },
                {
                  offset: 0.4,
                  color: '#9E87FF'
                },
                {
                  offset: 0.5,
                  color: '#fff'
                }, {
                  offset: 0.7,
                  color: '#fff'
                }, {
                  offset: 0.8,
                  color: '#fff'
                }, {
                  offset: 1,
                  color: '#fff'
                }
                ]
              },
              borderColor: '#9E87FF',
              borderWidth: 2
            }
          }
        }
        ]
      }
      return option
    }
  }
}
</script>

<style scoped lang="scss">
#line2{
    width: 100%;
    height: 100%;
}
</style>
