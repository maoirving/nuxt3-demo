<template>
  <div>
    <p>base demo component</p>
    <p>{{ counter }}</p>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '~~/store/counter'

const counterStore = useCounterStore()
const { counter } = storeToRefs(counterStore)
</script>

<style lang="scss" scoped></style>
