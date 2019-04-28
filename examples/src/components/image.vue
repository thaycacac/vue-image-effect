<template>
  <figure
    :class="[
      zoomIn ? 'zoom-in' : '',
      zoomOut ? 'zoom-out' : '',
      rotate ? 'rotate' : '',
      rotateReverse ? 'rotate-reverse' : '',
      blur ? 'blur' : '',
      blurReverse ? 'blur-reverse' : '',
      grayScale ? 'gray-scale' : '',
      sepia ? 'sepia' : '',
      blurGray ? 'blur-gray' : '',
      blurGrayReverse ? 'blur-gray-reverse' : '',
      opacity ? 'opacity' : '',
      filterBlue ? 'filter-blue' : '',
      flash ? 'flash' : '',
      shine ? 'shine' : '',
      circle ? 'circle' : ''
    ]"
  >
    <div class="wrap-image" :class="classImage">
      <img :src="src" :style="`width: ${width}; height: ${height}`" />
    </div>
    <figcaption :class="classDescription">{{ description }}</figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String
    },
    description: {
      type: String
    },
    width: {
      type: String,
      default: "auto"
    },
    height: {
      type: String,
      default: "auto"
    },
    classDescription: {
      type: String
    },
    classImage: {
      type: String
    },
    zoomIn: {
      type: Boolean,
      default: false
    },
    zoomOut: {
      type: Boolean,
      default: false
    },
    rotate: {
      type: Boolean,
      default: false
    },
    rotateReverse: {
      type: Boolean,
      default: false
    },
    blur: {
      type: Boolean,
      default: false
    },
    blurReverse: {
      type: Boolean,
      default: false
    },
    grayScale: {
      type: Boolean,
      default: false
    },
    sepia: {
      type: Boolean,
      default: false
    },
    blurGray: {
      type: Boolean,
      default: false
    },
    blurGrayReverse: {
      type: Boolean,
      default: false
    },
    opacity: {
      type: Boolean,
      default: false
    },
    filterBlue: {
      type: Boolean,
      default: false
    },
    flash: {
      type: Boolean,
      default: false
    },
    shine: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.wrap-image {
  width: auto;
  height: auto;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: inline-flex;
}

/* Zoom In */
.zoom-in .wrap-image img {
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.zoom-in .wrap-image:hover img {
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
}

/* Zoom Out */
.zoom-out .wrap-image img {
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.zoom-out .wrap-image:hover img {
  -webkit-transform: scale(1);
  transform: scale(1);
}

/* Rotate */
.rotate .wrap-image img {
  -webkit-transform: rotate(15deg) scale(1.4);
  transform: rotate(15deg) scale(1.4);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.rotate .wrap-image:hover img {
  -webkit-transform: rotate(0) scale(1);
  transform: rotate(0) scale(1);
}

/* Rotate Reverse */
.rotate-reverse .wrap-image img {
  -webkit-transform: rotate(0) scale(1);
  transform: rotate(0) scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.rotate-reverse .wrap-image:hover img {
  -webkit-transform: rotate(15deg) scale(1.4);
  transform: rotate(15deg) scale(1.4);
}

/* Blur */
.blur .wrap-image img {
  -webkit-filter: blur(3px);
  filter: blur(3px);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.blur .wrap-image:hover img {
  -webkit-filter: blur(0);
  filter: blur(0);
}

/* Blur Reverse*/
.blur-reverse .wrap-image img {
  -webkit-filter: blur(0);
  filter: blur(0);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.blur-reverse .wrap-image:hover img {
  -webkit-filter: blur(3px);
  filter: blur(3px);
}

/* Gray Scale */
.gray-scale .wrap-image img {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.gray-scale .wrap-image:hover img {
  -webkit-filter: grayscale(0);
  filter: grayscale(0);
}

/* Sepia */
.sepia .wrap-image img {
  -webkit-filter: sepia(100%);
  filter: sepia(100%);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.sepia .wrap-image:hover img {
  -webkit-filter: sepia(0);
  filter: sepia(0);
}

/* Blur Gray */
.blur-gray .wrap-image img {
  -webkit-filter: grayscale(0) blur(0);
  filter: grayscale(0) blur(0);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.blur-gray .wrap-image:hover img {
  -webkit-filter: grayscale(100%) blur(3px);
  filter: grayscale(100%) blur(3px);
}

/* Blur Gray Reverse*/
.blur-gray-reverse .wrap-image img {
  -webkit-filter: grayscale(100%) blur(3px);
  filter: grayscale(100%) blur(3px);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.blur-gray-reverse .wrap-image:hover img {
  -webkit-filter: grayscale(0) blur(0);
  filter: grayscale(0) blur(0);
}

/* Opacity */
.opacity .wrap-image img {
  opacity: 1;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.opacity .wrap-image:hover img {
  opacity: 0.5;
}

/* Filter Blue */
.filter-blue .wrap-image {
  background: #1abc9c;
}
.filter-blue .wrap-image img {
  opacity: 1;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.filter-blue .wrap-image:hover img {
  opacity: 0.5;
}

/* Flash */
.flash .wrap-image:hover img {
  opacity: 1;
  -webkit-animation: flash 1.5s;
  animation: flash 1.5s;
}
@-webkit-keyframes flash {
  0% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
@keyframes flash {
  0% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}

/* Shine */
.shine .wrap-image {
  position: relative;
}
.shine .wrap-image::before {
  position: absolute;
  top: 0;
  left: -75%;
  z-index: 2;
  display: block;
  content: "";
  width: 50%;
  height: 100%;
  background: -webkit-linear-gradient(
    left,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 100%
  );
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 100%
  );
  -webkit-transform: skewX(-25deg);
  transform: skewX(-25deg);
}
.shine .wrap-image:hover::before {
  -webkit-animation: shine 0.75s;
  animation: shine 0.75s;
}
@-webkit-keyframes shine {
  100% {
    left: 125%;
  }
}
@keyframes shine {
  100% {
    left: 125%;
  }
}

/* Circle */
.circle .wrap-image {
  position: relative;
}
.circle .wrap-image::before {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  display: block;
  content: "";
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 100%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  opacity: 0;
}
.circle .wrap-image:hover::before {
  -webkit-animation: circle 0.75s;
  animation: circle 0.75s;
}
@-webkit-keyframes circle {
  0% {
    opacity: 1;
  }
  40% {
    opacity: 1;
  }
  100% {
    width: 200%;
    height: 200%;
    opacity: 0;
  }
}
@keyframes circle {
  0% {
    opacity: 1;
  }
  40% {
    opacity: 1;
  }
  100% {
    width: 200%;
    height: 200%;
    opacity: 0;
  }
}
</style>
