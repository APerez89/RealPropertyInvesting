<template>
  <div class="rpi-container">
    <Nav />
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

</style>
