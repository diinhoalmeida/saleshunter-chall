import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Collapse, CollapseItem } from 'vant'

import App from './App.vue'
import router from './router'

import './input.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Collapse)
app.use(CollapseItem)

app.mount('#app')
