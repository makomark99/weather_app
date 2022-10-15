<template>
  <button class="btn btn-primary" @click="getGPSPosition">Helymeghatározás</button>

</template>

<script setup>
import {useWheatherStore} from '../stores/WeatherStore.js';

const {updateGPS} = useWheatherStore();

function getGPSPosition(){
  navigator.geolocation.getCurrentPosition(
    (position)=>{
    // console.log(position.coords.latitude);
    // console.log(position.coords.longitude);
      updateGPS(position.coords.latitude,position.coords.longitude)
  },
    (error)=>{ console.log(error);}
  );
}
</script>

<style>

</style>