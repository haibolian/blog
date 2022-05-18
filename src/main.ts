import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { store } from './store';
import './utils/fillRouter';
import 'highlight.js/styles/atom-one-light.css';
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'

import '@/style/font.css';
import '@/style/index.css'

const app = createApp(App)

app.use(hljsVuePlugin)
app.use(router)
app.use(store)
app.mount('#app')

