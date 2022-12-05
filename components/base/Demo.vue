<template>
  <div>
    <p>base demo component</p>
    <p>{{ count }}</p>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '~~/store/counter'

const counterStore = useCounterStore()
const { count } = storeToRefs(counterStore)
</script>

<!-- <script lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '~~/store/counter'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
  },

  emits: ['onChange'],

  setup(props, { attrs, emit }) {
    const counterStore = useCounterStore()
    const { count } = storeToRefs(counterStore)

    console.log(props)
    console.log(attrs)

    const onClick = () => {
      emit('onChange')
    }

    return {
      count,
      onClick,
    }
  },
})
</script> -->

<style lang="scss" scoped></style>
