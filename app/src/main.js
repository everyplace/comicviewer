import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const One = { template: '<div>One component...</div>' }
const Test = { template: '<div>Test component...</div>' }


const routes = [
    { path: '/', component: HelloWorld },
    { path: '/one', component: One },
    { path: '/test', component: Test },
  ]

  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

const app = createApp(App)
app.use(router)
app.mount('#app')
