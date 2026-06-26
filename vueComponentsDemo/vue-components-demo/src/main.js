

import { createApp } from 'vue'
import App from './App.vue'
import ContactUs from "./components/ContactUs.vue"
import ButtonCount from "./components/ButtonCount.vue"

const app = createApp(App)

app.component("contact-us", ContactUs)
app.component("button-count",ButtonCount) 

app.mount('#app')
