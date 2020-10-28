<template>
  <div class="nav-contain">
    <div class="nav-wrap">
      <div class="logo-wrap">
        <router-link to="/">
          <img src="../assets/logo.png" alt="Real Property Investing Logo">
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
        <div class="contact-card">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
          </svg>
        </div>
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
      color: var(--d-blue);

      ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        list-style: none;
        padding: 0px;

        li {
          height: 50px;
          padding: 10px 25px;
          font-size: 1.2rem;
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
          color: var(--d-blue);
        }

        .dropdown {
          position: relative;

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
              left: 0;

              .link {
                padding: 10px 0px;

                &:hover {
                  color: var(--l-blue);
                }
              }
            }
          }
        }
      }

      .contact-card {
        width: 35px;
        margin: 10px 0 10px 25px;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          color: var(--l-blue);
        }
      }
    }
  }

}
</style>