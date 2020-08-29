<template>
  <div class="block block-profile" ref="blockProfile">
    <div class="aaron">
      <div class="name" ref="blockProfileAaronName">@Aaron</div>
      <div class="row" ref="blockProfileAaronRow">
        <div class="column">
          <div class="img img-1" v-lazy:background-image="imgs.img1" />
        </div>
        <div class="column">
          <div class="img img-2" v-lazy:background-image="imgs.img2" />
          <div class="img img-3" v-lazy:background-image="imgs.img3" />
        </div>
      </div>
    </div>
    <div class="ruby">
      <div
        class="name"
        :style="{ textAlign: 'right' }"
        ref="blockProfileRubyName"
      >
        @Ruby
      </div>
      <div class="row" ref="blockProfileRubyRow">
        <div class="column">
          <div class="img img-4" v-lazy:background-image="imgs.img4" />
          <div class="img img-5" v-lazy:background-image="imgs.img5" />
        </div>
        <div class="column">
          <div class="img img-6" v-lazy:background-image="imgs.img6" />
        </div>
      </div>
    </div>
    <div
      class="img img-transition"
      v-lazy:background-image="imgs.img7"
      ref="blockProfileTransitionImg"
    >
      <div class="mask" ref="blockProfileTransitionImgMask"></div>
    </div>
  </div>
</template>

<script>
import img1 from "@/assets/img/20190830_R7006018.jpeg";
import img2 from "@/assets/img/20190830_R7005919.jpeg";
import img3 from "@/assets/img/20190830_R7006012.jpeg";
import img4 from "@/assets/img/20190830_R7005727.jpeg";
import img5 from "@/assets/img/20190830_R7005728.jpeg";
import img6 from "@/assets/img/20190830_R7005743.jpeg";
import img7 from "@/assets/img/20190830_R7005505.jpeg";
export default {
  name: "Profile",
  data() {
    return {
      imgs: {
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7
      }
    };
  },
  mounted() {
    let {
      blockProfile,
      blockProfileAaronName,
      blockProfileAaronRow,
      blockProfileRubyName,
      blockProfileRubyRow,
      blockProfileTransitionImg,
      blockProfileTransitionImgMask
    } = this.$refs;
    this.$gsap.to(blockProfile, {
      backgroundColor: "#fff",
      scrollTrigger: {
        start: "top top",
        // markers: true,
        trigger: blockProfile,
        scrub: 1
      }
    });
    let fadeInUpEls = [
      blockProfileAaronName,
      blockProfileAaronRow,
      blockProfileRubyName,
      blockProfileRubyRow
    ];
    fadeInUpEls.forEach(el => {
      this.$gsap.from(el, {
        opacity: 0,
        y: "15%",
        scrollTrigger: {
          // markers: true,
          start: "top bottom",
          end: "top center",
          trigger: el,
          scrub: 1
        }
      });
    });

    this.$gsap.to(blockProfileTransitionImg, {
      scale: 1.4,
      scrollTrigger: {
        // markers: true,
        start: "top bottom",
        end: "bottom top",
        trigger: blockProfileTransitionImg,
        scrub: 2,
        toggleActions: "play none none none"
      }
    });
    this.$gsap.to(blockProfileTransitionImgMask, {
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      scrollTrigger: {
        // markers: true,
        start: "top top",
        end: "bottom 20%",
        trigger: blockProfileTransitionImg,
        scrub: 1,
        pin: true
      }
    });
  }
};
</script>

<style lang="scss" scoped>
$imgPath: "~@/assets/img/";

.block-profile {
  padding: 0 10vw 20vh 10vw;
  background-color: rgb(184, 202, 217);
  overflow: hidden;
  & > div {
    height: 100vmin;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10vh;
  }
  .name {
    font-size: 3.5rem;
    font-family: "Dancing Script";
  }
  .ruby .name {
    color: #e4b4b9;
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
    // background-image: url($imgPath+"20190830_R7006018.jpeg");
  }
  .img-2 {
    margin-bottom: 10px;
    height: 40vmin;
    // background-image: url($imgPath+"20190830_R7005919.jpeg");
  }
  .img-3 {
    height: 40vmin;
    // background-image: url($imgPath+"20190830_R7006012.jpeg");
    background-position: top;
  }
  .img-4 {
    margin-bottom: 10px;
    margin-right: 10px;
    height: 40vmin;
    // background-image: url($imgPath+"20190830_R7005727.jpeg");
  }
  .img-5 {
    margin-right: 10px;
    height: 40vmin;
    // background-image: url($imgPath+"20190830_R7005728.jpeg");
  }
  .img-6 {
    height: 100%;
    // background-image: url($imgPath+"20190830_R7005743.jpeg");
    background-position: bottom;
  }
  .img-transition {
    margin-top: 20vh;
    height: 100vh;
    width: 100vw;
    position: relative;
    left: -10vw;
    // background-image: url($imgPath+"20190830_R7005505.jpeg");
    background-position: center;
    .mask {
      width: 100%;
      height: 100%;
      background-color: rgba($color: #fff, $alpha: 0);
    }
  }
}
</style>
