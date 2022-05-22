<script lang="ts" setup>
const title = ref('PLP')
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <div>
      <NuxtLink :to="{ name: 'product-detail-slug', params: { slug: 'iPhone13' } }">
        iPhone 13
      </NuxtLink>
    </div>
  </div>
</template>
