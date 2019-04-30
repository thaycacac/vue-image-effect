<template>
  <div class="container text-center">
    <h1 class="my-5">Vue Image Effect</h1>
    <div class="row">
      <div class="col" v-for="(item, index) in listImage" :key="index">
        <vue-image :src="item.src" description="No Effect" :alt="item.alt"/>
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(item, index) in listImage" :key="index">
        <vue-image :src="item.src" description="Zoom In" :alt="item.alt" zoomIn/>
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(item, index) in listImage" :key="index">
        <vue-image :src="item.src" description="Zoom Out" :alt="item.alt" zoomOut/>
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(item, index) in listImage" :key="index">
        <vue-image :src="item.src" description="Rotate" :alt="item.alt" rotate/>
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(item, index) in listImage" :key="index">
        <vue-image :src="item.src" description="Rotate Reverse" :alt="item.alt" rotateReverse/>
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(item, index) in listImage" :key="index">
        <vue-image :src="item.src" description="Blur" :alt="item.alt" blur/>
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(item, index) in listImage" :key="index">
        <vue-image :src="item.src" description="Blur Reverse" :alt="item.alt" blurReverse/>
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(item, index) in listImage" :key="index">
        <vue-image :src="item.src" description="Gray Scale" :alt="item.alt" grayScale/>
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(item, index) in listImage" :key="index">
        <vue-image
          :src="item.src"
          description="Gray Scale Reverse"
          :alt="item.alt"
          grayScaleReverse
        />
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(item, index) in listImage" :key="index">
        <vue-image :src="item.src" description="Sepia" :alt="item.alt" sepia/>
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(item, index) in listImage" :key="index">
        <vue-image :src="item.src" description="Sepia Reverse" :alt="item.alt" sepiaReverse/>
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(item, index) in listImage" :key="index">
        <vue-image :src="item.src" description="Blue Gray" :alt="item.alt" blurGray/>
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(item, index) in listImage" :key="index">
        <vue-image :src="item.src" description="Blue Gray Reverse" :alt="item.alt" blurGrayReverse/>
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(item, index) in listImage" :key="index">
        <vue-image :src="item.src" description="Opacity" :alt="item.alt" opacity/>
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(item, index) in listImage" :key="index">
        <vue-image :src="item.src" description="Opacity Reverse" :alt="item.alt" opacityReverse/>
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(item, index) in listImage" :key="index">
        <vue-image :src="item.src" description="Filter Blue" :alt="item.alt" filterBlue/>
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(item, index) in listImage" :key="index">
        <vue-image
          :src="item.src"
          description="Filter Blue Reverse"
          :alt="item.alt"
          filterBlueReverse
        />
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(item, index) in listImage" :key="index">
        <vue-image :src="item.src" description="Shine" :alt="item.alt" shine/>
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(item, index) in listImage" :key="index">
        <vue-image :src="item.src" description="Circle" :alt="item.alt" circle/>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import VueImage from '../src/ImageEffect.vue'
export default {
  data() {
    return {
      listImage: [
        { src: 'https://i.imgur.com/P9fI56a.png', alt: 'dandelion' },
        { src: 'https://i.imgur.com/04tPhRW.png', alt: 'rose' },
        { src: 'https://i.imgur.com/Y5AZA0p.png', alt: 'dandelion' },
      ],
    }
  },
  components: {
    VueImage,
  },
}
</script>