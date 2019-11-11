<template>
  <div>
    <toast-component ref="toast" />
    <dialog-component ref="dialog" />
  </div>
</template>

<script>
import ToastComponent from "./Toast";
import DialogComponent from "./Dialog";

export default {
  components: { ToastComponent, DialogComponent },
  data() {
    return {};
  },
  computed: {},
  methods: {
    toast(text, opts) {
      let options = Object.assign(this.options.toast, opts);
      return this.$refs["toast"].show(text, options);
    },
    show(data, opts = {}) {
      let options = { ...this.options.dialog, ...opts };
      return this.$refs["dialog"].show(data, options);
    },
    confirm(data, opts = {}) {
      return this.show(data, { ...opts, ...{ type: "confirm" } });
    },
    prompt(data, opts = {}) {
      return this.show(data, { ...opts, ...{ type: "prompt" } });
    }
  },
  mounted() {
    console.log(this.options);
  }
};
</script>
