import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: process.env.SSR !== 'false', // default: true
  modules: ['@vueuse/nuxt'],
  plugins: ['@/plugins/directives.ts'],
  css: ['@/assets/sass/app.scss'],
  vite: {
    server: {
      proxy: {
        '/api/': {
          target: process.env.API_ENDPOINT,
          changeOrigin: true,
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/sass/utils/variables.scss";',
        },
      },
    },
  },
})
