import { defineStore } from 'pinia'

export const useDemoStore = defineStore({
  id: 'demo',
  state: () => {
    return {
      firstName: 'Small',
      lastName: 'Demo',
    }
  },
  actions: {},
  getters: {
    fullName: state => `${state.firstName} ${state.lastName}`,
  },
})
