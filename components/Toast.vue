<template>
  <v-snackbar
    v-model="model"
    :bottom="options.y === 'bottom'"
    :color="options.color"
    :left="options.x === 'left'"
    :right="options.x === 'right'"
    :timeout="options.timeout"
    :top="options.y === 'top'"
  >
    {{ text }}

     <template v-slot:action="{ attrs }">
        <v-btn
          dark
          text
          v-bind="attrs"
          @click="close"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>
<script>
const _options = {
  x: "left",
  y: "bottom",
  timeout: 3000,
  color: "default"
};
export default {
  data() {
    return {
      model: false,
      promise: null,

      text: {},
      options: {}
    };
  },
  methods: {
    show(text, options) {
      return new Promise((resolve, reject) => {
        if (this.model) this.model = false;
        this.$nextTick(() => {
          this.promise = Object.assign({}, { resolve, reject });
          this.text = text;
          this.options = Object.assign(_options, options);
          this.model = true;
        });
      });
    },
    close() {
      this.promise.resolve(true);
      this.model = false;
    }
  }
};
</script>
