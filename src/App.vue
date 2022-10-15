<script setup>
  import AppHeader from './components/AppHeader.vue'
  import HomeView from './views/HomeView.vue'

  import {useHunCityStore} from './stores/HunCityStore.js';
  import { storeToRefs } from 'pinia';

  const {city} = storeToRefs(useHunCityStore());

  const {getAllCity} = useHunCityStore();
  getAllCity();

  const cityBanner = () => {
    if (city.value.city) {
      return city.value.city;
    } else{
      return 'Budapest';
    }
  }
</script>

<template>
  <app-header :city="cityBanner()"/>
  <home-view/>
</template>

<style scoped>

</style>
