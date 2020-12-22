<template>
  <div class="footer-contain">
    <div class="footer-wrap">

      <div class="footer-info">

        <div class="connect-wrap">
          <h3>Connect</h3>

          <div class="connect-info">
            <p>Real Property Investing</p>

            <div class="pobox">
              <p>317 West Avenue</p>
              <p>Suite 113303</p>
              <p>Stamford, CT 06911</p>
            </div>

            <p class="phone-number">(203) 539-1051</p>

            <!-- <div class="email">
              <a href="mailto:realpropertyinvesting101@gmail.com?subject=Important!&body=Hi" target="_blank" rel="noopener noreferrer">realpropertyinvesting101@gmail.com</a>
            </div> -->

          </div>

        </div>

        <span class="divider"></span>

        <div class="social-wrap">
          <h3>Follow</h3>

          <div class="icons">
            <a class="icon-tag facebook" href="https://www.facebook.com/REAL-Property-Investing-109022127574705/" target="_blank">
              <font-awesome-icon class="icon fb" :icon="['fab', 'facebook-f']" />
            </a>

            <a class="icon-tag instagram" href="https://www.instagram.com/realpropertyinvestingllc/" target="_blank">
              <font-awesome-icon class="icon ig" :icon="['fab', 'instagram']" />
            </a>
          </div>
        </div>

      </div>

      <p>Copyright &copy; 2020 Real Property Investing. All Rights Reserved.</p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'NewFooter'
}
</script>

<style lang="scss" scoped>
.footer-contain {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  padding: 40px;
  background-color: var(--d-gray);

  .footer-wrap {
    width: 100%;
    max-width: 1250px;
    color: var(--white);

    .footer-info {
      display: flex;
      align-items: center;
      margin-bottom: 35px;

      h3 {
        font-size: 1.3rem;
        font-variant: small-caps;
        opacity: 0.5;
        margin-bottom: 20px;
      }
      .connect-wrap {
        display: flex;
        flex-direction: column;
        align-self: flex-start;

        .connect-info {
          .email {
            a {
              color: var(--white);
              text-decoration: none;
              transition: all 0.2s ease-in-out;

              &:hover {
                color: var(--l-blue);
              }
            }
          }

          .pobox {
            p {
              line-height: 22px;
            }
          }

        }
      }

      .divider {
        width: 1px;
        height: 90px;
        background-color: var(--white);
        opacity: 0.1;
        margin: 0px 50px;
      }

      .social-wrap {
        display: flex;
        flex-direction: column;
        align-self: flex-start;

        .icons {
          .icon-tag {
            font-size: 1.3rem;
            color: var(--white);
            transition: all 0.2s ease-in-out;

            &:hover {
              color: var(--l-blue);
            }
          }

          .facebook {
            margin-right: 10px;
          }
        }
      }
    }


    p {
      font-size: 0.9rem;
    }
  }
}

@media (min-width: 320px) and (max-width: 767px) {
  .footer-contain {
    .footer-wrap {
      .footer-info {
        flex-direction: column;

        .divider {
          width: 100%;
          height: 1px;
          margin: 30px 0px;
        }

        .email {
          a {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
}
</style>