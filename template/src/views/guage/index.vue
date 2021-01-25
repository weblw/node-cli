<template>
  <div class="guage">
    <div><Guage2 /></div>
    <div><Guage1 /></div>
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
import Guage2 from './guage2'
import Guage1 from './guage1'
export default {
  name: 'Guage',
  components: {
    Guage2,
    Guage1
  }
}
</script>
<style lang="scss" scoped>
@import '@/css/mixin.scss';
.guage {
  @include echarts-layout;
  width: 100%;
  height: 100%;
}
</style>
