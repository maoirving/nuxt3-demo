<script setup lang="ts">
import BaseModal from '~~/components/base/Modal.vue'

const { x, y } = useMouse()

const title = ref('Home Page')
const modalEl = ref<InstanceType<typeof BaseModal> | null>(null)

const onShowModal = () => {
  if (!modalEl.value) return
  modalEl.value.showModal()
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
      <BaseButton varint="primary" @click="onShowModal">
        show Modal
      </BaseButton>
    </div>
    <BaseModal ref="modalEl" />
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
