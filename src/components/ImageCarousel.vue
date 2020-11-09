<template>
  <div class="carousel-contain">
    <div class="carousel-wrap">
      <div class="dark-bkg">
        <div class="text-box"
          v-for="(text, idx) in images"
          :key="idx"
          v-show="visibleSlide === idx"
        >
          <h1>{{ text.txt }}</h1>
        </div>
      </div>
      <div 
        class="carousel-slide"
        v-for="(image, idx) in images"
        :key="idx"
        v-show="visibleSlide === idx"
        v-bind:style="`backgroundImage: url(${image.img});`"
        >
      </div>

    </div>
    <button class="prev" @click="prev">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
      </svg>
    </button>
    <button class="next" @click="next">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      images: [
        {
          img: '/images/slide-3.png',
          txt: 'Fix & Flip Rehabber'
        },
        {
          img: '/images/slide-1.jpg',
          txt: 'Premier Realtor'
        },
        {
          img: '/images/slide-2.jpg',
          txt: 'Short Sale Negotiator'
        },
        {
          img: '/images/slide-4.jpg',
          txt: 'Real Estate Investor'
        },
      ],
      visibleSlide: 0
    }
  },
  computed: {},
  mounted() {
    // set timer on next() function
    // setInterval(() => {
    //   this.next()
    // }, 4000);
  },
  methods: {
    // Click Prev button to move count down to the previous index
    prev() {
      if(this.visibleSlide <= 0) {
        this.visibleSlide = this.images.length - 1;
      } else {
        this.visibleSlide--;
      }
    },
    // Click Next button to move count up to the next index
    next() {
      if(this.visibleSlide >= this.images.length - 1) {
        this.visibleSlide = 0
      } else {
        this.visibleSlide++;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel-contain {
  width: 100%;
  height: calc(100vh - 250px);
  overflow: hidden;

  .carousel-wrap {
    position: relative;

    .dark-bkg {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      background-color: rgba(0,0,0,0.3);
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      .text-box {
        color: var(--white);
        font-size: 1.6rem;
        text-shadow: -2px 2px 10px rgba(0,0,0,0.3);
        animation: fadeIn 1.5s ease-in;
        letter-spacing: 3px;
        border-bottom: 4px solid var(--white);

        h1 {
          padding-bottom: 5px;
        }
      }
    }
    .carousel-slide {
      height: calc(100vh - 250px);
      background-size: cover;
      background-position: 50%;
      background-repeat: no-repeat;
    }
  }
  button {
    width: 60px;
    border: none;
    background-color: rgba(0,0,0,0);
    color: var(--white);
    position: absolute;
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.2s ease-in-out;

    &:focus, &:active {
      outline: none;
    }

    &:hover {
      background-color: rgba(0,0,0,0.3);
    }
  }
  .next {
    top: calc(50% - 20px);
    right: calc(0px + 15px);
  }
  .prev {
    top: calc(50% - 20px);
    left: calc(0px + 15px);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

</style>