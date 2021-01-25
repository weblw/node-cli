<template>
  <div class="line">
      <div class="box" id="container"  style="width:1500px; height:1000px"></div>
  </div>
</template>
<script>

export default {
  name: 'index',
  components: {

  },
  mounted () {
    this.initEchart()
  },
  methods: {
    initEchart () {
      const myChart = this.$echarts.init(document.getElementById('container'))

      // 指定图表的配置项和数据
      const option = {
        geo: {
          show: true,
          map: 'china',
          zoom: 1.1, // 缩放比例
          itemStyle: {
            borderWidth: 10,
            borderColor: '#f40',
            shadowColor: 'rgba(0, 0, 0, 1)',
            shadowBlur: 10,
            shadowOffsetX: 14,
            shadowOffsetY: 15
          }
        },
        series: [{
          name: '地图',
          type: 'map',
          map: 'china',
          roam: false, // 是否可缩放
          zoom: 1.1, // 缩放比例
          data: [{
            name: '陕西',
            itemStyle: {
              areaColor: '#ff4400',
              borderColor: 'rgb(185, 220, 227)',
              borderWidth: '1'
            }
          }],
          itemStyle: {
            normal: {
              show: true,
              areaColor: '#2E98CA',
              borderColor: 'rgb(185, 220, 227)',
              borderWidth: '1'
            }
          },
          emphasis: {
            itemStyle: {
              areaColor: '#ff4400',
              borderColor: 'rgb(185, 220, 227)',
              borderWidth: '1'
            }
          },
          label: {
            normal: {
              show: true, // 显示省份标签
              textStyle: {
                color: 'rgb(249, 249, 249)', // 省份标签字体颜色
                fontSize: 12
              },
              formatter: p => p.name
            }
          }
        }]
      }

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/css/mixin.scss';
.box {
//   @include echarts-layout;
  width: 500px;
  height: 500px;
}

</style>
