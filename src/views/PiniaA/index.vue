<template>
  <div class="pinia_a">
    <p>我是一个享用pinia提供数据的页面A</p>
    <p>count: {{ counterStore.count }}</p>
    <button @click="counterStore.addCounter">+ Add-Count</button>
    <p>current is: {{ boolStore.bool  }}</p>
    <p>next will be: {{ boolStore.nextIsBool }}</p>
    <button @click="boolStore.changeBool">To Change Bool</button>
  </div>
</template>
<script>
import { mapActions, mapStores } from 'pinia';
import useCounterStore from '@/sotre/pinia_stores/counterStore';
import useBoolStore from '@/sotre/pinia_stores/boolStore';

export default {
  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  computed: {
    ...mapStores([useCounterStore, useBoolStore])
  },

  methods: {
    
  }
}
</script>