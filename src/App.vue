<template>
  <div id="app">
    <Nav />
    <transition name="fade" mode="out-in" appear>
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
import Footer from './components/FooterNew'

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
  --error: #f04b4b;
}

* {
  box-sizing: border-box;
  margin: 0;
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--white);
  color: var(--d-gray);
}

h3 {
  letter-spacing: 1px;
}

p {
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  line-height: 28px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
