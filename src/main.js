import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { focusDirective } from './directives';

import '@/assets/styles/styles.scss'

const app = createApp(App)

app.directive('focus', focusDirective);


app.use(router)
app.use(store)

app.mount('#app')
