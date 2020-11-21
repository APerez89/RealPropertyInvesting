<template>
  <div class="distressed-contain">

    <div class="distressed-wrap">

      <div class="content-wrap">

        <div class="img-wrap">
          <img src="/images/distressed-1.jpg" alt="Distressed property and renovated property">
        </div>

        <div class="content">
          <h2>Distressed Property Specialist</h2>

          <h3>Do you have a distressed property in your neighborhood?</h3>

          <p>Our reputable team of distressed property experts specializes in flipping houses to revitalize neighborhoods. We PAY IN CASH, make quick offers, and ensure a quick close!</p>
        </div>

      </div>

      <Assist />
      <Form />
    </div>
  </div>
</template>

<script>
import Assist from '../components/AssistBanner'
import Form from '../components/RPIForm'

export default {
  name: 'Distressed',
  components: {
    Assist,
    Form
  },
  data() {
    return {
      options: []
    }
  }
}
</script>

<style lang="scss" scoped>
.distressed-contain {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 8px;
  }

  .distressed-wrap {
    width: 100%;
    max-width: 1250px;

    .content-wrap {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .img-wrap {
        width: 50%;
        img {
          width: 100%;
        }
      }

      .content {
        width: 50%;
        max-width: 525px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 15px;

        h2 {
          font-size: 2.2rem;
          margin-bottom: 15px;
          color: var(--l-blue);
        }

        h3 {
          font-size: 1.3rem;
          margin-bottom: 8px;
        }
      }

    }
  }
}

@media (min-width: 320px) and (max-width: 380px) {
  .distressed-contain {
    padding: 10px;

    .distressed-wrap {
      .content-wrap {
        flex-direction: column;
        align-items: center;

        .img-wrap {
          width: 100%;
        }

        .content {
          width: 100%;
        }
      }
    }
  }
}

</style>