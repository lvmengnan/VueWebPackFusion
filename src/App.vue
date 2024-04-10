<template>
  <el-row>
    <el-col :span="4"><nav-bar></nav-bar></el-col>
    <el-col :span="20">
      <div class="page_content">
        <router-view></router-view>
      </div>
      </el-col>
  </el-row>
</template>

<script setup>
import NavBar from '@/components/NavBar/index.vue';
</script>

<style lang="scss">
.page_content {
  padding: 25px;
}
</style>