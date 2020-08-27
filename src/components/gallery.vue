<template>
  <div class="block block-gallery" ref="blockGallery">
    <stack
      :column-min-width="150"
      :gutter-width="10"
      :gutter-height="5"
      monitor-images-loaded
      v-viewer="viewerOptions"
    >
      <stack-item v-for="(src, i) in images" :key="i">
        <img :src="src" class="img" />
      </stack-item>
    </stack>
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
      images
    };
  },
  mounted() {
    let { blockGallery } = this.$refs;
    this.$gsap.from(blockGallery, {
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: blockGallery,
        // markers: true,
        start: "top bottom",
        end: "+=10%",
        toggleActions: "play none none none"
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.block-gallery {
  overflow-x: scroll;
  padding: 20vh 1rem 10vh 1rem;
  &::-webkit-scrollbar {
    display: none;
  }
  .vsg-container {
    min-width: 992px;
    .vsg-stack-item img {
      width: 100%;
      cursor: pointer;
      margin-right: 1rem;
    }
  }
}
</style>
