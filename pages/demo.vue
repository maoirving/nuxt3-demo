<template>
  <div>
    <h1>Demo Page</h1>
    <p>{{ count }}</p>
    <BaseButton @click="increment">add</BaseButton>
    <BaseDemo />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '~~/store/counter'

const counterStore = useCounterStore()
const { count } = storeToRefs(counterStore)
const { increment } = counterStore
</script>

<style lang="scss" scoped></style>
