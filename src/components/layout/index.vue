<template>
  <div class="h-full w-full">
    <layout-header></layout-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
    <el-footer></el-footer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import layoutHeader from './Header.vue'
export default defineComponent({
  components: {
    layoutHeader
  }
})
</script>
