/**
 * @desc 这是一个vuex创建的store
 * **/ 

import { createStore } from 'vuex';

const store = {
  state: {
    count: 0
  },

  getters: {
    getCount(state) {
      return state.count;
    }
  },

  mutations: {
    addCount(state) {
      console.log('1111')
      state.count ++;
    }
  },

  actions: {
    addCountAsync({ commit }) {
      commit('addCount')
    }
  },

  modules: {

  }
}

export default createStore(store);