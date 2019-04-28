# Image Effect Component

[![Build Status](https://travis-ci.org/craigh411/vue-star-rating.svg?branch=master)](https://github.com/thaycacac/vue-image-effect)
[![npm](https://img.shields.io/npm/dt/vue-star-rating.svg)](https://github.com/thaycacac/vue-image-effect)

A simple, highly customisable image effect component for Vue.

## Screenshot

![star-rating.png](https://i.imgur.com/34qoigg.png)

## Features

- Customisable image.
- Customisable size image.
- Create and customisablee description image.
- Good SEO for image

## Usage

### Via NPM

Install via npm:

`npm install vue-image-effect`

Then require in your project:

`var VueImage = require('vue-image-effect');`

or ES6 syntax:
`import VueImage from 'vue-image-effect'`

Then you can register the component globally:

`Vue.component('vue-image-effect', VueImage);`

Or in your `Vue component`:

```javascript
components: {
  VueImage
}
```

You can then use the following markup in your project:

`<vue-image src='...' alt='...' ...></vue-image>`

### Via CDN

You may also include `vue-image-effect` directly in to your webpage via Unpkg. Simply add the following script tag:

`<script src="https://unpkg.com/vue-image-effect/dist/image-effect.min.js"></script>`

You will need to register the component by doing:

```javascript
Vue.component('vue-image', VueImageEffect.default);
```

You may also register the component locally via the [components option](https://vuejs.org/v2/guide/components.html#Local-Registration).

## Development & Testing

Please check the [Contributing Guidelines](https://github.com/youngtailors/league-paradox/blob/master/CONTRIBUTING.md).

## Contribution

Issues and PRs are welcome !