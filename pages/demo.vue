<template>
  <div>
    <h1>Demo Page</h1>
    <p>{{ counter }}</p>
    <BaseButton @click="counterStore.increment">add</BaseButton>
    <BaseDemo />
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '~~/store/counter'

const counterStore = useCounterStore()
const { counter } = counterStore
</script>

<style lang="scss" scoped></style>
