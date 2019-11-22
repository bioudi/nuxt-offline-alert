# nuxt-offline-alert

[![npm](https://img.shields.io/npm/v/nuxt-offline-alert.svg?style=for-the-badge)](https://www.npmjs.com/package/nuxt-offline-alert)
[![npm](https://img.shields.io/npm/dt/nuxt-offline-alert.svg?style=for-the-badge)](https://www.npmjs.com/package/nuxt-offline-alert)

## Install

`npm install nuxt-offline-alert`

## Usage

The most common use case is to register the component globally in nuxt is creating a plugin for it.

```js
// in your nuxt-offline-alert.js or similar file
import OfflineAlert from "nuxt-offline-alert";
import Vue from "vue";

Vue.use(OfflineAlert);
```

on nuxt.config.js

```js
{
    ...
    plugins: [
        { src: 'plugins/nuxt-offline-alert.js', ssr: false }
    ]
    ...
}
```

Alternatively you can do this to register the components:

```js
// HelloWorld.vue
import OfflineAlert from "nuxt-offline-alert";

export default {
  name: 'HelloWorld',
  components: {
    OfflineAlert
  }
}
```

On your page you can now use html like this:

```html
// see props if you want to change online and offline messages
<client-only>
    <offline-alert/>
</client-only>
```

## CSS

You don't like the default styling of the component ...? Feel free to customize your component for example:


```css
.offline-alert{
    background: grey // changing the background
}
.offline-alert-indicator--offline {
    background-color: orange; // changing offline indicator color
}
.offline-alert-indicator--online {
    background-color: blue; // changing online indicator color
}
```

## Props

|Prop|Type|Required|Default|Description
|-|-|-|-|-|
|onlineMessage|String|false|Back online!|Message to show when online
|offlineMessage|String|false|You're offline!|Message to show when offline
