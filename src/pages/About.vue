<template>
  <div class="about-contain">
    <div class="about-wrap">
      <div class="content-wrap">
        <div class="img-wrap">
          <img src="/images/about.jpg" alt="Founder of Real Property Investing">
        </div>
        <div></div>
        <div class="content">
          <h2>About Dominique</h2>
          <p>Founder, Real Property Investing</p> <br />
          <p>Dominique was born and raised in Stamford, CT. <br />For many years, she devoted herself to her career in Accounting. Today, Dominique is a Licensed Certified Property Expert and Debt Negotiator.</p> <br />
          <p>In 2012, Dominique decided to cross over into the real estate sector. She worked part time for sophisticated investors, in exchange for mentorship. Years later, she worked with the Higgins Group, as well as leading members of SoCT Real Estate Investing Association, where she worked alongside some of the most sophisticated investors in the Country.</p> <br />
          <p>In 2020, Dominique became the Founder of Real Property Investing, the leading real estate investment firm in Fairfield County. Dominique has combined a unique force of dedicated specialists, who raise the standard for all clients. Through combined efforts, the Real Property Investing Team offers more skill, creativity and experience in buying, selling, rehabbing, negotiating, and investing in Real Estate.</p> <br />
          <p>According to Dominique, the success of Real Property Investing is measured everyday by the satisfaction of its clients, the number of buyers who are exposed to their properties, educating themselves daily, networking and marketing at the highest level, being creative and of course by the number of deals they close.</p> <br />
          <p>Aside from Real Estate, Dominique is a devoted mother, mentor, educator and community activist. Dominique credits her upbeat spirit to her love for life and amazing family.</p>
        </div>
      </div>
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
  padding: 15px;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 8px;
  }

  .about-wrap {
    width: 100%;
    max-width: 1250px;

    .content-wrap {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;

      .img-wrap {
        width: 40%;
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

@media (min-width: 320px) and (max-width: 767px) {
  .about-contain {
    padding: 10px;

    .about-wrap {
      .content-wrap {
        flex-direction: column;
        align-items: center;

        .img-wrap {
          width: 90%;
        }

        .content {
          width: 100%;
        }
      }
    }
  }
}

</style>