export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  const doubleCounter = computed(() => count.value * 2)

  const increment = () => {
    count.value++
  }

  return {
    count,
    doubleCounter,
    increment,
  }
})
