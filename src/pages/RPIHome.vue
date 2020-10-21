<template>
  <div class="rpi-home-contain">

    <div class="rpi-home-wrap">

      <div class="image-slider">
        <div class="dark-layer">
        </div>
        <!-- <img src="../assets/images/slide-1.jpg" alt=""> -->
      </div>
      <Distressed />
      <ShortSale />
      <Investor />
      <Realtor />
      <Footer />
      <Form />
      
    </div>

  </div>

</template>

<script>
import Distressed from '../components/RPIDistressed'
import ShortSale from '../components/RPIShortSale'
import Investor from '../components/RPIInvestor'
import Realtor from '../components/RPIRealtor'
import Footer from '../components/RPIFooter'
import Form from '../components/RPIForm'

export default {
  name: 'RpiHome',
  components: {
    Distressed,
    ShortSale,
    Investor,
    Realtor,
    Footer,
    Form
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.rpi-home-contain {
  width: 100%;
  max-height: 100vh;
  // background-image: url('../assets/images/slide-1.jpg');
  // background-size: cover;
  // background-repeat: no-repeat;

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
