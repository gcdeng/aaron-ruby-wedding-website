<template>
  <div id="app">
    <div ref="blockLanding" class="block-landing">
      <div class="greet-text"></div>
      <div class="shadow mask"></div>
      <div ref="blockLandingMask" class="mask"></div>
    </div>
    <div class="block block-invite" ref="blockInvite">
      <div>
        <div class="date" ref="blockInviteDate">
          <div>Saturday</div>
          <div>December 19</div>
          <div>2020</div>
        </div>
        <div class="text" ref="blockInviteText">
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
        </div>
      </div>
    </div>
    <div class="block block-profile">
      <div class="aaron">
        <div class="name">@Aaron</div>
        <div class="row">
          <div class="column">
            <div class="img img-1" />
          </div>
          <div class="column">
            <div class="img img-2" />
            <div class="img img-3" />
          </div>
        </div>
      </div>
      <div class="ruby">
        <div class="name" :style="{ textAlign: 'right' }">@Ruby</div>
        <div class="row">
          <div class="column">
            <div class="img img-4" />
            <div class="img img-5" />
          </div>
          <div class="column">
            <div class="img img-6" />
          </div>
        </div>
      </div>
      <div class="img img-7"></div>
    </div>
    <div class="block block-event">
      <!-- <div class="title">Wedding Events</div> -->

      <div class="location">
        <div class="caption">THE VENUE</div>
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

      <div class="row">
        <div class="col img event-1">
          <div class="text event-time">11:00<span class="small">AM</span></div>
          <div class="text event-name">#weddingceremony</div>
        </div>
        <div class="col img event-2">
          <div class="text event-time">12:30<span class="small">PM</span></div>
          <div class="text event-name">#lunch</div>
        </div>
      </div>

      <div :style="{ textAlign: 'center' }">
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
      </div>
    </div>
    <div class="block block-gallery">
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
import Vara from "vara";
import { Stack, StackItem } from "vue-stack-grid";
// const gallery = require.context("@/assets/img/gallery");
// const images = gallery.keys().map(key => gallery(key));
const images = [];

export default {
  name: "App",
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
    const varaFontJsonPath =
      "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json";
    setTimeout(() => {
      new Vara(".greet-text", varaFontJsonPath, [
        {
          text: "Invite you to our wedding party",
          fontSize: 50
        },
        {
          text: "Aaron & Ruby",
          fontSize: 30,
          textAlign: "right"
        }
      ]);
    }, 1000);

    let {
      blockLanding,
      blockLandingMask,
      // blockInvite,
      blockInviteDate,
      blockInviteText
    } = this.$refs;
    this.$gsap.to(blockLandingMask, {
      backgroundColor: "rgb(184, 202, 217)",
      scrollTrigger: {
        pin: true,
        trigger: blockLanding,
        scrub: true,
        // markers: true,
        id: "scrub"
      }
    });
    this.$gsap.from(blockInviteDate, {
      opacity: 0,
      y: 150,
      scrollTrigger: {
        trigger: blockInviteDate,
        start: "top 100%",
        end: "+=25%",
        scrub: 1
      }
    });
    this.$gsap.from(blockInviteText, {
      opacity: 0,
      y: 150,
      scrollTrigger: {
        trigger: blockInviteText,
        start: "top 100%",
        end: "+=25%",
        scrub: 1
      }
    });
  }
};
</script>

<style lang="scss">
$backgroundColor1: rgb(184, 202, 217);
// rgb(155, 181, 198);
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.block {
  padding: 20vh 0;
}

.block-landing {
  position: relative;
  background-image: url(assets/img/20190830_R7005511.jpeg);
  height: 100vh;
  background-size: cover;
  background-position: bottom right;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  .mask {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    // box-shadow: 0 0 80px 50px #ffffff inset;
    background-color: rgba($color: #fff, $alpha: 0);
  }
  .shadow {
    box-shadow: 0px -30px 300px 10px #ffffff inset;
  }
  .greet-text {
    padding: 0 8%;
    width: 30%;
    svg {
      overflow: visible;
    }
  }
}
.block-invite {
  // background-color: $backgroundColor1;
  // padding: 20vh 0 0 0;
  position: relative;
  top: -100vh;
  margin-bottom: -100vh;
  color: white;
  max-height: 100vh;
  overflow: visible;
  box-sizing: border-box;
  & > div {
    width: 80vw;
    margin: auto;
  }
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
  padding: 0;
  background-color: $backgroundColor1;
  & > div {
    width: 80vw;
    margin: auto;
    // position: relative;
    // margin-bottom: 40vh;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10vh 0;
  }
  .name {
    // position: relative;
    // font-size: 2rem;
    // margin-bottom: 20px;
    font-size: 20vmin;
    // position: absolute;
    // top: -15vmin;
    // z-index: 1;
    // left: -5vw;
  }
  .ruby {
    .name {
      // left: 5vw;
    }
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    // margin-bottom: 100px;
    .column {
      flex: 50%;
      max-width: 50%;
    }
  }
  .img {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
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
  .img-7 {
    width: 100%;
    height: 150vh;
    background-image: url(assets/img/20190830_R7005505.jpeg);
  }
}
.block-event {
  padding: 20vh 10vw;
  background-color: rgba(245, 226, 228, 0.5);
  // background-color: #f6efef;
  display: flex;
  align-items: center;
  flex-direction: column;
  & > div:not(:last-child) {
    margin-bottom: 10vh;
  }

  .mb-1vh {
    margin-bottom: 1vh;
  }
  .title {
    text-align: center;
    font-size: 10vmin;
    font-weight: 500;
  }
  .row {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .col {
      box-shadow: 0px 5px 35px rgba(53, 53, 53, 0.06);
      padding: 10%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-bottom: 10vh;
      width: 10vw;
      min-width: 14rem;
      height: 30vh;
      min-height: 15rem;
      & > .text {
        font-weight: 600;
        margin-bottom: 5px;
      }
    }

    .img {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      &.event-1 {
        background-image: url(assets/img/shardayyy-photography-fJzmPe-a0eU-unsplash.jpg);
      }
      &.event-2 {
        background-image: url(assets/img/annie-spratt-TQSB-suJu1k-unsplash.jpg);
      }
    }

    .event-name {
      padding: 0 10px;
      border-radius: 5px;
      font-size: 4vmin;
      text-decoration: underline;
      color: #000;
      background-color: #fff;
    }
    .text.event-time {
      font-size: 8vmin;
      color: #fff;
      .small {
        font-size: 5vmin;
      }
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
