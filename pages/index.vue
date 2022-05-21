<script lang="ts" setup>
const title = ref('Home Page')
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <NuxtLink to="/404"> to 404 Page</NuxtLink>
  </div>
</template>
