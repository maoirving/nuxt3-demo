<script lang="ts" setup>
const title = ref('404 Page')
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <NuxtLink to="/"> back Home</NuxtLink>
  </div>
</template>
