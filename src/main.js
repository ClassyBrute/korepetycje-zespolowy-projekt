import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css'

import 'mdb-vue-ui-kit/css/mdb.min.css'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

let app = createApp(App)

app.config.globalProperties.globalVar = 'globalVar'

app.use(Quasar, quasarUserOptions).use(router).component('Datepicker', Datepicker).mount('#app')
