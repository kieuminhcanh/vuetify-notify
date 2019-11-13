"use strict";

import Index from "./components/Index.vue";

export default {
  install(Vue, options = {}) {
    var extendComponent = Vue.extend(Index);

    var instance = new extendComponent({
      vuetify: options.vuetify,
      data: {
        options: options.options
      }
    });

    Vue.prototype.$nextTick(() => {
      Vue.prototype.$notify = instance.$mount();
      setTimeout(() => {
        document
          .getElementById(options.container || "app")
          .appendChild(instance.$el);
      }, 1000);
    });
  }
};
