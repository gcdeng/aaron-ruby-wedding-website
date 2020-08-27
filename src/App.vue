<template>
  <div id="app">
    <greeting />
    <invitation />
    <profile />
    <event />
    <gallery />
    <copyright />
  </div>
</template>

<script>
import Greeting from "@/components/greeting";
import Invitation from "@/components/invitation";
import Profile from "@/components/profile";
import Event from "@/components/event";
import Gallery from "@/components/gallery";
import Copyright from "@/components/copyright";

export default {
  name: "App",
  components: { Greeting, Invitation, Profile, Event, Gallery, Copyright }
};
</script>
