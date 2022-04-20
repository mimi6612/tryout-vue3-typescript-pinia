import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store, key } from "./store";
import { createPinia } from "pinia";

createApp(App).use(store, key).use(router).use(createPinia()).mount("#app");
