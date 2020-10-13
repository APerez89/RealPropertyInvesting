<template>
  <div id="app">
    <RpiContainer />
  </div>
</template>

<script>
import RpiContainer from './components/RPIContain.vue'

export default {
  name: 'App',
  components: {
    RpiContainer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
