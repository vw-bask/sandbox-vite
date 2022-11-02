import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'; 

//import createRouter from './pages/routes.js'
//import createRouter from './lib/router.js'
import App from './App.vue'

//const router = createRouter(createWebHistory())
const router = createRouter({
  history: createWebHistory(),
  routes: generatedRoutes,
});
const app = createApp(App)
app.use(router).mount('#app')