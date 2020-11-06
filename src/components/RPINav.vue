<template>
  <div class="nav-contain">
    <div class="nav-wrap">
      <div class="logo-wrap">
        <router-link to="/">
          <img src="/images/logo.png" alt="Real Property Investing Logo">
        </router-link>
      </div>

      <div class="nav-items">
        <ul>
          <li><router-link class="link" to="/">Home</router-link></li>
          <li><router-link class="link" to="/About">About</router-link></li>
          <li class="dropdown">
            <span class="drop-text">
              Services 
              <span class="down-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </span>
            </span>

            <div class="drop-items">
              <router-link class="link" to="/Distressed">Distressed Property Expert</router-link>
              <router-link class="link" to="/Short-Sale">Short Sale Negotiator</router-link>
              <router-link class="link" to="/Investor">Real Estate Investor</router-link>
              <router-link class="link" to="/Realtor">Premier Realtor</router-link>
            </div>
          </li>
          <li><router-link class="link" to="/Contact">Contact Us</router-link></li>
        </ul>
        <div class="social-wrap">
          <a class="icon-tag" href="https://www.facebook.com/REAL-Property-Investing-109022127574705/" target="_blank">
            <font-awesome-icon class="icon fb" :icon="['fab', 'facebook-f']" />
          </a>
          <a class="icon-tag" href="https://www.instagram.com/realpropertyinvestingllc/" target="_blank">
            <font-awesome-icon class="icon ig" :icon="['fab', 'instagram']" />
          </a>
        </div>
        <!-- <div class="contact-card">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
          </svg>

          <div class="contact-card-info">
            <div class="cc-phone cc-info-wrapper">
              <span class="phone-icon cc-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </span>
              <p>(203)539-1051</p>
            </div>
            <div class="cc-email cc-info-wrapper">
              <span class="email-icon cc-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clip-rule="evenodd" />
                </svg>
              </span>
              <p>
                <a href="">realpropertyinvesting101@gmail.com</a>
              </p>
            </div>
            <div class="cc-pobox cc-info-wrapper">
              <span class="pobox-icon cc-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </span>
              <p>P.O. Box 113303</p>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="scss" scoped>
.nav-contain {
  width: 100%;
  background-color: var(--white);
  box-shadow: 0px 3px 8px rgba(0,0,0,0.2);
  z-index: 10;

  .nav-wrap {
    max-width: 1250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    .logo-wrap {
      img {
        width: 100%;
        max-width: 195px;
      }
    }
    
    .nav-items {
      display: flex;
      color: var(--l-blue);
      font-weight: 600;
      letter-spacing: 2px;

      ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        list-style: none;
        padding: 0px;

        li {
          height: 50px;
          padding: 10px 25px;
          font-size: 1.3rem;
          cursor: pointer;
          transform: translateZ(0);
          backface-visibility: hidden;

          &::before {
            content: "";
            position: absolute;
            z-index: -1;
            left: 0;
            right: 100%;
            bottom: 0;
            background: #2980b9;
            height: 2px;
            transition-property: right;
            transition-duration: 0.3s;
            transition-timing-function: ease-out;

          }

          &:hover::before {
            right: 0;
          }
        }

        .link {
          text-decoration: none;
          color: var(--l-blue);
        }

        .dropdown {
          position: relative;
          z-index: 10;

          .drop-text {
            display: flex;
            justify-content: center;

            .down-arrow {
              width: 25px;
              margin-left: 5px;
            }
          }

          .drop-items {
            display: none;
          }

          &:hover {
            .drop-items {
              width: max-content;
              display: flex;
              flex-direction: column;
              position: absolute;
              background-color: var(--white);
              box-shadow: 0px 3px 5px rgba(0,0,0,0.2);
              padding: 10px 15px;
              top: 105%;
              font-weight: 500;
              letter-spacing: 0;
              left: 0;

              .link {
                padding: 10px 0px;

                &:hover {
                  color: var(--d-blue);
                }
              }
            }
          }
        }
      }

      .social-wrap {
        display: flex;

        &::before {
          content: '';
          width: 2px;
          height: 55px;
          background-color: var(--l-blue);
          margin: 0px 15px;
        }

        .icon-tag {
          color: var(--l-blue);
          font-size: 1.3rem;
          padding: 15px 8px;
          transition: all 0.2s ease;

          &:hover {
            color: var(--d-blue);
          }
        }
      }

      .contact-card {
        width: 35px;
        margin: 10px 0 10px 25px;
        transition: all 0.3s ease;
        position: relative;

        &:hover {
          color: var(--l-blue);
        }

        .contact-card-info {
          display: none;
        }

        &:hover {
          .contact-card-info {
            width: max-content;
            display: flex;
            flex-direction: column;
            position: absolute;
            right: 0;
            background-color: var(--white);
            box-shadow: 0px 3px 5px rgba(0,0,0,0.2);
            padding: 10px 15px;
          }
        }

        .cc-info-wrapper {
          display: flex;
          align-items: center;
          margin: 10px 0px;

          a {
            color: var(--l-blue);
            text-decoration: none;
          }

          .cc-icon {
            margin-right: 10px;
            svg {
              width: 20px;
            }
          }
        }

      }

    }
  }

}
</style>