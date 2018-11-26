<template>
  <div @keydown.esc="deactiveOverlay">
    <div class="front-image" @click="activateOverlay"><img :src="imageFront" alt=""></div>
    <div class="overlay" :class="{active: isActive}">
      <img class="close" src="~/static/cross.svg" alt="" @click="deactiveOverlay">
      <div class="imagery">
        <img :src="imageBack" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>
  .front-image img {
    cursor: pointer;
  }
  .overlay {
    display: none;
  }
  .overlay.active {
    position: fixed;
    min-height: 100%;
    z-index: 998;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .overlay.active .imagery img {
    height: 100%;
  }
  .overlay.active .imagery {
    height: 80vh;
  }
  .overlay .close {
    position: absolute;
    right: 0;
    top: 0;
    height: 25px;
    margin: 7% 10% 0px 0px;
    cursor: pointer;
    z-index: 999;
    display: none;
  }
  .overlay.active .close {
    display: block;
  }
</style>

<script>
  export default {
    data() {
      return {
        isActive: false
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
    },
    methods: {
      activateOverlay() {
        console.log('wefwefwefewf');
        this.isActive = true
      },
      deactiveOverlay() {
        this.isActive = false
      },
      deactiveOverlayEscape(e) {
        if (e.keyCode === 27 && this.isActive) {
          this.isActive = false;
        }
      }
    },
    created() {
      window.addEventListener('keyup', this.deactiveOverlayEscape);
    }
  }
</script>
