// import './assets/main.css'
import '@/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { marked } from 'marked'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const markedMixin = {
  methods: {
    md: function (text) {
      return marked.parse(text)
    }
  }
}

app.use(createPinia())
app.use(router)
app.mixin(markedMixin)

app.mount('#app')

