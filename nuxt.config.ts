export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://use.typekit.net/fva8ohm.css' }
      ]
    }
  },

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    }
  }
})
