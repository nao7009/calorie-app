// https://nuxt.com/docs/api/configuration/nuxt-config

const path = require('path');

export default defineNuxtConfig({
  devtools: { enabled: true },

  // add
  nitro: {
    output: {
      publicDir: path.join(__dirname, '/docs')
    }
  },

  app: {
    baseURL: '/calorie-app',
  },
})
