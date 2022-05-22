import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true, // default: true
  modules: ['@vueuse/nuxt'],
  css: ['@/assets/sass/app.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/sass/utils/variables.scss";',
        },
      },
    },
  },
})
