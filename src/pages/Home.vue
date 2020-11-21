<template>
  <div class="rpi-home-contain">
    <ImageCarousel />

    <div class="rpi-home-wrap">
      <Assist />
        
      <div class="services-wrap">
        <section class="service">
          <div class="service-info">
            <div class="service-img-wrap">
              <img src="/images/distressed-4.jpg" alt="">
            </div>

            <h3>Distressed Property Specialist</h3>

            <p>Our reputable team of distressed property experts specializes in flipping houses to revitalize neighborhoods. We <span class="highlight">PAY IN CASH</span>, make quick offers, and ensure a quick close!</p>

          </div>

          <router-link class="learn-btn" to="/Distressed">Learn More</router-link>

        </section>

        <section class="service">
          <div class="service-info">
            <div class="service-img-wrap">
              <img src="/images/negotiate-1.jpg" alt="">
            </div>

            <h3>Licensed Short Sale Negotiator</h3>

            <p>Our team is equipped with licensed short sale negotiators, debt negotiators, realtors, attorneys and more.</p>

          </div>

          <router-link class="learn-btn" to="/Short-Sale">Learn More</router-link>
        </section>

        <section class="service">
          <div class="service-info">
            <div class="service-img-wrap">
              <img src="/images/check.jpg" alt="">
            </div>

            <h3>Real Estate Investor</h3>

            <p>We invest in Multi-Family Homes, and Apartment Buildings. We <span class="highlight">BUY IN CASH</span>, Pay commissions, and are motivated to buy properties that have value-added opportunities.</p>

          </div>

          <router-link class="learn-btn" to="/Investor">Learn More</router-link>
        </section>

        <section class="service">
          <div class="service-info">
            <div class="service-img-wrap">
              <img src="/images/realtor.jpg" alt="">
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
import ImageCarousel from '../components/ImageCarousel'
import Assist from '../components/AssistBanner'

export default {
  name: 'RpiHome',
  components: {
    ImageCarousel,
    Assist
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

  .rpi-home-wrap {
    max-width: 1250px;

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
            font-size: 1.5rem;
            margin: 15px 0px 10px;
          }
        }


        .learn-btn {
          text-decoration: none;
          font-size: 1.1rem;
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

@media (min-width: 320px) and  (max-width: 767px) {
  .rpi-home-contain {
    .rpi-home-wrap {
      .services-wrap {
        grid-template-columns: 1fr;

        .service {

          .service-info {
            min-height: auto;

            p {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
}

</style>
