<template>
  <div class="pie4-container">
    <div id="pie4"></div>
    <img src="@/images/you.png" alt="" /> <span>优良天数达标率</span>
  </div>
</template>

<script>
const genOption = ([color1, color2]) => {
  return {
    title: {
      show: true,
      text: '80%',
      textStyle: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'DINPro',
        fontWeight: 400
      },
      top: 'center',
      left: 'center'
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        startAngle: '-180',
        radius: ['75%', '90%'],
        hoverAnimation: false,
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        data: [
          {
            value: 20,
            name: '直接访问',
            itemStyle: {
              normal: {
                color: color1
              }
            }
          },
          {
            value: 80,
            name: '直接访问',
            itemStyle: {
              normal: {
                color: color2
              }
            }
          },
          {
            value: 25,
            name: '直接访问',
            itemStyle: {
              normal: {
                color: 'transparent'
              }
            }
          }
        ]
      },
      {
        type: 'pie',
        silent: true,
        radius: ['95%', '100%'],
        hoverAnimation: false,
        startAngle: '-108',
        data: [
          {
            value: '2',
            itemStyle: {
              normal: {
                color: 'transparent'
              }
            }
          },
          {
            value: '8',
            itemStyle: {
              normal: {
                color: color1
              }
            }
          }
        ],
        labelLine: {
          normal: {
            show: false
          }
        }
      }
    ]
  }
}
export default {
  name: 'Pie4',
  props: {
    colors: {
      type: Array,
      default () {
        return []
      }
    }
  },
  mounted () {
    this.chart = this.$echarts.init(document.getElementById('pie4'))
    const option = genOption(this.colors)
    this.chart.setOption(option)
  }
}
</script>

<style scoped lang="scss">
.pie4-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  #pie4 {
    width: 100%;
    height: 150px;
  }
  img {
    width: 28px;
    height: 28px;
    position: absolute;
    left: 32%;
    bottom: 32%;
  }
  span {
    font-size: 13px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #333;
    display: block;
    position: absolute;
    bottom: 10%;
    left: 38%;
  }
}
</style>
