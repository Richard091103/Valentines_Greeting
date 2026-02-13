// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: [
    'primeicons/primeicons.css', 
    '~/assets/styles/main.scss',
    'aos/dist/aos.css'
  ],
})