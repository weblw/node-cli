<template>
  <Pie4 :colors="colors" />
</template>

<script>
import Pie4 from '@/components/pie/pie4.vue'
export default {
  components: { Pie4 },
  data () {
    return {
      colors: ['RGBA(25, 97, 73, 0.8)', 'RGBA(33, 255, 158, 0.8)']
    }
  }
}
</script>
