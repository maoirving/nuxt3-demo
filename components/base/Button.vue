<script lang="ts" setup>
const buttonType = computed<'button' | 'submit' | 'reset'>(() => 'button')
</script>

<template>
  <div>
    <button :type="buttonType">
      <slot />
    </button>
  </div>
</template>
