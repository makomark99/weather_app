<template>
    <select class="form-select mt-5" @change="selectCity" v-model="selectedCity">
      <option >Kérem válasszon</option>
      <option v-for="item in allCity" :key="item">{{ item }}</option>
    </select>

    <!-- {{ allCity }} -->
</template>

<script setup>
  import { storeToRefs } from 'pinia';
  import { ref } from 'vue';
  import {useHunCityStore} from '../stores/HunCityStore.js';
  import {useWheatherStore} from '../stores/WeatherStore.js';

  const {updateGPS} = useWheatherStore();
  
  const selectedCity = ref('Kérem válasszon');

  // const {getAllCity} = useHunCityStore();
  // getAllCity();
  const {getCityByGPS} = useHunCityStore();

  const { allCity} = storeToRefs(useHunCityStore());

  function selectCity(){
    console.log(selectedCity.value);
    getCityByGPS(selectedCity.value)
    .then(resp => {
      //console.log(resp);
      updateGPS(resp.lat.replace(',','.'), resp.lng.replace(',','.'));
    });
  }
</script>

<style>

</style>