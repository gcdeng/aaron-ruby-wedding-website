<template>
  <div id="app">
    <loader v-if="!hideLoader" :is-loading="isLoading" />
    <greeting ref="greeting" />
    <invitation />
    <profile />
    <event />
    <gallery />
    <copyright />
  </div>
</template>

<script>
import Loader from "@/components/loader";
import Greeting from "@/components/greeting";
import Invitation from "@/components/invitation";
import Profile from "@/components/profile";
import Event from "@/components/event";
import Gallery from "@/components/gallery";
import Copyright from "@/components/copyright";

export default {
  name: "App",
  components: {
    Loader,
    Greeting,
    Invitation,
    Profile,
    Event,
    Gallery,
    Copyright
  },
  data() {
    return {
      isLoading: true,
      hideLoader: false
    };
  },
  mounted() {
    function noScroll() {
      window.scrollTo(0, 0);
    }
    window.addEventListener("scroll", noScroll);
    let loadingDuration = 3000;
    let greetingDelay = 1500;
    let toId = setTimeout(() => {
      this.isLoading = false;
      clearTimeout(toId);
      window.removeEventListener("scroll", noScroll);

      let greetingDelayToId = setTimeout(() => {
        this.$refs.greeting.drawVaraText();
        clearTimeout(greetingDelayToId);
      }, greetingDelay);

      toId = setTimeout(() => {
        this.hideLoader = true;
        clearTimeout(toId);
      }, loadingDuration);
    }, loadingDuration);
  }
};
</script>
