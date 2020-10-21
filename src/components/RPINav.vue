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
            <span>
              Services
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
    margin: 0 auto;

    .logo-wrap {
      img {
        width: 100%;
        max-width: 175px;
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

          &:hover {
            color: var(--l-blue);
            border-bottom: 2px solid var(--l-blue);
          }
        }

        .link {
          text-decoration: none;
          color: var(--d-blue);
        }

        .dropdown {
          position: relative;

          .drop-items {
            display: none;
          }

          &:hover {
            .drop-items {
              display: flex;
              flex-direction: column;
              position: absolute;
              background-color: var(--white);
              padding: 10px 15px;
            }
          }
        }
      }

      .contact-card {
        width: 35px;
        margin: 10px 15px;
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