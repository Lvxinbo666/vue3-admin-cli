<template>
  <el-container class="layout h-full w-full">
    <el-aside>
      <!-- logo start -->
      <div class="height-60-px"></div>
      <!-- logo end -->
    </el-aside>
    <el-container>
      <el-header class="p-0"> </el-header>
      <el-main class="pr-10 pl-10 pb-10 pt-0">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
