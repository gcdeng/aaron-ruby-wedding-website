<template>
  <div class="block-invitation" ref="blockInvitation">
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
        class="fillin-link-effect"
        :style="{ fontWeight: 600 }"
        href="https://www.surveycake.com/s/vrPmp"
        target="_blank"
        rel="noopener noreferrer"
      >
        RSVP
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Invitation",
  mounted() {
    let { blockInvitation } = this.$refs;
    this.$gsap.from(blockInvitation, {
      opacity: 0,
      y: 10,
      scrollTrigger: {
        trigger: blockInvitation,
        start: "top 100%",
        end: "bottom 100%",
        // markers: true,
        scrub: 1
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.block-invitation {
  position: absolute;
  top: 110vh;
  width: 100%;
  box-sizing: border-box;
  padding: 0 10vw;
  .date {
    font-size: 3rem;
    margin-bottom: 5vh;
    font-weight: 600;
    font-family: "Dancing Script";
  }
  .text {
    font-size: 1rem;
    max-width: 30rem;
    margin-left: auto;
    line-height: 1.6;
    color: #fff;
  }

  .fillin-link-effect {
    padding-bottom: 5px;
    color: #ffffff;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      right: 100%;
      background: #fff;
      height: 2px;
      -webkit-transition-property: right;
      transition-property: right;
      -webkit-transition-duration: 0.5s;
      transition-duration: 0.5s;
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
    }
    &:hover {
      &::before {
        right: 0;
      }
    }
  }
}
</style>
