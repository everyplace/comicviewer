import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import './style.css'

import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import ViewComic from './components/ViewComic.vue'
import About from './components/About.vue'


const routes = [
    { path: '/', component: HelloWorld },
    { path: '/about', component: About },
    { path: '/view', component: ViewComic },
  ]

  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

const app = createApp(App)
app.use(router)
app.mount('#app')
