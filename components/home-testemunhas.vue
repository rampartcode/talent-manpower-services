<template>
  <Carousel :items-to-show="2.5" :wrap-around="true">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'

// export default defineComponent({
//   name: 'WrapAround',
//   components: {
//     Carousel,
//     Slide,
//     Navigation,
//   },
// })
</script>
