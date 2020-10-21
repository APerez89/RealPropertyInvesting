<template>
  <div class="rpi-home-contain">
    <div class="img-slider">
      <img src="../assets/images/slide-2.jpg" />
    </div>

    <div class="rpi-home-wrap">
        <div class="text-block">
          <h2>Let Us Assist You</h2>
        </div>
        
      <div class="services-wrap">
        <section class="service">
          <div class="service-info">
            <div class="service-img-wrap">
              <img src="../assets/images/distressed-4.jpg" alt="">
            </div>

            <h3>Distressed Property Specialist</h3>

            <p>Our reputable team of distressed property experts specializes in flipping houses to revitalize neighborhoods. We <span class="highlight">PAY IN CASH</span>, make quick offers, and ensure a quick close!</p>

          </div>

          <router-link class="learn-btn" to="/Distressed">Learn More</router-link>

        </section>

        <section class="service">
          <div class="service-info">
            <div class="service-img-wrap">
              <img src="../assets/images/negotiate-1.jpg" alt="">
            </div>

            <h3>Licensed Short Sale Negotiator</h3>

            <p>Our team is equipped with licensed short sale negotiators, debt negotiators, realtors, attorneys and more.</p>

          </div>

          <router-link class="learn-btn" to="/Short-Sale">Learn More</router-link>
        </section>

        <section class="service">
          <div class="service-info">
            <div class="service-img-wrap">
              <img src="../assets/images/check.jpg" alt="">
            </div>

            <h3>Real Estate Investor</h3>

            <p>We invest in Multi-Family Homes, and Apartment Buildings. We <span class="highlight">BUY IN CASH</span>, Pay commissions, and are motivated to buy properties that have value-added opportunities.</p>

          </div>

          <router-link class="learn-btn" to="/Investor">Learn More</router-link>
        </section>

        <section class="service">
          <div class="service-info">
            <div class="service-img-wrap">
              <img src="../assets/images/realtor.jpg" alt="">
            </div>

            <h3>Premier Realtor</h3>

            <p>For years, our premier licensed Realtors have served the New York and Connecticut area. Find out why we are the go-to company for people who want to buy or sell a home</p>

          </div>

          <router-link class="learn-btn" to="/Realtor">Learn More</router-link>
        </section>
      </div>
    </div>

  </div>

</template>

<script>

export default {
  name: 'RpiHome',
  components: {
  },
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
.rpi-home-contain {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .img-slider {
    img {
      width: 100%;
    }
  }

  .rpi-home-wrap {
    max-width: 1250px;

    .text-block {
      width: 100%;
      display: flex;
      justify-content: center;
      color: var(--l-blue);
      margin-bottom: 40px;
      padding: 20px;
      font-size: 2rem;
    }

    .services-wrap {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 50px;

      .service {
        display: flex;
        flex-direction: column;
        align-items: center;

        .service-info {
          width: 80%;
          min-height: 500px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;

          .service-img-wrap {
            img {
              width: 100%;
            }
          }

          .highlight {
            color: var(--l-blue);
          }

          h3 {
            margin: 15px 0px 10px;
          }
        }


        .learn-btn {
          text-decoration: none;
          color: var(--white);
          background-color: var(--l-blue);
          margin-top: 25px;
          padding: 15px 45px;
          border-radius: 50px;

          &:hover {
            background-color: var(--d-blue);
          }
        }
      }
    }
  }
}

</style>
