import { createApp } from 'vue'
import './style.css'
import Router from './router/index'
import App from './App.vue'

const app = createApp(App)

app.use(Router)
app.mount('#app')
