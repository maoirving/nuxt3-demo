import { defineStore } from 'pinia'

export const useDemoStore = defineStore('demo', () => {
  const firstName = ref('Small')
  const lastName = ref('Demo')

  const fullName = computed(() => `${firstName.value} ${lastName.value}`)

  return {
    firstName,
    lastName,
    fullName,
  }
})
