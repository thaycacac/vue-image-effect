---
meta:
  - name: introduction
    content: Introduction
  - name: keywords
    content: ...
---

# Getting Started

After creating a project with vue-cli or custom-made (usually Webpack)

## Installation

```bash
npm install vue-image-effect
# OR
yarn add vue-image-effect
```

## Usage

With Vue Cli you need add **Vue Image Effect** to `src/main.js`:

```js
import Vue from 'vue'
import VueImageEffect from 'vue-image-effect'

Vue.component('vue-image', VueImageEffect)
```

With Nuxt.js you can use:

```vue
<template>
  <vue-image
    src="https://i.imgur.com/MGkYTMc.png"
    alt="dandelion"
    shine />
</template>
<script>
import VueImage from 'vue-image-effect'
export default {
  components: {
    VueImage
  }
}
</script>
```

Result:

<!-- markdownlint-disable MD033 -->
<vue-image src="https://i.imgur.com/MGkYTMc.png" alt="dandelion" shine />
