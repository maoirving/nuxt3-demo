<script lang="ts" setup>
const buttonType = computed<'button' | 'submit' | 'reset'>(() => 'button')
const emit = defineEmits(['click'])

const onClick = () => {
  emit('click')
}
</script>

<template>
  <div>
    <button :type="buttonType" @click="onClick">
      <slot />
    </button>
  </div>
</template>
