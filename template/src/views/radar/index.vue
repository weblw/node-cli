<template>
  <div class="radar">
    <div><Radar1 /></div>
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
import Radar1 from './radar1'
export default {
  name: 'radar',
  components: {
    Radar1
  }
}
</script>
<style lang="scss" scoped>
@import '@/css/mixin.scss';
.radar {
  @include echarts-layout;
  width: 100%;
  height: 100%;
}
</style>
