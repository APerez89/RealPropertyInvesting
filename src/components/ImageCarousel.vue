<template>
  <div class="carousel-contain">
    <div class="carousel-wrap">
      <div 
        class="carousel-slide"
        v-for="(image, idx) in images"
        :index="idx"
        :key="image"
        v-show="visibleSlide === idx"
        >
        <img :src="image" />
      </div>

    </div>
    <button class="prev">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
      </svg>
    </button>
    <button class="next">
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
        '/img/slide-1.1d97442e.jpg',
        '/img/slide-2.c1f2a9f3.jpg',
        '/img/slide-3.95f78aec.png',
        '/img/slide-4.133eb58e.jpg'
      ],
      visibleSlide: 0
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
    .carousel-slide {

      img {
        width: 100%;
      }
    }
  }
  button {
    width: 60px;
    border: none;
    background-color: rgba(0,0,0,0);
    color: var(--d-gray);
    position: absolute;
    cursor: pointer;

    &:focus, &:active {
      outline: none;
    }
  }
  .next {
    top: calc(50% - 20px);
    right: 0;
  }
  .prev {
    top: calc(50% - 20px);
    left: 0;
  }
}

</style>