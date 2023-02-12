import { createApp } from "vue";
import App from "./App.vue";
import ComponentPlugin from "@/index";
import "./assets/main.css";

const app = createApp(App);
app.use(ComponentPlugin);
app.mount("#app");
