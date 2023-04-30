import { Plugin } from "vue";
import ElementPlus from "element-plus";
import * as icons from "@element-plus/icons-vue";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";

export const plugn: Plugin = {
  install(app, ...options) {
    app.use(ElementPlus);

    Object.entries(icons).forEach(([key, value]) => {
      app.component(key, value);
    });
  },
};
