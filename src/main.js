import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'; 
import { createPinia } from 'pinia'

//import createRouter from './pages/routes.js'
import App from './App.vue'

const store = createPinia()
//const router = createRouter(createWebHistory())
const router = createRouter({
  history: createWebHistory(),
  routes: generatedRoutes,
});
const app = createApp(App)
app.use(router).use(store).mount('#app')