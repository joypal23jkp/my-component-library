import type { App, Component } from "vue";
import * as components from "@/components";

const componentList: {
  [key: string]: Component;
} = components?.default;
export default {
  install(app: App) {
    app.component("AKButton", componentList["AKButton"]);
    app.component("AKLabel", componentList["AKLabel"]);
  },
};
