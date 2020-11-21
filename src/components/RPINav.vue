<template>
  <div class="nav-contain">
    <div class="nav-wrap">
      <div class="logo-wrap">
        <router-link to="/">
          <img src="/images/logo.png" alt="Real Property Investing Logo">
        </router-link>
      </div>

      <div class="hamburger" @click="navOpen = !navOpen">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>

      <div class="nav-items" :class="[navOpen ? 'mobile-nav-open' : 'mobile-nav-closed']">

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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      navOpen: false
    }
  }
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

    .hamburger {
      display: none;
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
          width: 1px;
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

@media (min-width: 320px) and (max-width: 767px) {
  .nav-contain {
    .nav-wrap {
      position: relative;
      overflow: hidden;

      .logo-wrap {
        img {
          width: 100%;
          max-width: 125px;
        }
      }
      .hamburger {
        width: 35px;
        display: block;
        position: absolute;
        right: 0;
        z-index: 10;
      }
      .nav-items {
        flex-direction: column;
        padding: 80px 10px 0px;
        background-color: var(--white);
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 9;
        transition: all 0.3s ease-in-out;

        ul {
          align-items: start;
          flex-direction: column;
        }

        .social-wrap {
          flex-direction: column;

          &::before {
            width: 100%;
            height: 1px;
            margin: 10px 0px;
          }

          .icon-tag {
            padding: 10px 25px;
          }
        }
      }
      .mobile-nav-open {
        transform: translateX(0);
      }
      .mobile-nav-closed {
        transform: translateX(100%);
      }
    }
  }
}
</style>