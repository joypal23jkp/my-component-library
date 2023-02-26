import type { App, Component, Plugin } from "vue-demi";
import type { ComponentInterface } from "@/types/global";

export const sfcInstaller = (components: ComponentInterface): Plugin => {
  console.log(components);
  return {
    install(app: App) {
      for (const [name, component] of Object.entries(components)) {
        registerSfc(app, component, name);
      }
    },
  };
};

export const registerSfc = <T extends Component>(
  app: App,
  component: T,
  name?: string
) => {
  app.component(`AK${name || component.name!}`, component);
};
