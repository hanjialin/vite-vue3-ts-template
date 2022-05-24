import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { createPinia } from 'pinia'
import 'normalize.css/normalize.css'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
