import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import store from "./store";
import axios from "axios";
// import Cookies from "js-cookie";
import { extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import {
  ValidationObserver,
  ValidationProvider,
} from "vee-validate/dist/vee-validate.full.esm";
import Vue from "vue";
import VueAxios from "vue-axios";
import Toasted from "vue-toasted";
import store from "./store";

// you can also pass options, check options reference below
Vue.use(Toasted, {
  duration: 4000,
  position: "bottom-center",
  // className: ["toasting"],
});

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

library.add(fas);
library.add(fab);
library.add(far);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.component("validation-provider", ValidationProvider);
Vue.component("validation-observer", ValidationObserver);

if (process.env.NODE_ENV === "production") {
  axios.defaults.baseURL = "https://sailsaudi.com/api";
} else {
  axios.defaults.baseURL = "https://ssf.almotamayiz.com/api/";
}

// Vue.config.productionTip = false;
if (store.state.token) {
  axios.defaults.headers.common["Authorization"] =
    "Bearer " + store.state.token;
}

// axios.defaults.headers = "referrerPolicy: 'no-referrer-when-downgrade'";
// axios.defaults.baseURL = "https://beta.api.saadaahnews.com/api";
// axios.defaults.baseURL = "http://staging.api.shrbat.com/api";
// axios.defaults.baseURL = "https://api.saadaahnews.com/api";
// axios.interceptors.request.use(
//   (config) => {
//     if (config.method.toLocaleLowerCase() === "get") {
//       config.headers["X-Locale"] = Cookies.get("locale") || "ar";
//     }
//     return config;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );

Vue.use(VueAxios, axios);
