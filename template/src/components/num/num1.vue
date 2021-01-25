<template>
  <div class="num1-container">
    <h1 :style="styleProp">{{ num }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Num1',
  props: {
    targetNum: {
      type: Number,
      default: 100
    },
    styleProp: {
      type: Object,
      default () {
        return {
          fontSize: '40px'
        }
      }
    }
  },
  data () {
    return {
      num: 0
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.num += Math.floor(this.targetNum / (1000 / 30))
      if (this.num >= this.targetNum) {
        this.num = this.targetNum
        clearInterval(this.timer)
      }
    }, 30)
  }
}
</script>

<style scoped lang="scss">
.num1-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
