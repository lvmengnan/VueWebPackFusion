<template>
  <div class="home">
    <p>{{ count }}</p>
    <button @click="addCount">点击</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import './index.scss';
const store = useStore();

const count =computed(() => store.getters.getCount);

function addCount() {
  store.commit('addCount');
}

console.log(process.env.NODE_ENV)
</script>