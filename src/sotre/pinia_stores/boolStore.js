// 组合式pinia产生的store
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

const useBoolStore = defineStore('bool', () => {
  const bool = ref(true);

  const nextIsBool = computed(() => !bool.value);

  function changeBool() {
    bool.value = !bool.value;
  }

  return { bool, nextIsBool, changeBool }
})

export default useBoolStore;