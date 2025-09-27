// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@element-plus/nuxt','@nuxtjs/tailwindcss'],
  css: ['/assets/styles/main.css'],
  elementPlus: {
    importStyle: 'css', // or 'scss'
  },
  ssr: true,
  runtimeConfig: {
    public: {
      baseToken: process.env.BASE_TOKEN || '',
      baseURL: process.env.BASE_URL || 'http://127.0.0.1:3000'
    }
  }
})