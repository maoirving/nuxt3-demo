import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'demo',
  state: () => {
    return {
      counter: 0,
    }
  },

  getters: {
    doubleCounter: state => state.counter * 2,
  },

  actions: {
    increment() {
      this.counter++
    },
  },
})
