<script lang="ts">
export default defineComponent({
  name: 'BaseButton',

  inheritAttrs: false,
})
</script>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    varint?: string
    border?: boolean
  }>(),
  {
    varint: 'primary',
    border: false,
  }
)

const emit = defineEmits<{
  (event: 'click'): void
}>()

const buttonType = computed<'button' | 'submit' | 'reset'>(() => 'button')

const color = computed(() => {
  let c = ''
  switch (props.varint) {
    case 'pink':
      c = 'pink'
      break
    default:
      c = '#000'
  }
  return c
})

const onClick = () => {
  emit('click')
}
</script>

<template>
  <button class="btn" :type="buttonType" v-bind="$attrs" @click="onClick">
    <slot />
  </button>
</template>

<style lang="scss">
.btn {
  color: v-bind(color);
}
</style>
