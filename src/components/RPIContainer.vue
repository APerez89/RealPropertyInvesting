<template>
  <div class="rpi-container">
    <Nav />

    <div class="image-slider">
      <div class="dark-layer">
      </div>
      <!-- <img src="../assets/images/slide-1.jpg" alt=""> -->
    </div>
  </div>
</template>

<script>
import Nav from './RPINav'

export default {
  name: 'RpiContainer',
  components: {
    Nav
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.rpi-container {
  width: 100%;
  max-height: 100vh;
  background-image: url('../assets/images/slide-1.jpg');
  background-size: cover;
  background-repeat: no-repeat;

  .image-slider {
    position: absolute;
    top: 0;
    z-index: -1;
    img {
      background-color: rgba(0,0,0,0.6);
      width: 100%;
    }
  }
}

</style>
