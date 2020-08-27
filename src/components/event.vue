<template>
  <div class="block block-event">
    <!-- <div class="title">Wedding Events</div> -->

    <div class="location" ref="blockEventLocation">
      <!-- <div class="caption">THE VENUE</div> -->
      <div class="venue">
        <a
          href="http://yangmingshan.landishotelsresorts.com/chinese-trad/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon icon="map-marker-alt" />陽明山中國麗緻飯店
        </a>
      </div>
      <div class="address">
        <a
          href="https://goo.gl/maps/eRAWmqctc4x85jWXA"
          target="_blank"
          rel="noopener noreferrer"
        >
          台北市士林區格致路237號
        </a>
      </div>
    </div>
    <div class="event" ref="blockEvent1">
      <div class="text event-time">11:00<span class="small">AM</span></div>
      <div class="text event-name">#戶外證婚派對</div>
    </div>
    <div class="event" ref="blockEvent2">
      <div class="text event-time">12:30<span class="small">PM</span></div>
      <div class="text event-name">#午宴</div>
    </div>

    <!-- <div class="row">
        <div class="col img event-1">
          <div class="text event-time">11:00<span class="small">AM</span></div>
          <div class="text event-name">#weddingceremony</div>
        </div>
        <div class="col img event-2">
          <div class="text event-time">12:30<span class="small">PM</span></div>
          <div class="text event-name">#lunch</div>
        </div>
      </div> -->
  </div>
</template>

<script>
export default {
  name: "Event",
  mounted() {
    let { blockEventLocation, blockEvent1, blockEvent2 } = this.$refs;
    this.$gsap.from(blockEventLocation, {
      opacity: 0,
      scrollTrigger: {
        // markers: true,
        start: "top 95%",
        end: "+=30%",
        trigger: blockEventLocation,
        scrub: 1
      }
    });
    this.$gsap.from(blockEvent1, {
      opacity: 0,
      scrollTrigger: {
        // markers: true,
        start: "top 95%",
        end: "+=30%",
        trigger: blockEvent1,
        scrub: 1
      }
    });
    this.$gsap.from(blockEvent2, {
      opacity: 0,
      scrollTrigger: {
        // markers: true,
        start: "top 95%",
        end: "+=30%",
        trigger: blockEvent2,
        scrub: 1
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.block-event {
  padding: 0;
  position: relative;
  margin-top: -100vh;
  height: 100vh;
  // background-color: rgba(245, 226, 228, 0.5);
  // background-color: #f6efef;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  & > div:not(:last-child) {
    margin-bottom: 10vh;
  }

  // .mb-1vh {
  //   margin-bottom: 1vh;
  // }
  // .title {
  //   text-align: center;
  //   font-size: 10vmin;
  //   font-weight: 500;
  // }
  .text {
    font-weight: 600;
    // margin-bottom: 5px;
  }
  // .row {
  //   width: 100%;
  //   display: flex;
  //   flex-wrap: wrap;
  //   justify-content: space-evenly;
  //   .col {
  //     box-shadow: 0px 5px 35px rgba(53, 53, 53, 0.06);
  //     padding: 10%;
  //     display: inline-flex;
  //     align-items: center;
  //     justify-content: center;
  //     flex-direction: column;
  //     margin-bottom: 10vh;
  //     width: 10vw;
  //     min-width: 14rem;
  //     height: 30vh;
  //     min-height: 15rem;
  //     & > .text {
  //       font-weight: 600;
  //       margin-bottom: 5px;
  //     }
  //   }

  //   .img {
  //     background-size: cover;
  //     background-repeat: no-repeat;
  //     background-position: center;
  //     &.event-1 {
  //       background-image: url(assets/img/shardayyy-photography-fJzmPe-a0eU-unsplash.jpg);
  //     }
  //     &.event-2 {
  //       background-image: url(assets/img/annie-spratt-TQSB-suJu1k-unsplash.jpg);
  //     }
  //   }
  // }
  .event {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .event-name {
    padding: 0 10px;
    border-radius: 5px;
    font-size: 4vmin;
    text-decoration: underline;
    color: #000;
    background-color: #fff;
  }
  .event-time {
    font-size: 8vmin;
    color: #fff;
    .small {
      font-size: 5vmin;
    }
  }
  .location {
    text-align: center;
    .caption {
      font-size: 3vmin;
      font-weight: 600;
    }
    .venue {
      font-size: 6vmin;
      svg {
        margin-right: 1vmin;
      }
    }
    .address {
      font-size: 2vmin;
    }
  }
}
</style>
