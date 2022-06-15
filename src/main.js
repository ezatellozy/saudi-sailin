import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import axios from 'axios'
import '@/style/main.scss'
import VueAxios from 'vue-axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Paginate from 'vuejs-paginate-next'
import Cookies from 'js-cookie'
import mitt from 'mitt'
const emitter = mitt()
import Toaster from '@meforma/vue-toaster'

library.add(fas)
library.add(fab)
library.add(far)

// api link
const apiLink = `https://ilawfairv2.technomasrsystems.com/api`
// reset password global
const ResetPasswordLink =
  'https://ilawfairv2.technomasrsystems.com/password/reset'

axios.defaults.baseURL = apiLink
axios.defaults.headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  lang: i18n.global.locale,
  user: store.getters.userId,
  'Accept-Language': Cookies.get('locale'),
  currency: Cookies.get('currency'),
}

const app = createApp(App).use(i18n)

app.config.globalProperties.globalResetPassword = ResetPasswordLink

app.component('FontAwesomeIcon', FontAwesomeIcon)
app.use(VueAxios, axios)
app.use(store)
app.use(Paginate)
app.config.globalProperties.emitter = emitter
app
  .use(Toaster, {
    duration: 4000,
    position: 'bottom',
  })
  .provide('toast', app.config.globalProperties.$toast)

app.use(router)
app.mount('#app')
