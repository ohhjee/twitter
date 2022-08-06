import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Heroicons from "vue-heroicons";
import "./assets/css/tailwind.css";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fas, fab, far);

createApp(App)
  .use(store)
  .use(router)
  .use(Heroicons)
  .component("fonts", FontAwesomeIcon)
  .mount("#app");
