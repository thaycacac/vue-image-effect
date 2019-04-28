<template>
  <div class="container text-center">
    <h1>Vue Image Effect</h1>
    <div class="row">
      <div class="col" v-for="(item, index) in 3" :key="index">
        <vue-image
          :src="require(`./assets/example${index}.png`)"
          description="No Effect"
        />
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(item, index) in 3" :key="index">
        <vue-image
          :src="require(`./assets/example${index}.png`)"
          description="Zoom In"
          zoomIn
        />
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(item, index) in 3" :key="index">
        <vue-image
          :src="require(`./assets/example${index}.png`)"
          description="Zoom Out"
          zoomOut
        />
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(item, index) in 3" :key="index">
        <vue-image
          :src="require(`./assets/example${index}.png`)"
          description="Rotate"
          rotate
        />
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(item, index) in 3" :key="index">
        <vue-image
          :src="require(`./assets/example${index}.png`)"
          description="Rotate Reverse"
          rotateReverse
        />
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(item, index) in 3" :key="index">
        <vue-image
          :src="require(`./assets/example${index}.png`)"
          description="Blur"
          blur
        />
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(item, index) in 3" :key="index">
        <vue-image
          :src="require(`./assets/example${index}.png`)"
          description="Blur Reverse"
          blurReverse
        />
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(item, index) in 3" :key="index">
        <vue-image
          :src="require(`./assets/example${index}.png`)"
          description="Gray Scale"
          grayScale
        />
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(item, index) in 3" :key="index">
        <vue-image
          :src="require(`./assets/example${index}.png`)"
          description="Sepia"
          sepia
        />
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(item, index) in 3" :key="index">
        <vue-image
          :src="require(`./assets/example${index}.png`)"
          description="Blue Gray"
          blurGray
        />
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(item, index) in 3" :key="index">
        <vue-image
          :src="require(`./assets/example${index}.png`)"
          description="Blue Gray Reverse"
          blurGrayReverse
        />
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(item, index) in 3" :key="index">
        <vue-image
          :src="require(`./assets/example${index}.png`)"
          description="Opacity"
          opacity
        />
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(item, index) in 3" :key="index">
        <vue-image
          :src="require(`./assets/example${index}.png`)"
          description="Filter Blue"
          filterBlue
        />
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(item, index) in 3" :key="index">
        <vue-image
          :src="require(`./assets/example${index}.png`)"
          description="Shine"
          shine
        />
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(item, index) in 3" :key="index">
        <vue-image
          :src="require(`./assets/example${index}.png`)"
          description="Circle"
          circle
        />
      </div>
    </div>
  </div>
</template>

<script>
import vueImage from "./components/image";

export default {
  components: { vueImage }
};
</script>

<style>
</style>
