import './assets/main.css'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: []
})

const app = createApp(App)

app
  .use(router)
  .use(Buefy, {
    defaultIconPack: 'fas',
  })
  app.mount('#app')