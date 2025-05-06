import './assets/Main.scss'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

// Use plugin with optional defaults


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'
const app = createApp(App)
app.use(VCalendar, {})
app.use(createPinia())
app.use(router)
app.use(vue3GoogleLogin, {
  clientId: "218610817574-pal03gfq7is4bf746uiqil1qb6adj1im.apps.googleusercontent.com",
})
app.mount('#app')
