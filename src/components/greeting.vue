<template>
  <div ref="blockGreeting" class="block-greeting">
    <div class="text"></div>
    <div class="shadow mask"></div>
    <div ref="blockGreetingMask" class="mask"></div>
  </div>
</template>

<script>
import Vara from "vara";
export default {
  name: "Greeting",
  mounted() {
    this.varaText = new Vara(
      ".block-greeting .text",
      "./SatisfySL.json",
      [
        {
          text: "Invite you to our wedding party",
          fontSize: innerWidth > 768 ? 40 : 30
        },
        {
          text: "Aaron & Ruby",
          fontSize: innerWidth > 768 ? 30 : 16,
          textAlign: "right"
        }
      ],
      {
        strokeWidth: 1, // Width / Thickness of the stroke
        color: "#2c3e50", // Color of the text,
        autoAnimation: false
      }
    );

    let { blockGreeting, blockGreetingMask } = this.$refs;
    this.$gsap.to(blockGreetingMask, {
      backgroundColor: "rgb(184, 202, 217)",
      scrollTrigger: {
        // markers: true,
        pin: true,
        trigger: blockGreeting,
        scrub: 1
      }
    });
  },
  methods: {
    drawVaraText() {
      this.varaText.playAll();
    }
  }
};
</script>

<style lang="scss" scoped>
.block-greeting {
  position: relative;
  height: 100vh;
  background-image: url(../assets/img/20190830_R7005511.jpeg);
  background-size: cover;
  background-position: bottom 0 right -250px;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-start;
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
    // box-shadow: 0px -30px 300px 10px #ffffff inset;
    box-shadow: 0px -50px 200px -100px #ffffff inset;
  }
  .text {
    padding: 15vh 10vw;
    width: 100vw;
    svg {
      overflow: visible;
    }
  }
  @media (min-width: 768px) {
    align-items: center;
    background-position: bottom right;
    .text {
      width: 50vw;
    }
  }
}
</style>
