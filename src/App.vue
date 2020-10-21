<template>
  <div id="app">
    <Nav />
    <transition name="fade" mode="out-in">
      <router-view>
        <Home />
      </router-view>
    </transition>
    <font-awesome-icon :icon="['fab', 'facebook-f']" />
    <font-awesome-icon :icon="['fab', 'instagram']" />
  </div>
</template>

<script>
import Home from './pages/Home.vue'
import Nav from './components/RPINav.vue'

export default {
  name: 'App',
  components: {
    Home,
    Nav
  }
}
</script>

<style>
:root {
  --d-blue: #076099;
  --l-blue: #057dca;
  --white: #f1f1f1;
  --d-gray: #2b2b2b;
}

* {
  box-sizing: border-box;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--white);
}
</style>
