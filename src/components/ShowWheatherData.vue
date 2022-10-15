<template>
  <table class="table">
    <thead>
        <tr>
            <th>Dátum</th>
            <th>Min. &#8451;</th>
            <th>Max. &#8451;</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(item,index) in wheatherData.time" :key="index">
            <td>{{ item }}</td>
            <td>{{ wheatherData.temperature_2m_min[index] }}</td>
            <td>{{ wheatherData.temperature_2m_max[index] }}</td>
        </tr>
    </tbody>
  </table>
  <!-- {{ wheatherData }} -->
</template>

<script setup>
    import { storeToRefs } from 'pinia'
    import {useWheatherStore} from '../stores/WeatherStore'

    // const {getWheatherData} = useWheatherStore();
    // getWheatherData();

    const {wheatherData} = storeToRefs(useWheatherStore());
    //console.log(wheatherData);
</script>

<style>

</style>