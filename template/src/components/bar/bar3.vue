<template>
  <div class="container">
    <!-- <svg width="500" height="270">
      <g style="transform: translate(0, 10px)">
        <path :d="line" />
      </g>
    </svg> -->
    <div id="bar"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: [99, 71, 78, 25, 36, 92],
      line: ''
    }
  },
  mounted () {
    // this.calculatePath()
    this.renderBar()
  },
  methods: {
    getScales () {
      const x = this.$d3.scaleTime().range([0, 430])
      const y = this.$d3.scaleLinear().range([210, 0])
      this.$d3.axisLeft().scale(x)
      this.$d3.axisBottom().scale(y)
      x.domain(this.$d3.extent(this.data, (d, i) => i))
      y.domain([0, this.$d3.max(this.data, (d) => d)])
      return { x, y }
    },
    calculatePath () {
      const scale = this.getScales()
      const path = this.$d3
        .line()
        .x((d, i) => scale.x(i))
        .y((d) => scale.y(d))
      this.line = path(this.data)
    },
    renderBar () {
      const dataset = [2.5, 2.1, 1.7, 1.3, 0.9]
      const linear = this.$d3.scaleLinear()
        .domain([0, this.$d3.max(dataset)])
        .range([0, 250])
      console.log(linear(100))
      const width = '100%'
      const height = 200
      const svg = this.$d3.select('#bar')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
      const rectHeight = 25
      svg.selectAll('rect')
        .data(dataset)
        .enter() // 为缺失的元素返回占位符
        .append('rect')
        .attr('x', 20)
        .attr('y', (d, i) => i * rectHeight)
        .attr('width', d => linear(d))
        .attr('height', rectHeight - 2)
        .attr('fill', 'steelblue')
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  #bar {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
