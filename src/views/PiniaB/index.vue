<template>
  <div class="pinia_b">
    <p>我是一个享用pinia提供数据的页面B</p>
    <p>当前counterStore的count值：{{ counterStore.count }}</p>
    <p>当前counterStore的dobuleCount值：{{ counterStore.getDobuleCount }}</p>
    <p>当boolStore的bool值：{{ boolStore.bool }}</p>
  </div>
</template>
<script setup>
import useCounterStore from '@/sotre/pinia_stores/counterStore';
import useBoolStore from '@/sotre/pinia_stores/boolStore';

const counterStore = useCounterStore();
const boolStore = useBoolStore();
</script>