<template>
  <div class="form-contain">
    <div class="form-wrap">
      <form @submit.prevent="submit">
        <section class="personal-details">
          <h3>Personal Details</h3>

          <div class="personal-info">
            <!-- ** Name ** -->
            <div class="name form-section">
              <label for="full-name">Full Name</label>
              <input type="text" name="full-name" placeholder="John Doe" v-model.trim="$v.name.$model" :class="{ 'error': $v.name.$error}">

              <div v-if="$v.name.$error" class="error-message">
                <p v-if="!$v.name.required">Please fill out your full name.</p>
                <p v-if="!$v.name.minLength">Must have at least {{ $v.name.$params.minLength.min }} letters.</p>
                <span class="error-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>

            <!-- ** Email ** -->
            <div class="email form-section">
              <label for="email">Email</label>
              <input type="email" name="email" placeholder="distressed@email.com">
            </div>

            <div class="phone form-section">
            <!-- ** Phone ** -->
              <label for="phone">Phone Number</label>
              <input type="tele" name="phone" placeholder="123-456-7890" maxlength="10">
            </div>

            <div class="address form-section">
            <!-- ** Address ** -->
              <label for="address">Address</label>
              <input type="text" name="address" placeholder="12 Elm Street">
            </div>

            <div class="city form-section">
            <!-- ** City ** -->
              <label for="city">City</label>
              <input type="text" name="city" placeholder="New York">
            </div>

            <div class="state form-section">
              <!-- ** State ** -->
              <label for="state">State</label>
              <select>
                <option value="" disabled selected>Select a state</option>
                <option :value="state" v-for="state in states" :key="state">{{ state }}</option>
              </select>
            </div>
          </div>
        </section>

        <section class="mortgage-details" v-if="isShortSale()">
          <div class="form-section">
            <!-- ** Mortgage ** -->
            <label for="mortgage">Mortgage</label>
            <input type="text" name="mortgage" placeholder="Amount Owed">
          </div>
        </section>

        <section class="message-details">
          <h3>Additional Information</h3>
          <div class="message-info">
            <div class="call form-section">
              <!-- ** Call ** -->
              <label for="call"></label>
              <input type="text" name="call" placeholder="Best time to call">
            </div>
            <div class="description form-section">
              <!-- ** Description ** -->
              <textarea textarea rows="10" cols="30" placeholder="Brief description"></textarea>
            </div>
            <div class="repairs form-section" v-if="isDistressed()">
              <!-- ** Repairs ** -->
              <textarea rows="10" cols="30" placeholder="Repairs Needed"></textarea>
            </div>
          </div>
        </section>

        <section class="radio" v-if="isShortSale()">
          <label for="liens">Other Liens</label>
          <input type="radio" name="home-liens">
          <input type="radio" name="condo-liens">
        </section>

        <button class="form-btn" type="submit" :disabled="submitStatus === 'PENDING'">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
import states from '../assets/states'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'Form',
  data() {
    return {
      states,
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      description: '',
      submitStatus: null
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    }
  },
  methods: {
    isShortSale() {
      return this.$route.name === 'short-sale'
    },
    isDistressed() {
      return this.$route.name === 'distressed'
    },
    isInvestor() {
      return this.$route.name === 'investor'
    },
    isRealtor() {
      return this.$route.name === 'realtor'
    },
    isContact() {
      return this.$route.name === 'contact'
    },
    status(validation) {
      return {
        error: validation.$error
      }
    },
    submit() {
      if(this.$v.$invalid) {
        console.log('error')
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = "PENDING"
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form-contain {
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
        .error {
          border: 1px solid red;

          &:focus {
            border: 1px solid red;
          }
        }
        .error-icon {
          width: 25px;
          color: red;
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
.error {
  border-color: red;
  background: #FDD;
}

.error:focus {
  outline-color: #F99;
}

</style>