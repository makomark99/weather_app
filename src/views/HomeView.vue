<template>
  <div class="container">
    <div class="row mb-5">
        <div class="col-12 col-md-3">
            <h4>Időszak</h4>
            <date-form/>
            <detect-g-p-s-position/>
            <select-city/>
        </div>
        <div class="col-12 col-md-9">
            <h4>Adatok</h4>
            <show-wheather-data/>
            <Chart type="line" :data="chartData"/>
        </div>
    </div>
  </div>
 
</template>

<script setup>
  import SelectCity from '../components/SelectCity.vue'
  import DetectGPSPosition from '../components/DetectGPSPosition.vue'
  import ShowWheatherData from '../components/ShowWheatherData.vue';
  import DateForm from '../components/DateForm.vue'

  import Chart from 'primevue/chart';
  import { computed } from '@vue/runtime-core';

  import {useWheatherStore} from '../stores/WeatherStore.js';
  import { storeToRefs } from 'pinia';
  
  const {wheatherData} = storeToRefs( useWheatherStore());

  const chartData = computed(()=>{
    return {
      labels: wheatherData.value.time,
      datasets: [
					{
						label: 'Min. hőmérséklet',
						backgroundColor: '#42A5F5',
						data: wheatherData.value.temperature_2m_min,
            fill:false,
            //tension: .4
					},
					{
						label: 'Max. hőmérséklet',
						backgroundColor: '#9CCC65',
						data: wheatherData.value.temperature_2m_max,
            fill:false,
            //tension: .4
					}
				]
    }
  })
</script>

<style>

</style>