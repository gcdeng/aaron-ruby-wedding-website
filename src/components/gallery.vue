<template>
  <div class="block block-gallery" ref="blockGallery">
    <stack
      :column-min-width="columnMinWidth"
      :gutter-width="10"
      :gutter-height="5"
      monitor-images-loaded
      v-viewer="viewerOptions"
    >
      <stack-item
        v-for="(src, i) in images"
        :key="i"
        style="transition: transform 300ms"
      >
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
    let columnMinWidth = innerWidth > 768 ? 150 : 100;
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
      images
    };
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
        end: "+=30%",
        toggleActions: "play none none none"
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.block-gallery {
  overflow-x: scroll;
  padding: 5vh 1rem;
  &::-webkit-scrollbar {
    display: none;
  }
  .vsg-container {
    min-width: 768px;
    .vsg-stack-item img {
      width: 100%;
      cursor: pointer;
      margin-right: 1rem;
    }
  }
  @media (min-width: 768px) {
    .vsg-container {
      min-width: 992px;
    }
  }
}
</style>
