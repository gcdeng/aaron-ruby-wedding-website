<template>
  <div id="app">
    <div class="block-landing">
      <div class="greet-text"></div>
    </div>
    <div class="block-invite">
      <div class="time">
        <div>Saturday</div>
        <div>December 19</div>
        <div>2020</div>
      </div>
      <div class="text">
        給每一個曾參與我們成長過程的你們：<br />
        歷經了8年的愛情長跑，我們決定對一路從學生時期陪伴的彼此，許下共度餘生的承諾💍<br />
        <br />
        在這個疫情攪局的2020年，世界發生了很多改變，計畫也不停地被打亂。<br />
        但這是2019年就預定下的日期，因此我們還是懷抱著小小的夢想，希望婚禮能夠順利照常舉行。
        也衷心地期盼年底的婚禮可以象徵否極泰來的開始！<br />
        <br />
        在這個對我們來說非常重要的日子，<br />
        邀請所有愛的你們，讓這個充滿意義的日子更為圓滿。
      </div>
    </div>
  </div>
</template>

<script>
import Vara from "vara";
export default {
  name: "App",
  components: {},
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.block-landing {
  background-image: url("./assets/img/landing.jpeg");
  height: 100vh;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  .greet-text {
    padding-left: 8%;
    width: 30%;
    svg {
      overflow: visible;
    }
  }
}
.block-invite {
  padding: 100px 90px;
  width: 50%;
  .text {
    width: 60%;
    margin: auto;
  }
}
</style>
