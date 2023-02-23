// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: process.env.SSR !== 'false', // default: true
  modules: [
    // docs: https://vueuse.org
    '@vueuse/nuxt',
    // docs: https://tailwindcss.nuxtjs.org
    '@nuxtjs/tailwindcss',
    // docs: https://pinia.vuejs.org/ssr/nuxt.html
    '@pinia/nuxt',
  ],
  plugins: ['@/plugins/directives.ts'],
  css: ['@/assets/sass/app.scss'],
  devServer: {
    host: process.env.HOST || 'localhost',
    port: parseInt(process.env.PORT || '6666'),
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
    ],
  },
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
