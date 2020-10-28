<template>
  <div id="app">
    <Nav />
    <transition name="fade" mode="out-in">
      <router-view>
        <Home />
      </router-view>
    </transition>
    <Footer />
    
  </div>
</template>

<script>
import Home from './pages/Home'
import Nav from './components/RPINav'
import Footer from './components/RPIFooter'

export default {
  name: 'App',
  components: {
    Home,
    Nav,
    Footer
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
  color: var(--d-gray);
}

h3 {
  letter-spacing: 1px;
}

p {
  font-size: 1.1rem;
  line-height: 28px;
}
</style>
