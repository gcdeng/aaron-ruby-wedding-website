<template>
  <div class="block block-gallery" ref="blockGallery">
    <div class="loader-container" v-if="!allImagesLoaded">
      <div class="loader">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
    <lazy-component>
      <stack
        :column-min-width="columnMinWidth"
        :gutter-width="20"
        :gutter-height="10"
        monitor-images-loaded
        v-viewer.static="viewerOptions"
        @images-loaded="handleImageLoaded"
      >
        <stack-item v-for="(src, i) in images" :key="i">
          <img :src="src" class="img" :class="{ hide: !allImagesLoaded }" />
        </stack-item>
      </stack>
    </lazy-component>
  </div>
</template>

<script>
import { Stack, StackItem } from "vue-stack-grid";
const gallery = require.context("@/assets/img/gallery");
const images = gallery.keys().map(key => gallery(key));
// const images = [];

export default {
  name: "Gallery",
  components: { Stack, StackItem },
  data() {
    let columnMinWidth = innerWidth > 768 ? 200 : 80;
    return {
      viewerOptions: {
        button: false,
        movable: false,
        title: false,
        rotatable: false,
        scalable: false,
        zoomable: false,
        zoomOnTouch: false,
        zoomOnWheel: false,
        tooltip: false,
        toggleOnDblclick: false,
        transition: false,
        toolbar: {
          prev: 2,
          play: 2,
          next: 2
        }
      },
      columnMinWidth,
      images,
      loadedImageNum: 0,
      allImagesLoaded: false
    };
  },
  methods: {
    handleImageLoaded() {
      this.loadedImageNum++;
      if (this.loadedImageNum === this.images.length) {
        this.allImagesLoaded = true;
      }
    }
  },
  mounted() {
    let { blockGallery } = this.$refs;
    this.$gsap.from(blockGallery, {
      opacity: 0,
      duration: 3,
      scrollTrigger: {
        trigger: blockGallery,
        // markers: true,
        start: "top bottom",
        end: "+=30%"
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.block-gallery {
  padding: 10vh 40px 0;
  position: relative;
  .vsg-container .vsg-stack-item img {
    width: 100%;
    cursor: pointer;
    opacity: 1;
    transition: opacity 2s ease;
    &.hide {
      opacity: 0;
    }
  }
  .loader-container {
    z-index: 1;
    padding-top: 5vh;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    background-color: #fff;
    box-sizing: border-box;
    $color: #5dadec;
    .loader {
      display: block;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      position: relative;
      box-sizing: border-box;
      background-color: transparent;
      .line {
        width: 30%;
        height: 30%;
        border-radius: 5px;
        background-color: $color;
        position: absolute;
        bottom: 50%;
        top: 50%;
        transform: translateY(-50%);
      }
      .line:first-child {
        animation: height1 0.9s ease-in infinite;
        left: 0;
      }
      .line:nth-child(2) {
        animation: height2 0.9s ease-in infinite;
        left: 35%;
      }
      .line:last-child {
        animation: height3 0.9s ease-out infinite;
        right: 0;
      }

      @keyframes height1 {
        0% {
          height: 30%;
        }
        50% {
          height: 50%;
        }
        100% {
          height: 30%;
        }
      }
      @keyframes height2 {
        0% {
          height: 50%;
        }
        50% {
          height: 30%;
        }
        100% {
          height: 50%;
        }
      }
      @keyframes height3 {
        0% {
          height: 20%;
        }
        50% {
          height: 70%;
        }
        100% {
          height: 20%;
        }
      }
    }
  }
}
</style>
