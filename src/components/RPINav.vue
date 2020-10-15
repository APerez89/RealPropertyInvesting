<template>
  <div class="nav-wrap">
    <div class="logo-wrap">
      <img src="../assets/logo.png" alt="Real Property Investing Logo">
    </div>

    <div class="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact Us</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="scss" scoped>
.nav-wrap {
  width: 100%;
  max-width: 1250px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  .logo-wrap {
    img {
      width: 100%;
      max-width: 175px;
    }
  }
  
  .nav-items {

    ul {
      list-style: none;
      display: flex;
      flex-direction: row;

      li {
        padding: 10px 15px;
        font-size: 1.2rem;
      }
    }
  }
}
</style>