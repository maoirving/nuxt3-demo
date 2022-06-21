<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

const { x, y } = useMouse()

const title = ref('Home Page')
const targetEl = ref(null)
const ballVisible = ref(false)

onClickOutside(targetEl, () => {
  ballVisible.value = false
})

const onShowBall = () => {
  ballVisible.value = true
}
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <p>mouse: ({{ x }}, {{ y }})</p>
    <div>
      <NuxtLink :to="{ name: 'demo' }"> to Demo </NuxtLink>
    </div>
    <div>
      <NuxtLink :to="{ name: 'example' }"> to Example </NuxtLink>
    </div>
    <div>
      <NuxtLink
        :to="{ name: 'product-lister-slug', params: { slug: 'iPhone' } }"
      >
        to PLP
      </NuxtLink>
    </div>
    <div>
      <NuxtLink
        :to="{ name: 'product-detail-slug', params: { slug: 'iPhone13' } }"
      >
        to PDP
      </NuxtLink>
    </div>
    <div>
      <BaseButton varint="primary" @click="onShowBall"> show ball </BaseButton>
    </div>
    <div v-if="ballVisible" ref="targetEl" class="targer">click outside!</div>
  </div>
</template>

<style lang="scss" scoped>
.targer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: $c-primary;
  border-radius: 50%;
  cursor: pointer;
}
</style>
