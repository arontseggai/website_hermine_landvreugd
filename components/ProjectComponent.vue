<template>
  <div class="column is-4" @keydown.esc="deactiveOverlay">
    <div class="imagery" @click="activateOverlay">
      <img :src="photo" alt="">
      <div class="img-overlay is-hidden-mobile"></div>
    </div>
    <div 
      class="overlay" 
      :class="{active: isActive}"
      @click="deactiveOverlay">
      <img class="close" src="~/static/cross.svg" alt="" @click="deactiveOverlay">
      <div 
        v-if="videoHost === 'vimeo'" 
        class="video" 
        :data-vimeo-url="url" 
        :data-vimeo-width="1000" 
        :id="id"></div>
      <no-ssr v-else-if="videoHost === 'youtube'" class="video youtube-video" placeholder="Loading...">
        <youtube
          :video-id="url" 
          @ready="ready" 
          player-width="1000px"
          player-height="563px"
          ></youtube>
      </no-ssr>
    </div>
  </div>
</template>

<style scoped>
  [v-cloak] {
    display: none;
  }
  .img-overlay {
    position: absolute;
    opacity: 0.2;
    top: 0;
    z-index: 997;
    background-color: black;
    width: 100%;
    height: 100%;
    transition: 400ms;
  }
  .img-overlay:hover {
    opacity: 0;
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
  .imagery {
    position: relative;
    cursor: pointer;
    text-align: center;
  }
  .imagery img {
    width: 100%;
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
  .overlay .video {
    display: none;
  }
  .overlay.active .video {
    display: block;
  }
</style>

<script>
  import Player from '@vimeo/player'
  export default {
    props: {
      id: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      },
      photo: {
        type: String,
        required: true
      },
      videoHost: {
        type: String,
        required: true
      }
      // photoHover: {
      //   type: String,
      //   required: true
      // }                  
    },
    data() {
      return {
        isActive: false,
        player: false
      }
    },
    methods: {
      ready(event) {
        this.player = event.target;
      },
      activateOverlay() {
        this.isActive = true
      },
      deactiveOverlay() {
        this.isActive = false
        if (this.videoHost === 'vimeo') {
          this.player.pause()
        }
        if (this.videoHost === 'youtube') {
          this.player.pauseVideo()
        }
      },
      deactiveOverlayEscape(e) {
        if (e.keyCode === 27 && this.isActive) {
          this.isActive = false;
          if (this.videoHost === 'vimeo') {
            this.player.pause()
          }
          if (this.videoHost === 'youtube') {
            this.player.pauseVideo()
          }
        }
      }
    },
    created() {
      window.addEventListener('keyup', this.deactiveOverlayEscape);
    },
    mounted() {
      if (this.videoHost === 'vimeo') {
        this.player = new Player(this.id)
      }
    }
  }
</script>
