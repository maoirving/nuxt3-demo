<template>
  <div>
    <h1>Demo Page</h1>
    <p>{{ counterStore.counter }}</p>
    <BaseButton @click="counterStore.increment">add</BaseButton>
    <BaseDemo />
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '~~/store/counter'

const counterStore = useCounterStore()
</script>

<style lang="scss" scoped></style>
