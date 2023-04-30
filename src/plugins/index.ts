import { Plugin } from "vue";
import ElementPlus from "element-plus";
import * as icons from "@element-plus/icons-vue";

const plugn: Plugin = {
  install(app, ...options) {
    app.use(ElementPlus);

    Object.entries(icons).forEach(([key, value]) => {
      app.component(key, value);
    });
  },
};

export default plugn;
