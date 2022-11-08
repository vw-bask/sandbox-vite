import { createApp, provide, h } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'; 
import { createPinia } from 'pinia'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'

//import createRouter from './pages/routes.js'
import App from './App.vue'
//for tailwind
import './style.css';
//for apollo
const cache = new InMemoryCache()
const apolloClient = new ApolloClient({
  cache,
  uri: 'https://rickandmortyapi.com/graphql',
})
const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})

const store = createPinia()

//const router = createRouter(createWebHistory())
//setup auto routing
const router = createRouter({
  history: createWebHistory(),
  routes: generatedRoutes,
});

//const app = createApp(App)
const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})

app.use(router).use(store).use(apolloProvider).mount('#app')