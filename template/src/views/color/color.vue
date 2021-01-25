<template>
  <div class="color-container">
    <el-form>
      <el-form-item label='primary'>
        <colorPicker v-model="color.primary" />
      </el-form-item>
      <el-form-item label='success'>
        <colorPicker v-model="color.success" />
      </el-form-item>
      <el-form-item label='warning'>
        <colorPicker v-model="color.warning" />
      </el-form-item>
      <el-form-item label='danger'>
        <colorPicker v-model="color.danger" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="changeTheme">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import theme from '@/utils/color'

export default {
  data () {
    return {
      color: {
        primary: '#409EFF',
        success: '#67C23A',
        warning: '#E6A23C',
        danger: '#F56C6C'
      }
    }
  },
  methods: {
    changeTheme () {
      theme(this.color)
    }
  }
}
</script>
