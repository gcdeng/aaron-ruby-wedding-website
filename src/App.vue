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
</style>
