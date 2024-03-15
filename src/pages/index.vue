<template >
  <NavBarVue />
  <ContentOneVue />
  <Img />
  <ContentTwoVue />
  <CarouselVue/>
</template>

<script>
import NavBarVue from '@/components/NavBar.vue';
import ContentOneVue from '@/components/ContentOne.vue';
import Img from '@/components/Img'
import ContentTwoVue from '@/components/ContentTwo.vue'
import CarouselVue from '@/components/Carousel.vue';



export default {
  components: {
    NavBarVue,
    ContentOneVue,
    ContentTwoVue,
    Img,
    CarouselVue
  }
}
</script>
<style>

</style>