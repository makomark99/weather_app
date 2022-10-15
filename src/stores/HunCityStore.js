import { defineStore } from "pinia";
import Axios from 'axios'

export const useHunCityStore = defineStore({
  id:'huncity',
  state :() => ({
    allCity: [],
    city:''
  }),

  actions: {
    getAllCity(){
      Axios.get('http://localhost:3000/hun-city?_sort=city')
      .then((resp => {
        //console.log(resp.data.map(x => x.city));
        this.allCity = resp.data.map(x => x.city);
      }))
    },

    getCityByGPS(city){
      return Axios.get(`http://localhost:3000/hun-city?city=${city}`)
      .then(resp => { 
        //console.log(resp.data[0]);
        this.city = resp.data[0];
        return resp.data[0];
      })
    }
  }
});