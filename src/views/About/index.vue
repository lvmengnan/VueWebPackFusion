<template>
  <div class="about">
    <p>我是About</p>
    <p>Home页面被点击了{{ count }}次</p>
  </div>
</template>
<script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import './index.scss';

  const store = useStore();

  const count = computed(() => store.getters.getCount);
</script>