<template>
  <div class="footer-contain">
    <div class="footer-wrap">
      <p>Copyright &copy; 2020 Real Property Investing. All Rights Reserved.</p>

      <div class="social-wrap">
        <a class="icon-tag" href="https://www.facebook.com/REAL-Property-Investing-109022127574705/" target="_blank">
          <font-awesome-icon class="icon fb" :icon="['fab', 'facebook-f']" />
        </a>
        <a class="icon-tag" href="https://www.instagram.com/realpropertyinvestingllc/" target="_blank">
          <font-awesome-icon class="icon ig" :icon="['fab', 'instagram']" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
.footer-contain {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  padding: 15px;
  background-color: var(--d-gray);
  color: var(--white);

  .footer-wrap {
    width: 100%;
    max-width: 1250px;
    display: flex;
    justify-content: space-between;

    .social-wrap {
      .icon-tag {
        color: var(--white);
        font-size: 1.3rem;
        padding: 15px 8px;
        transition: all 0.2s ease;

        &:hover {
          transform: scale(1.5);
        }
      }
    }
  }
}

</style>