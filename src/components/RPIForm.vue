<template>
  <div class="form-contain">
    <div class="form-wrap">
      <form action="POST" data-netlify="true">
        <section class="personal-details">
          <h3>Personal Details</h3>

          <div class="personal-info">
            <!-- ** Name ** -->
            <div class="name form-section">
              <label for="full-name">Full Name</label>
              <input type="text" name="full-name" placeholder="John Doe" v-model.trim="$v.name.$model" :class="{ 'error': status($v.name)}">

              <p class="error-text" v-if="$v.name.$error && !$v.name.required">Please fill out your full name</p>
              <p class="error-text" v-if="$v.name.$error && !$v.name.minLength">Must have at least {{ $v.name.$params.minLength.min }} letters</p>
            </div>

            <!-- ** Email ** -->
            <div class="email form-section">
              <label for="email">Email</label>
              <input type="email" name="email" placeholder="example@email.com" v-model.trim="$v.email.$model" :class="{ 'error': status($v.email)}">

              <p class="error-text" v-if="$v.email.$error && !$v.email.required">Please enter your email</p>
              <p class="error-text" v-if="$v.email.$error && !$v.email.email">Please enter a valid email</p>
            </div>

            <div class="phone form-section">
            <!-- ** Phone ** -->
              <label for="phone">Phone Number</label>
              <input type="tel" name="phone" placeholder="(123) 456-7890" maxlength="14" @input="phoneNumber" v-model.trim="$v.phone.$model" :class="{ 'error': status($v.phone)}">

              <p class="error-text" v-if="$v.phone.$error && !$v.phone.required">Please enter your phone</p>
              <p class="error-text" v-if="$v.phone.$error && !$v.phone.minLength">Please enter a valid phone number</p>
            </div>

            <div class="address form-section">
            <!-- ** Address ** -->
              <label for="address">Address</label>
              <input type="text" name="address" placeholder="12 Elm Street" v-model.trim="$v.address.$model" :class="{ 'error': status($v.address)}">

              <p class="error-text" v-if="$v.address.$error && !$v.address.required">Please enter your address</p>
            </div>

            <div class="city form-section">
            <!-- ** City ** -->
              <label for="city">City</label>
              <input type="text" name="city" placeholder="New York" v-model.trim="$v.city.$model" :class="{ 'error': status($v.city)}">

              <p class="error-text" v-if="$v.city.$error && !$v.city.required">Please enter your city</p>
            </div>

            <div class="state form-section">
              <!-- ** State ** -->
              <label for="state">State</label>
              <select v-model.trim="$v.state.$model" name="select-state" :class="{ 'error': status($v.state)}">
                <option value="" disabled selected>Select a state</option>
                <option :value="state" v-for="state in states" :key="state" name="state">{{ state }}</option>
              </select>

              <p class="error-text" v-if="$v.state.$error && !$v.state.required">Please select a state</p>
            </div>
          </div>
        </section>

        <section class="mortgage-details" v-if="isShortSale()">
          <div class="mortgage-info">
            <div class="form-section">
              <!-- ** Mortgage ** -->
              <label for="mortgage">Mortgage</label>
              <input type="text" name="mortgage" v-model="mortgage" placeholder="Amount Owed ($)">
            </div>
          </div>
        </section>

        <section class="message-details">
          <h3>Additional Information</h3>
          
          <div class="message-info">
            <div class="call form-section">
              <!-- ** Call ** -->
              <label for="call">Best time to call</label>
              <input type="text" name="call" placeholder="3pm" v-model="callTime">
            </div>
            <div class="description form-section">
              <!-- ** Description ** -->
              <textarea textarea rows="10" cols="30" name="description" placeholder="Brief description" v-model.trim="$v.description.$model" :class="{ 'error': status($v.description)}"></textarea>

              <p class="error-text" v-if="$v.description.$error && !$v.description.required">Please add a brief description</p>
            </div>
            <div class="repairs form-section" v-if="isDistressed()">
              <!-- ** Repairs ** -->
              <textarea rows="10" cols="30" name="distressed" placeholder="Repairs Needed" v-model="repairs"></textarea>
            </div>
          </div>
        </section>

        <section class="radio-details" v-if="isShortSale()">
          <h3>Other Liens</h3>

          <div class="radio-options">
            <div class="home-wrap">
              <input type="radio" name="lien" id="home-lien" value="home" checked>
              <label for="home-lien" name="home">Home</label>
            </div>
            <div class="condo-wrap">
              <input type="radio" name="lien" id="condo-lien" value="condo">
              <label for="condo-lien" name="condo">Condo</label>
            </div>
          </div>
        </section>

        <button class="form-btn" name="submit" :class="{ 'button-err': $v.$error}" type="submit" :disabled="submitStatus === 'PENDING'">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
import states from '../assets/states'
import { required, minLength, email } from 'vuelidate/lib/validators'

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
      state: '',
      callTime: '',
      mortgage: '',
      description: '',
      repairs: '',
      submitStatus: null
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    email: {
      required,
      email
    },
    phone: {
      required,
      minLength: minLength(10)
    },
    address: {
      required
    },
    city: {
      required
    },
    state: {
      required
    },
    description: {
      required
    }
  },
  methods: {
    resetData() {
      this.name = ''
      this.email = ''
      this.phone = ''
      this.address = ''
      this.city = ''
      this.state = ''
      this.callTime = ''
      this.mortgage = ''
      this.description = ''
      this.repairs = ''
    },
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
      return typeof validation != "undefined" ? validation.$error : false;
    },
    submit() {
      this.$v.$touch();
      if(this.$v.$pending || this.$v.$error) return;

      this.$v.$reset();
      this.resetData();
    },
    phoneNumber() {
      let pNumber = this.$v.phone.$model;
      let regPhone = pNumber.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      return this.phone = !regPhone[2] ? regPhone[1] : '(' + regPhone[1] + ') ' + regPhone[2] + (regPhone[3] ? '-' + regPhone[3] : '');
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
          margin-top: 10px;
          margin-bottom: 30px;
        }
      }

      .mortgage-info {
        width: 30%;
        margin-bottom: 30px;
      }

      .message-details {
        .message-info {
          display: grid;
          grid-gap: 20px;
          margin-top: 10px;
          margin-bottom: 30px;

          input {
            width: 30%;
          }
        }
      }

      .radio-details {
        .radio-options {
          display: flex;
          margin-top: 10px;
          margin-bottom: 30px;

          .home-wrap {
            margin-right: 15px;

            label {
              margin-left: 10px;
            }
          }

          .condo-wrap {
            label {
              margin-left: 10px;
            }
          }
        }
      }

      .form-section {
        display: flex;
        flex-direction: column;

        label {
          margin-bottom: 5px;
        }

        input, textarea, select {
          padding: 13px;
          background-color: rgba(0,0,0,0);
          border: 1px solid var(--d-gray);

          &:focus {
            outline: none;
            border: 1px solid var(--l-blue);
          }
        }

        select {
          cursor: pointer;
        }

        textarea {
          font-family: 'Poppins', sans-serif;
          resize: none;
        }

        .error-text {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-top: 5px;
          padding: 5px;
          color: var(--error);
          animation: showError 0.2s ease alternate;
          font-size: 0.95rem;
        }

        .error {
          border: 1px solid var(--error);
          color: var(--error);

          &:focus {
            border: 1px solid var(--error);
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
        transition: all 0.2s ease-in-out;

        &:hover {
          background-color: var(--d-blue);
        }

        &:focus {
          outline: none;
        }
      }

      .button-err {
        background-color: var(--error);
        animation: errorButton 0.2s ease-in-out;
        cursor: not-allowed;

        &:hover {
          background-color: var(--error);
        }
      }
    }
  }
}

@keyframes showError {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes errorButton {
  0% {
    transform: translateX(-15px);
  }
  25% {
    transform: translateX(15px);
  }
  50% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0px);
  }
}

</style>