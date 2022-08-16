import { createApp } from "vue";
import App from "./App.vue";
import Heroicons from "vue-heroicons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fas, fab, far);
import router from "./router";
import store from "./store";
import "./assets/css/tailwind.css";
import VueObserveVisibility from 'vue-observe-visibility'

createApp(App)
.component("fonts", FontAwesomeIcon)
.use(Heroicons)
.use(store)
.use(router)
.use(VueObserveVisibility)
.mount("#app");
