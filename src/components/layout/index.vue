<template>
  <div class="h-full w-full">
    <layout-header></layout-header>
    <el-container class="height-calc-60">
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>
<script lang="ts">
import layoutHeader from './Header.vue'
export default defineComponent({
  components: {
    layoutHeader
  }
})
</script>
