<template>
  <div class="short-sale-contain">

    <div class="short-sale-wrap">

      <div class="content-wrap">

        <div class="img-wrap">
          <img src="/images/negotiate-1.jpg" alt="Two men negotiating">
        </div>

        <div class="content">
          <h2>Licensed Short Sale Negotiator</h2>

          <h3>Are you trying to avoid foreclosure and bankruptcy?</h3>

          <p>Our team is equipped with licensed short sale negotiators, debt negotiators, realtors, attorneys and more.</p>
          <p>We negotiate ALL of the liens on your house, Allowing you to sell it and convey a clean title ! Find out how we get 100% of our Short Sales approved.</p>
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
  name: 'ShortSale',
  components: {
    Assist,
    Form
  }
}
</script>

<style lang="scss" scoped>
.short-sale-contain {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  padding: 15px;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 8px;
  }

  .short-sale-wrap {
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
    .form-wrap {
      form {
        .personal-details {
          .personal-info {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 20px;
            margin-bottom: 30px;
          }
        }

        .message-details {
          .message-info {
            display: grid;
            grid-gap: 20px;
            margin-bottom: 30px;

            input {
              width: 30%;
            }
          }
        }

        .form-section {
          display: flex;
          flex-direction: column;

          label {
            margin-bottom: 5px;
          }

          input, textarea {
            padding: 13px;
            background-color: rgba(0,0,0,0);
            border: 1px solid var(--d-gray);

            &:focus {
              outline: none;
              border: 1px solid var(--l-blue);
            }
          }
        }

        .form-btn {
          text-decoration: none;
          color: var(--white);
          background-color: var(--l-blue);
          margin-top: 25px;
          padding: 15px 65px;
          border: none;
          border-radius: 50px;
          font-size: 1rem;
          cursor: pointer;

          &:hover {
            background-color: var(--d-blue);
          }
        }
      }
    }
  }
}

@media (min-width: 767px) and (max-width: 991px) {
  
}

@media (min-width: 320px) and (max-width: 767px) {
  .short-sale-contain {
    padding: 10px;

    .short-sale-wrap {
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