<template>
  <div class="slot_layout">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="content">
      <slot></slot>
    </div>
    <div class="footer">
      <slot name="footer" :data="versionInfo"></slot>
      <p>当前版本信息：{{ versionInfo.name }} - {{ versionInfo.no }}</p>
    </div>
  </div>
</template>
<script setup>
import './index.scss';

const versionInfo = {
  name: 'VueWebpackFusion',
  no: '1.0.1',
  date: '2024-04-14'
}
</script>