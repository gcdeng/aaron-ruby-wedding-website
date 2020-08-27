<template>
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
</template>

<script>
export default {
  name: "Profile",
  mounted() {
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
      scale: 1.2,
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
    background-image: url($imgPath+"20190830_R7006018.jpeg");
  }
  .img-2 {
    margin-bottom: 10px;
    height: 40vmin;
    background-image: url($imgPath+"20190830_R7005919.jpeg");
  }
  .img-3 {
    height: 40vmin;
    background-image: url($imgPath+"20190830_R7006012.jpeg");
    background-position: top;
  }
  .img-4 {
    margin-bottom: 10px;
    margin-right: 10px;
    height: 40vmin;
    background-image: url($imgPath+"20190830_R7005727.jpeg");
  }
  .img-5 {
    margin-right: 10px;
    height: 40vmin;
    background-image: url($imgPath+"20190830_R7005728.jpeg");
  }
  .img-6 {
    height: 100%;
    background-image: url($imgPath+"20190830_R7005743.jpeg");
    background-position: bottom;
  }
  .img-transition {
    margin-top: 20vh;
    height: 100vh;
    width: 100vw;
    position: relative;
    left: -10vw;
    background-image: url($imgPath+"20190830_R7005505.jpeg");
    background-position: center;
    .mask {
      width: 100%;
      height: 100%;
      background-color: rgba($color: #fff, $alpha: 0);
    }
  }
}
</style>
