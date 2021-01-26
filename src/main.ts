import { createApp } from 'vue'
import { store } from './store'
import { router } from './router'
import App from './App.vue'

import './assets/style/base.scss'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
