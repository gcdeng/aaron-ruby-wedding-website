<template>
  <div class="block block-event">
    <div class="event">
      <div class="event-time">2020/12/19</div>
      <div class="event-name location">
        <a
          href="https://goo.gl/maps/eRAWmqctc4x85jWXA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon icon="map-marker-alt" />陽明山中國麗緻飯店
        </a>
      </div>
    </div>
    <div class="event">
      <div class="event-time">11:00AM</div>
      <div class="event-name">#戶外證婚派對</div>
    </div>
    <div class="event">
      <div class="event-time">12:30PM</div>
      <div class="event-name">#午宴</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Event",
  mounted() {
    let eventDivs = document.querySelectorAll(".event");
    eventDivs.forEach(eventDiv => {
      this.$gsap.from(eventDiv, {
        opacity: 0,
        scrollTrigger: {
          // markers: true,
          start: "top 80%",
          end: "+=10%",
          trigger: eventDiv,
          scrub: 1
        }
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.block-event {
  position: relative;
  margin-top: -100vh;
  height: 100vh;
  display: flex;
  align-items: baseline;
  flex-direction: column;
  font-size: 1.2rem;
  padding: 0 10vw;
  & > div {
    margin-bottom: 1rem;
  }
  .location svg {
    margin-right: 5px;
  }
  .event {
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }
  .event-name {
    padding: 0 10px 2px 10px;
    border-radius: 5px;
    background-color: rgba(44, 62, 80, 0.5);
    color: white;
  }
}
</style>
