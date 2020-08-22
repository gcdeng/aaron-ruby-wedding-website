<template>
  <div id="app">
    <div class="block-landing">
      <div class="greet-text"></div>
    </div>
    <div class="block-invite">
      <div>
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
          邀請所有愛的你們，讓這個充滿意義的日子更為圓滿。
        </div>
        <div class="text rsvp">
          <a
            href="https://www.surveycake.com/s/vrPmp"
            target="_blank"
            rel="noopener noreferrer"
          >
            RSVP
          </a>
        </div>
      </div>
    </div>
    <div class="block-profile">
      <div>
        <div class="name">Aaron</div>
        <div class="row">
          <div class="column">
            <div class="img img-1" />
          </div>
          <div class="column">
            <div class="img img-2" />
            <div class="img img-3" />
          </div>
        </div>
        <div class="name" :style="{ textAlign: 'right' }">Ruby</div>
        <div class="row">
          <div class="column">
            <div class="img img-4" />
            <div class="img img-5" />
          </div>
          <div class="column">
            <div class="img img-6" />
          </div>
        </div>
        <div class="img img-7"></div>
      </div>
    </div>
    <div class="block-event">
      <div>
        <div class="title">Wedding Events</div>
        <div class="row">
          <div class="col img event-1">
            <div class="text event-time">
              11:00<span class="small">AM</span>
            </div>
            <div class="text event-name">#weddingceremony</div>
          </div>
          <div class="col img event-2">
            <div class="text event-time">
              12:30<span class="small">PM</span>
            </div>
            <div class="text event-name">#lunch</div>
          </div>
        </div>
        <div class="location">
          <div class="caption">THE VENUE</div>
          <div class="venue">
            <a
              href="http://yangmingshan.landishotelsresorts.com/chinese-trad/"
              target="_blank"
              rel="noopener noreferrer"
            >
              陽明山中國麗緻飯店
            </a>
          </div>
          <div class="address">
            <a
              href="https://goo.gl/maps/eRAWmqctc4x85jWXA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <font-awesome-icon icon="map-marker-alt" />台北市士林區格致路237號
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="block-gallery">
      <stack
        :column-min-width="150"
        :gutter-width="10"
        :gutter-height="10"
        monitor-images-loaded
        v-viewer="viewerOptions"
      >
        <stack-item v-for="(src, i) in images" :key="i">
          <img :src="src" />
        </stack-item>
      </stack>
    </div>
    <div class="block-copyright">
      Copyright &#169; 2020 All rights reserved. Eric made with &#128153;
    </div>
  </div>
</template>

<script>
import Vara from "vara";
import { Stack, StackItem } from "vue-stack-grid";
const gallery = require.context("@/assets/img/gallery");
const images = gallery.keys().map(key => gallery(key));

export default {
  name: "App",
  components: { Stack, StackItem },
  data() {
    return {
      viewerOptions: {
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
  }
};
</script>

<style lang="scss">
$backgroundColor1: #eaeef1;
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.block-landing {
  background-image: url(assets/img/20190830_R7005511.jpeg);
  height: 100vh;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    // box-shadow: 0 0 80px 50px #ffffff inset;
    box-shadow: 0px -30px 300px 10px #ffffff inset;
  }
  .greet-text {
    padding-left: 8%;
    width: 30%;
    svg {
      overflow: visible;
    }
  }
}
.block-invite {
  background-color: $backgroundColor1;
  padding: 20vh 0;
  & > div {
    width: 40vw;
    margin: auto;
  }
  .date {
    font-size: 2rem;
    margin-bottom: 50px;
    font-weight: 500;
  }
  .text {
    font-size: 1rem;
    max-width: 25rem;
    margin-left: auto;
    margin-bottom: 2rem;
  }
  .rsvp {
    font-weight: 500;
  }
}
.block-profile {
  background-color: $backgroundColor1;
  & > div {
    width: 60vw;
    margin: auto;
  }
  .name {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 100px;
    &:last-child {
      margin-bottom: 0;
    }
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
    height: 40vh;
    background-image: url(assets/img/20190830_R7005919.jpeg);
  }
  .img-3 {
    height: 40vh;
    background-image: url(assets/img/20190830_R7006012.jpeg);
    background-position: top;
  }
  .img-4 {
    margin-bottom: 10px;
    margin-right: 10px;
    height: 40vh;
    background-image: url(assets/img/20190830_R7005727.jpeg);
  }
  .img-5 {
    margin-right: 10px;
    height: 40vh;
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
  padding: 20vh 0;
  background-color: rgba(245, 226, 228, 0.5);
  // background-color: #f6efef;
  & > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    & > div:not(:last-child) {
      margin-bottom: 100px;
    }
  }
  .title {
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
  }
  .row {
    display: flex;
    .col {
      margin: 0 10px;
      flex: 50%;
      max-width: 50%;
      box-shadow: 0px 5px 35px rgba(53, 53, 53, 0.06);
      padding: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      & > .text {
        font-weight: 600;
        margin-bottom: 5px;
      }
    }
  }
  .img {
    border-radius: 5px;
    width: 50%;
    min-width: 300px;
    max-width: 400px;
    min-height: 300px;
    max-height: 400px;
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
    font-size: 1.5rem;
    text-decoration: underline;
    color: #000;
    background-color: #fff;
  }
  .text.event-time {
    font-size: 2.5rem;
    color: #fff;
    .small {
      font-size: 1.5rem;
    }
  }
  .location {
    text-align: center;
    .caption {
      margin-bottom: 10px;
      font-weight: 600;
    }
    .venue {
      font-size: 1.8rem;
      margin-bottom: 5px;
    }
    .address {
      font-size: 0.9rem;
      svg {
        margin-right: 5px;
      }
    }
  }
}
.block-gallery {
  overflow-x: scroll;
  padding: 20vh 1rem;
  &::-webkit-scrollbar {
    display: none;
  }
  .vsg-container {
    min-width: 992px;
    .vsg-stack-item img {
      width: 100%;
      border-radius: 5px;
      cursor: pointer;
      margin-right: 1rem;
    }
  }
}

.block-copyright {
  padding: 1rem;
  text-align: center;
}
</style>
