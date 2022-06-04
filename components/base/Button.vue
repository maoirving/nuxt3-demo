<script lang="ts">
import { PropType } from 'vue'
import { RouteLocationRaw } from 'vue-router'

export default defineComponent({
  inheritAttrs: false,

  props: {
    varint: {
      type: String,
      default: 'primary',
    },
    to: {
      type: Object as PropType<RouteLocationRaw>,
      default: undefined,
    },
    tag: {
      type: String,
      default: 'button',
    },
    href: {
      type: String,
      default: undefined,
    },
    border: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    const buttonType = computed<'button' | 'submit' | 'reset'>(() => 'button')

    const componentName = computed(() => {
      if (props.href) return 'a'
      else if (props.to) return 'NuxtLink'
      else return props.tag
    })

    const onClick = () => {
      emit('click')
    }
    return {
      buttonType,
      componentName,
      onClick,
    }
  },
})
</script>

<template>
  <component
    :is="componentName"
    :type="buttonType"
    v-bind="$attrs"
    @click="onClick"
  >
    <slot />
  </component>
</template>
