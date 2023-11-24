import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    ssr:true,
    components,
    directives,
  })
  app.vueApp.use(vuetify)
})
