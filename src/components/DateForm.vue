<template>
	<div class="form-floating mb-3 mt-3">
		<input
			type="date"
			class="form-control"
			id="startDate"
			v-model="formData.startDate"
			:max="maxDate"
		/>
		<label for="startDate">Kezdés</label>
	</div>

	<div class="form-floating mb-3">
		<input
			type="date"
			class="form-control"
			id="endDate"
			v-model="formData.endDate"
			:max="maxDate"
		/>
		<label for="endDate">Vége</label>
	</div>

	<div class="mb-3">
		<button class="btn btn-primary" @click="showWeather">
			Megjelenítés
		</button>
	</div>

	<div class="alert alert-danger" role="alert" v-if="errorMessage != ''">
		{{ errorMessage }}
	</div>
</template>

<script setup>
import { ref } from "vue";
import { useWheatherStore } from "../stores/WeatherStore.js";

const { updateDates } = useWheatherStore();
const today = new Date();
//  console.log(today.toISOString().slice(0,10));
//  console.log( new Date(today.setDate(today.getDate()+7)).toISOString().slice(0,10) )
const today7 = new Date(today.setDate(today.getDate() + 7))
	.toISOString()
	.slice(0, 10);
const formData = ref({
	startDate: new Date().toISOString().slice(0, 10),
	endDate: today7,
});
const maxDate = ref(today7);
const errorMessage = ref('');

function showWeather() {
	if (validateForm()) return;
	updateDates(formData.value.startDate, formData.value.endDate);
}

function validateForm() {
  errorMessage.value='';
  if (formData.value.startDate > formData.value.endDate || 
			formData.value.startDate =='' ||
      formData.value.endDate =='' ){
        errorMessage.value='Hibás dátumok!';
    return true;
  }
  return false;
}

updateDates(formData.value.startDate, formData.value.endDate);
</script>

<style>
</style>