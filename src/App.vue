<template>
  <div id="app">
    <greeting />
    <div class="block block-invite" ref="blockInvite">
      <div class="date">
        <div>Saturday</div>
        <div>December 19</div>
        <div>2020</div>
      </div>
      <div class="text">
        給每一個曾參與我們成長過程的你們：<br />
        <br />
        歷經了8年的愛情長跑，我們決定對一路從學生時期陪伴的彼此，許下共度餘生的承諾💍<br />
        <br />
        在這個疫情攪局的2020年，世界發生了很多改變，計畫也不停地被打亂。<br />
        但這是2019年就預定下的日期，因此我們還是懷抱著小小的夢想，希望婚禮能夠順利照常舉行。
        也衷心地期盼年底的婚禮可以象徵否極泰來的開始！<br />
        <br />
        在這個對我們來說非常重要的日子，<br />
        邀請所有愛的你們，讓這個充滿意義的日子更為圓滿。<br />
        <br />
        <a
          class="rsvp"
          href="https://www.surveycake.com/s/vrPmp"
          target="_blank"
          rel="noopener noreferrer"
        >
          RSVP
        </a>
      </div>
    </div>
    <div class="block block-profile" ref="blockProfile">
      <div class="aaron" ref="blockProfileAaron">
        <div class="name" ref="blockProfileAaronName">@Aaron</div>
        <div class="row" ref="blockProfileAaronRow">
          <div class="column">
            <div class="img img-1" />
          </div>
          <div class="column">
            <div class="img img-2" />
            <div class="img img-3" />
          </div>
        </div>
      </div>
      <div class="ruby" ref="blockProfileRuby">
        <div
          class="name"
          :style="{ textAlign: 'right' }"
          ref="blockProfileRubyName"
        >
          @Ruby
        </div>
        <div class="row" ref="blockProfileRubyRow">
          <div class="column">
            <div class="img img-4" />
            <div class="img img-5" />
          </div>
          <div class="column">
            <div class="img img-6" />
          </div>
        </div>
      </div>
      <div class="img img-transition" ref="blockProfileTransitionImg">
        <div class="mask" ref="blockProfileTransitionImgMask"></div>
      </div>
    </div>
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
import { Stack, StackItem } from "vue-stack-grid";
const gallery = require.context("@/assets/img/gallery");
const images = gallery.keys().map(key => gallery(key));
// const images = [];

export default {
  name: "App",
  components: { Greeting, Stack, StackItem },
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
    let { blockInvite } = this.$refs;
    this.$gsap.from(blockInvite, {
      opacity: 0,
      y: 10,
      scrollTrigger: {
        trigger: blockInvite,
        start: "top 100%",
        end: "bottom 100%",
        // markers: true,
        scrub: 1
      }
    });

    let {
      blockProfile,
      blockProfileAaron,
      blockProfileAaronName,
      blockProfileAaronRow,
      blockProfileRuby,
      blockProfileRubyName,
      blockProfileRubyRow,
      blockProfileTransitionImg,
      blockProfileTransitionImgMask
    } = this.$refs;
    this.$gsap.to(blockProfile, {
      backgroundColor: "#fff",
      scrollTrigger: {
        start: "top 10%",
        // markers: true,
        trigger: blockProfile,
        scrub: 1
      }
    });
    this.$gsap
      .timeline({
        defaults: {
          opacity: 0,
          x: (innerWidth / 10) * 1
        },
        scrollTrigger: {
          // markers: true,
          start: "top bottom",
          end: "+=40%",
          trigger: blockProfileAaron,
          scrub: 1
        }
      })
      .from(blockProfileAaronName, {})
      .from(blockProfileAaronRow, {});

    this.$gsap
      .timeline({
        defaults: {
          opacity: 0,
          x: (innerWidth / 10) * -1
        },
        scrollTrigger: {
          // markers: true,
          start: "top bottom",
          end: "+=40%",
          trigger: blockProfileRuby,
          scrub: 1
        }
      })
      .from(blockProfileRubyName, {})
      .from(blockProfileRubyRow, {});

    this.$gsap.to(blockProfileTransitionImg, {
      scale: 1.3,
      scrollTrigger: {
        // markers: true,
        start: "top bottom",
        end: "bottom top",
        trigger: blockProfileTransitionImg,
        scrub: 1
      }
    });
    this.$gsap.to(blockProfileTransitionImgMask, {
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      scrollTrigger: {
        // markers: true,
        start: "top top",
        end: "bottom top",
        trigger: blockProfileTransitionImg,
        scrub: 1,
        pin: true
      }
    });

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
        markers: true,
        start: "top bottom",
        end: "+=10%",
        toggleActions: "play none none none"
      }
    });
  }
};
</script>

<style lang="scss">
.block-invite {
  position: absolute;
  top: 110vh;
  width: 100%;
  color: #fff;
  box-sizing: border-box;
  padding: 0 10vw;
  .date {
    font-size: 8vmin;
    margin-bottom: 10vh;
    font-weight: 600;
  }
  .text {
    font-size: 1rem;
    max-width: 30rem;
    margin-left: auto;
  }
  .rsvp {
    font-weight: 500;
  }
}
.block-profile {
  padding: 0 10vw 20vh 10vw;
  background-color: rgb(184, 202, 217);
  overflow: hidden;
  & > div {
    height: 100vmin;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10vmin;
  }
  .name {
    font-size: 15vmin;
  }
  .ruby .name {
    color: rgba(245, 226, 228);
  }
  .row {
    display: flex;
    .column {
      flex: 50%;
    }
  }
  .img {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .img-1 {
    margin-right: 10px;
    height: 100%;
    background-image: url(assets/img/20190830_R7006018.jpeg);
  }
  .img-2 {
    margin-bottom: 10px;
    height: 40vmin;
    background-image: url(assets/img/20190830_R7005919.jpeg);
  }
  .img-3 {
    height: 40vmin;
    background-image: url(assets/img/20190830_R7006012.jpeg);
    background-position: top;
  }
  .img-4 {
    margin-bottom: 10px;
    margin-right: 10px;
    height: 40vmin;
    background-image: url(assets/img/20190830_R7005727.jpeg);
  }
  .img-5 {
    margin-right: 10px;
    height: 40vmin;
    background-image: url(assets/img/20190830_R7005728.jpeg);
  }
  .img-6 {
    height: 100%;
    background-image: url(assets/img/20190830_R7005743.jpeg);
    background-position: bottom;
  }
  .img-transition {
    margin-top: 50vmin;
    height: 100vh;
    background-image: url(assets/img/20190830_R7005505.jpeg);
    width: 100vw;
    position: relative;
    left: -10vw;
    background-position: center;
    .mask {
      width: 100%;
      height: 100%;
      background-color: rgba($color: #fff, $alpha: 0);
    }
  }
}
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
