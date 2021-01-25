<template>
  <div class="color">
    <el-row>
      <el-col :span="12">
        <Test />
      </el-col>
      <el-col :span="6">
        <Color />
      </el-col>
      <el-col :span="6">
        <Color2 />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Test from './test'
import Color from './color'
import Color2 from './color2'
export default {
  name: 'ColorComp',
  components: {
    Test,
    Color,
    Color2
  }
}
</script>

<style>
.color {
  width: 100%;
}
</style>
