# Guild

**This plugin is use for Nuxt 2. For Nuxt 3, please use https://github.com/kieuminhcanh/vuetify-notifier**

## Install

```
npm i vuetify-notify
or
yarn add vuetify-notify
```

## Setup

```
main.js

import VuetifyNotify from 'vuetify-notify';

Vue.use(notify, {
  vuetify,
  options: {
    toast: {
      x: "right",
      y: "top",
      color: "green"
    },
    dialog: {
      width: 400
    }
  }
});
```

## Nuxt Setup

**plugins/toast.js**
```
import Vue from 'vue'
import VuetifyNotify from 'vuetify-notify'

export default ({ app }, inject) => {
  window.onNuxtReady(() => {
    Vue.use(VuetifyNotify, {
      vuetify: app.vuetify,
      container: '__nuxt',
      options: {
        toast: {
          x: 'right',
          y: 'bottom',
          color: 'green'
        },
        dialog: {
          width: 400
        }
      }
    })
  })
}

```

## Use

```
this.$notify.toast(text, options).then(result => log(result))

this.$notify.show(data, options).then(result => log(result))
this.$notify.confirm(data, options).then(result => log(result))
this.$notify.promt(data, options).then(result => log(result))
```

### Options default

#### Toast options

- x: left | center | right : string (default: 'right')
- y: top | bottom : string (default: 'top')
- color: string (default: 'primary')
- timeout: integer (default: 5000)

#### Dialog options

- width: integer (default: 500)
