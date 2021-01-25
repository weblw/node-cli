<template>
  <div class="pie5-container">
    <div id="dot" :style="{
      top: 'calc(50% + ' + position.y + 'px)',
      left: 'calc(50% + ' + position.x + 'px)'
    }"></div>
    <div id="pie5">Pie5</div>
  </div>
</template>

<script>
const grid = {
  left: '5px',
  right: '5px',
  top: '5px',
  bottom: '5px'
}
const placeHolderStyle = {
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
const data = []
for (var i = 0; i < 16; i++) {
  data.push({
    value: 20,
    labelLine: {
      show: false
    },
    itemStyle: {
      normal: {
        borderWidth: 0,
        shadowBlur: 20,
        borderColor: '#00f948',
        shadowColor: '#12b4ff'
      }
    }
  }, {
    value: 3,
    name: '',
    itemStyle: placeHolderStyle
  })
}
const seriesObj = {
  name: '',
  animationDuration: 3000,
  type: 'pie',
  clockWise: false,
  radius: ['50%', '65%'],
  hoverAnimation: false,
  data: data
}
const option = {
  color: ['#5CF9FE'],
  grid: grid,
  title: {
    show: false
  },
  tooltip: {
    show: false
  },
  legend: {
    show: false
  },
  series: seriesObj
}
function genOption (data, colors) {
  return option
}
export default {
  name: 'Pie5',
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
  data () {
    return {
      position: {
        x: 0,
        y: -100
      },
      angle: -90
    }
  },
  mounted () {
    this.chart = this.$echarts.init(document.getElementById('pie5'))
    const option = genOption(this.chartData, this.colors)
    this.chart.setOption(option)
    this.timer = setInterval(() => {
      this.angle -= 5
      if (this.angle < -450) {
        clearInterval(this.timer)
      }
      this.position = this.getPoint()
    }, 30)
  },
  methods: {
    getPoint () {
      const x1 = 100 * Math.cos(this.angle * Math.PI / 180)
      const y1 = 100 * Math.sin(this.angle * Math.PI / 180) * 0.6
      return {
        x: x1 - 65,
        y: y1
      }
    }
  }
}
</script>

<style scoped lang="scss">
.pie5-container {
  width: 100%;
  height: 100%;
  position: relative;
  // transform: translateY(90deg);
  #pie5 {
    width: 270px;
    height: 300px;
    transform: rotateX(60deg);
  }
  #dot {
    width: 8px;
    height: 8px;
    position: absolute;
    border-radius: 50%;
    background-color: blue;
  }
}
</style>
