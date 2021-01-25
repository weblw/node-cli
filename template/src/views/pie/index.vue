<template>
  <div class="pie">
    <div><Pie5 /></div>
    <div><Pie4 /></div>
    <div><Pie3 /></div>
    <div><Pie2 /></div>
    <div><Pie1 /></div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
  </div>
</template>

<script>
import Pie5 from './pie5'
import Pie4 from './pie4'
import Pie3 from './pie3'
import Pie2 from './pie2'
import Pie1 from './pie1'
export default {
  name: 'Pie',
  components: {
    Pie5,
    Pie4,
    Pie3,
    Pie2,
    Pie1
  }
}
</script>
<style lang="scss" scoped>
@import '@/css/mixin.scss';
.pie {
  @include echarts-layout;
  width: 100%;
  height: 100%;
}
</style>
