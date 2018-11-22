<template>
  <div class="column is-4 centered">
    <div class="flip-container" @click="isFlipped = !isFlipped ">
      <div class="flipper" :class="{ flipped: isFlipped }">
        <div class="front">
          <img :src="imageFront" alt="">
        </div>
        <div class="back">
          <img :src="imageBack" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .centered {
    display: flex;
    justify-content: center;
  }
  /* entire container, keeps perspective */
  .flip-container {
    cursor: pointer;
    perspective: 1000px;
  }
  /* flip the pane when hovered
  .flip-container:hover .flipper,
  .flip-container.hover .flipper {
    transform: rotateY(180deg);
  } */

  /* flip the pane when hovered */

  .flipped {
    transform: rotateY(180deg);
  }

  .flip-container,
  .front,
  .back {
    width: 400px;
    height: 600px;
  }
  /* flip speed goes here */
  .flipper {
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;
  }
  /* hide back of pane during swap */
  .front,
  .back {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }
  /* front pane, placed above back */
  .front {
    z-index: 2;
    /* for firefox 31 */
    transform: rotateY(0deg);
  }
  /* back, initially hidden pane */
  .back {
    transform: rotateY(180deg);
  }
</style>

<script>
  export default {
    data() {
      return {
        isFlipped: false
      }
    },
    props: {
      id: {
        type: String,
        required: true
      },
      imageFront: {
        type: String,
        required: true
      },
      imageBack: {
        type: String,
        required: true
      }
    }
  }
</script>
