<template>
  <div class="bar">
    <div><Bar3 /></div>
    <div><Bar2 /></div>
    <div><Bar1 /></div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
  </div>
</template>

<script>
import Bar3 from './bar3'
import Bar2 from './bar2'
import Bar1 from './bar1'
export default {
  name: 'bar',
  components: {
    Bar3,
    Bar2,
    Bar1
  }
}
</script>
<style lang="scss" scoped>
@import '@/css/mixin.scss';
.bar {
  @include echarts-layout;
  width: 100%;
  height: 100%;
}
</style>
