import { createApp } from "vue";
import App from "./App.vue";
import { FontAwesomeIcon } from "./plugins/fontawesome";
import router from "./router";
import "@/assets/tailwind.css"

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
