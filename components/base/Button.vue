<script lang="ts">
export default defineComponent({
  name: 'BaseButton',

  inheritAttrs: false,
})
</script>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: string
    border?: boolean
  }>(),
  {
    variant: 'primary',
    border: false,
  }
)

const emit = defineEmits<{
  (event: 'click'): void
}>()

const buttonType = computed<'button' | 'submit' | 'reset'>(() => 'button')

const color = computed(() => {
  let c = ''
  switch (props.variant) {
    case 'pink':
      c = 'pink'
      break
    default:
      c = '#fff'
  }
  return c
})

const onClick = () => {
  emit('click')
}
</script>

<template>
  <button
    class="hover:filter hover:brightness-95 px-1.5 py-0.5 bg-green-500 rounded btn"
    :type="buttonType"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<style lang="scss">
.btn {
  color: v-bind(color);
}
</style>
