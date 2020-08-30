<template>
  <div class="loader" :class="{ hide: !isLoading }">
    <div class="back"></div>
    <div class="heart"></div>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss" scoped>
$heart-color: #5dadec;
$back-color: #dbe3ea;

.loader {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  &.hide > * {
    opacity: 0;
  }
  & > * {
    z-index: 1;
    transition: opacity 2s ease-in-out;
    opacity: 1;
  }
}

.back {
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  animation-name: backdiv;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}

.heart {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: $heart-color;
  height: 50px;
  width: 50px;
  transform: rotate(-45deg);
  animation-name: beat;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
.heart:after {
  background-color: $heart-color;
  content: "";
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  top: 0px;
  left: 25px;
}
.heart:before {
  background-color: $heart-color;
  content: "";
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  top: -25px;
  left: 0px;
}

@keyframes backdiv {
  50% {
    background: $back-color;
  }
}

@keyframes beat {
  0% {
    transform: scale(1) rotate(-45deg);
  }
  50% {
    transform: scale(0.6) rotate(-45deg);
  }
}
</style>
