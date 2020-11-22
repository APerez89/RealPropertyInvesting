<template>
  <div class="contact-contain">
    <div class="contact-wrap">
      <h2>Contact Us</h2>
      <Form />
    </div>
  </div>
</template>

<script>
import Form from '../components/RPIForm'
export default {
    name: 'Contact',
    components: {
        Form
    }
}
</script>

<style lang="scss" scoped>
.contact-contain {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  padding: 15px;

  h2 {
    font-size: 2.2rem;
    margin-bottom: 15px;
    color: var(--l-blue);
  }

  .contact-wrap {
    width: 100%;
    max-width: 1250px;
  }
}

</style>