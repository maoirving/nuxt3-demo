<script lang="ts">
export default defineComponent({
  name: 'BaseModal',

  inheritAttrs: false,
})
</script>
<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

const visible = ref(false)
const containerEl = shallowRef<null | HTMLElement>(null)

const showModal = () => {
  visible.value = true
}

const closeModal = () => {
  visible.value = false
}

onClickOutside(containerEl, () => {
  closeModal()
})

defineExpose({
  visible,
  showModal,
  closeModal,
})
</script>

<template>
  <div v-if="visible" ref="containerEl" class="modal">
    <p>modal</p>
    <BaseButton class="modal__close" @click="closeModal">close</BaseButton>
  </div>
</template>

<style lang="scss">
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50vh;
  height: 50vh;
  border-radius: 10px;
  background-color: pink;
  transform: translate(-50%, -50%);
  &__close {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
