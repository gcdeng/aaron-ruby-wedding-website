<template>
  <div id="app">
    <greeting />
    <invitation />
    <profile />
    <div class="block block-event">
      <!-- <div class="title">Wedding Events</div> -->

      <div class="location" ref="blockEventLocation">
        <!-- <div class="caption">THE VENUE</div> -->
        <div class="venue">
          <a
            href="http://yangmingshan.landishotelsresorts.com/chinese-trad/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font-awesome-icon icon="map-marker-alt" />陽明山中國麗緻飯店
          </a>
        </div>
        <div class="address">
          <a
            href="https://goo.gl/maps/eRAWmqctc4x85jWXA"
            target="_blank"
            rel="noopener noreferrer"
          >
            台北市士林區格致路237號
          </a>
        </div>
      </div>
      <div class="event" ref="blockEvent1">
        <div class="text event-time">11:00<span class="small">AM</span></div>
        <div class="text event-name">#weddingceremony</div>
      </div>
      <div class="event" ref="blockEvent2">
        <div class="text event-time">12:30<span class="small">PM</span></div>
        <div class="text event-name">#lunch</div>
      </div>

      <!-- <div class="row">
        <div class="col img event-1">
          <div class="text event-time">11:00<span class="small">AM</span></div>
          <div class="text event-name">#weddingceremony</div>
        </div>
        <div class="col img event-2">
          <div class="text event-time">12:30<span class="small">PM</span></div>
          <div class="text event-name">#lunch</div>
        </div>
      </div> -->

      <!-- <div :style="{ textAlign: 'center' }">
        <div style="font-size: 6vmin" class="mb-1vh">2020/12/19</div>
        <a
          class="rsvp"
          href="https://www.surveycake.com/s/vrPmp"
          target="_blank"
          rel="noopener noreferrer"
          style="font-size: 4vmin"
        >
          RSVP
        </a>
      </div> -->
    </div>
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
    <div class="block block-copyright">
      <div>Copyright &#169; 2020 All rights reserved.</div>
      <div>Eric made with &#129293;</div>
    </div>
  </div>
</template>

<script>
import Greeting from "@/components/greeting";
import Invitation from "@/components/invitation";
import Profile from "@/components/profile";
import { Stack, StackItem } from "vue-stack-grid";
const gallery = require.context("@/assets/img/gallery");
const images = gallery.keys().map(key => gallery(key));
// const images = [];

export default {
  name: "App",
  components: { Greeting, Invitation, Profile, Stack, StackItem },
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
    let { blockEventLocation, blockEvent1, blockEvent2 } = this.$refs;
    this.$gsap.from(blockEventLocation, {
      opacity: 0,
      scrollTrigger: {
        // markers: true,
        start: "top 95%",
        end: "+=30%",
        trigger: blockEventLocation,
        scrub: 1
      }
    });
    this.$gsap.from(blockEvent1, {
      opacity: 0,
      scrollTrigger: {
        // markers: true,
        start: "top 95%",
        end: "+=30%",
        trigger: blockEvent1,
        scrub: 1
      }
    });
    this.$gsap.from(blockEvent2, {
      opacity: 0,
      scrollTrigger: {
        // markers: true,
        start: "top 95%",
        end: "+=30%",
        trigger: blockEvent2,
        scrub: 1
      }
    });

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

<style lang="scss">
.block-event {
  padding: 0;
  position: relative;
  margin-top: -100vh;
  height: 100vh;
  // background-color: rgba(245, 226, 228, 0.5);
  // background-color: #f6efef;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  & > div:not(:last-child) {
    margin-bottom: 10vh;
  }

  // .mb-1vh {
  //   margin-bottom: 1vh;
  // }
  // .title {
  //   text-align: center;
  //   font-size: 10vmin;
  //   font-weight: 500;
  // }
  .text {
    font-weight: 600;
    // margin-bottom: 5px;
  }
  // .row {
  //   width: 100%;
  //   display: flex;
  //   flex-wrap: wrap;
  //   justify-content: space-evenly;
  //   .col {
  //     box-shadow: 0px 5px 35px rgba(53, 53, 53, 0.06);
  //     padding: 10%;
  //     display: inline-flex;
  //     align-items: center;
  //     justify-content: center;
  //     flex-direction: column;
  //     margin-bottom: 10vh;
  //     width: 10vw;
  //     min-width: 14rem;
  //     height: 30vh;
  //     min-height: 15rem;
  //     & > .text {
  //       font-weight: 600;
  //       margin-bottom: 5px;
  //     }
  //   }

  //   .img {
  //     background-size: cover;
  //     background-repeat: no-repeat;
  //     background-position: center;
  //     &.event-1 {
  //       background-image: url(assets/img/shardayyy-photography-fJzmPe-a0eU-unsplash.jpg);
  //     }
  //     &.event-2 {
  //       background-image: url(assets/img/annie-spratt-TQSB-suJu1k-unsplash.jpg);
  //     }
  //   }
  // }
  .event {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .event-name {
    padding: 0 10px;
    border-radius: 5px;
    font-size: 4vmin;
    text-decoration: underline;
    color: #000;
    background-color: #fff;
  }
  .event-time {
    font-size: 8vmin;
    color: #fff;
    .small {
      font-size: 5vmin;
    }
  }
  .location {
    text-align: center;
    .caption {
      font-size: 3vmin;
      font-weight: 600;
    }
    .venue {
      font-size: 6vmin;
      svg {
        margin-right: 1vmin;
      }
    }
    .address {
      font-size: 2vmin;
    }
  }
}
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

.block-copyright {
  font-size: 1rem;
  padding: 1rem 3rem;
  text-align: center;
  color: #dadada;
}
</style>
