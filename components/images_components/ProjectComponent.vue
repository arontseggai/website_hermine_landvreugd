<template>
  <div class="column is-4">
    <div class="flip-imagery">
      <div class="front">
        <img :src="imageFront" alt="">
      </div>
      <!-- <div class="front">
        <img :src="photo" alt="">
      </div> -->
    </div>
  </div>
</template>

<style scoped>

.has-shadow {
  box-shadow: 0 3px 6px rgba(202, 202, 202, 0.16), 0 3px 6px rgba(107, 107, 107, 0.23);
}

  .imagery {
    position: relative;
    cursor: pointer;
    text-align: center;
  }
  .imagery img {
    width: 100%;
  }

</style>

<script>
  export default {
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
