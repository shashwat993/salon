// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  devtools: { enabled: true },
  app:{
    head:{
      link:[{rel:"stylesheet", href:"css/bootstrap.min.css"},{rel:"stylesheet", href:"css/index.css"}],
      script:[{src:"js/bootstrap.min.js"}],
    },
  },
  build: {
    // Add the following to the build configuration
    transpile: ['@mui','vuetify'],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    
  ],
  

});
