<template>
  <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="300px"
        class="bg-accent text-white shadow-1 rounded-borders q-mt-md"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-icon name="mobile_friendly" size="56px" />
          <div class="q-mt-sm text-center text-h5">
            SmartPhone
          </div>
          <div class="q-mt-sm text-center">
            Save on Smartphones with Cashify Bank Cards & EasyEMI
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="luggage" size="56px" />
          <div class="q-mt-sm text-center text-h5">
            Travel
          </div>
          <div class="q-mt-sm text-center">
            Offers on Travel with Cashify Bank Cards & EasyEMI
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="kitchen" size="56px" /> 
          <div class="q-mt-sm text-center text-h5">
            Electronics
          </div>
          <div class="q-mt-sm text-center">
            Save on Electronics with EasyEMI
          </div>
        </q-carousel-slide>
      </q-carousel>
</template>
<script>
import { defineComponent,ref } from "vue";

export default defineComponent({
  name: "Offers",
  setup(){
     return {
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
});
</script>
