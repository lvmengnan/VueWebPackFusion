// 选项式pinia产生的store
import { defineStore } from 'pinia';

const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 1
  }),

  getters: {
    getDobuleCount: state => state.count * 2
  },

  actions: {
    addCounter() {
      this.count++;
    }
  }
})

export default useCounterStore;
