import AOS from 'aos'

export default defineNuxtPlugin((nuxtApp) => {
  AOS.init({
    once: true,
    duration: 1000,
  })

  // Fix for page navigation in Nuxt
  nuxtApp.hook('page:finish', () => {
    AOS.refresh()
  })
})
