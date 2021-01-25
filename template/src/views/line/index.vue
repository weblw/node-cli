<template>
  <div class="line">
    <div><Line3 /></div>
    <div><Line2 /></div>
    <div><Line1 /></div>
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
import Line3 from './line3'
import Line2 from './line2'
import Line1 from './line1'
export default {
  name: 'LineComp',
  components: {
    Line3,
    Line2,
    Line1
  }
}
</script>
<style lang="scss" scoped>
@import '@/css/mixin.scss';
.line {
  @include echarts-layout;
  width: 100%;
  height: 100%;
}
</style>
