import { defineStore } from "pinia";
import Axios from 'axios'

export const useWheatherStore = defineStore({
    id:'wheather',
    state:()=>({
        wheatherData : [],
        startDate:'',
        endDate:'',
        latitude:'47.4984',
        longitude:'19.0408'
    }),
    getters: {},
    actions: {
        getWheatherData(){
            Axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${this.latitude}&longitude=${this.longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin&start_date=${this.startDate}&end_date=${this.endDate}`)
            .then(resp =>{
                this.wheatherData = resp.data.daily;
                //console.log(resp.data.daily);
            })
        },

        updateDates(startDate,endDate){
            this.startDate = startDate;
            this.endDate = endDate;
            this.getWheatherData();
        },

        updateGPS(latitude,longitude){  
            this.latitude = latitude;
            this.longitude = longitude;
            this.getWheatherData();
        }
    }
});