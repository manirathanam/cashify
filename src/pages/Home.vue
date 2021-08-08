<template>
  <div class="text-h3 cashify-heading"><span>Why Cashify...?</span></div>
  
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
          <q-icon name="style" size="56px" />
          <div class="q-mt-sm text-center text-h5">
            Money in bank within 24 hours*
          </div>
          <div class="q-mt-sm text-center">
            Cashify offers the fastest personal loans in Asia – with disbursal in just 24 hours* of your loan getting approved.
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-sm text-center text-h5">
            High loan amount
          </div>
          <div class="q-mt-sm text-center">
            You can get an instant personal loan of up to Rs.3 lakh based on your eligibility.
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" /> 
          <div class="q-mt-sm text-center text-h5">
            Flexible tenor
          </div>
          <div class="q-mt-sm text-center">
            Repay your loan with ease over a flexible repayment tenor ranging up to 60 months.
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-sm text-center text-h5">
            Instant approval in minutes
          </div>
          <div class="q-mt-sm text-center">
            Meet the basic eligibility criteria and receive paperless approval on your online personal loan application within just 5 minutes.
          </div>
        </q-carousel-slide>
      </q-carousel>

  
  
</template>
<script>
import { defineComponent,ref } from 'vue';

export default defineComponent({
  name: 'Home',
  setup(){
     return {
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
})

</script>
<style lang="scss">
.cashify-heading{
  text-decoration: underline 4px solid $secondary;
}
</style>