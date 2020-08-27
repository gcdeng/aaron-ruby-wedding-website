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
    const varaFontJsonPath =
      "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json";
    setTimeout(() => {
      new Vara(".block-greeting .text", varaFontJsonPath, [
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
  }
};
</script>

<style lang="scss" scoped>
.block-greeting {
  position: relative;
  background-image: url(../assets/img/20190830_R7005511.jpeg);
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
  .text {
    padding: 0 8%;
    width: 30%;
    svg {
      overflow: visible;
    }
  }
}
</style>
