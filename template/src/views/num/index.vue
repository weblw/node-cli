<template>
  <div class="num">
    <div><Num2 /></div>
    <div><Num1 /></div>
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
import Num2 from './num2'
import Num1 from './num1'
export default {
  name: 'num',
  components: {
    Num2,
    Num1
  }
}
</script>
<style lang="scss" scoped>
@import '@/css/mixin.scss';
.num {
  @include echarts-layout;
  width: 100%;
  height: 100%;
}
</style>
