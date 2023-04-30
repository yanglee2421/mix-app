import { createApp } from "vue";
import App from "./App.vue";
import { plugn } from "@/plugins";

const app = createApp(App);
app.use(plugn);
app.mount("#root");
