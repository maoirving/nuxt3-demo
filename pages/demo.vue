<template>
  <div>
    <h1 class="primary-title">Demo Page</h1>
    <p>{{ count }}</p>
    <BaseButton @click="increment">add</BaseButton>
    <BaseDemo />
    <BaseButton @click="onClick">click me</BaseButton>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '~~/store/counter'

const counterStore = useCounterStore()
const { count } = storeToRefs(counterStore)
const { increment } = counterStore
const title = ref('hello')
const onClick = () => {
  // do something
}
</script>

<style lang="scss" scoped></style>
