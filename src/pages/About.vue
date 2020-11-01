<template>
  <div class="about-contain">
    <div class="about-wrap">
      <h2>About Us</h2>
      <p>Real Property Investing is the top Real Estate Investment Firm in Fairfield County.</p>
      <p>We are equipped with a team of dedicated, licensed professionals who specialize in debt negotiations, renovations and redevelopment of single and multi-family homes.</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'About',
}
</script>

<style lang="scss" scoped>
.about-contain {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;

  h2 {
    font-size: 2.2rem;
    margin-bottom: 15px;
    color: var(--l-blue);
  }

  .about-wrap {
    width: 100%;
    max-width: 1250px;
  }
}

</style>