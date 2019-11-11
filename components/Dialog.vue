<template>
  <v-dialog max-width="500" persistent v-model="model">
    <v-card class="text-center py-5">
      <v-icon
        :color="data.type | color"
        class="py-5"
        size="128"
        v-if="data.type"
        >{{ data.type | icon }}</v-icon
      >
      <v-card-title class="justify-center headline" v-if="data.title">
        {{ data.title }}
      </v-card-title>
      <v-card-text>
        {{ data.text }}
        <v-text-field
          class="mt-5"
          clearable
          outlined
          v-if="options.type === 'prompt'"
          v-model="dataInput"
        ></v-text-field>
      </v-card-text>
      <v-card-actions class="justify-center">
        <template v-if="options.type === 'confirm'">
          <v-btn @click.stop="no" large width="120">Cancel</v-btn>
          <v-btn @click.stop="yes" class="primary" dark large width="120"
            >OK</v-btn
          >
        </template>
        <template v-else-if="options.type === 'prompt'">
          <v-btn @click.stop="close" large width="120">Cancel</v-btn>
          <v-btn @click.stop="yesPrompt" class="primary" dark large width="120"
            >OK</v-btn
          >
        </template>
        <template v-else>
          <v-btn @click.stop="yes" large width="120">OK</v-btn>
        </template>
      </v-card-actions>
    </v-card>
  </v-dialog>
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

      data: {},
      dataInput: "",
      options: {}
    };
  },
  filters: {
    icon: function(value) {
      switch (value) {
        case "success":
          return "mdi-check-circle-outline";
        case "info":
          return "mdi-information-outline";
        case "warning":
          return "mdi-alert-decagram";
        case "error":
          return "mdi-alert";
        default:
          return "";
      }
    },
    color: function(value) {
      switch (value) {
        case "success":
          return "success";
        case "info":
          return "info";
        case "warning":
          return "warning";
        case "error":
          return "error";
        default:
          return "";
      }
    }
  },
  methods: {
    show(data, options) {
      return new Promise((resolve, reject) => {
        this.promise = Object.assign({}, { resolve, reject });

        this.data = { ...this.data, ...data };
        this.options = { ..._options, ...options };
        console.log(this.data, this.options);
        this.model = true;
      });
    },
    yesPrompt() {
      if (!this.dataInput) return;
      this.promise.resolve(this.dataInput);
      this.close();
    },
    yes() {
      this.promise.resolve(true);
      this.close();
    },
    no() {
      this.promise.resolve(false);
      this.close();
    },
    close() {
      this.dataInput = "";
      this.data = Object.assign({}, {});
      this.options = Object.assign({}, {});
      this.model = false;
    }
  }
};
</script>
