<template>
  <div class="element_plus_icons">
    <el-icon><Plus /></el-icon>
    <el-icon><Minus /></el-icon>
    <el-icon><Odometer /></el-icon>
  </div>
</template>

<script setup>
import {
  Plus,
  Minus,
  Odometer,
} from '@element-plus/icons-vue';
import $ from 'jquery';

console.log('jquery', $);
</script>