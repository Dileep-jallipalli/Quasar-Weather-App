<template>
  <q-page class="flex column">
    <div class="col q-pt-lg q-px-md">
      <q-input
        v-model="search"
        @click="getweatherBySearch"
        placeholder="search"
        dark
        borderless
      >
        <template v-slot:before>
          <q-icon @click="getLocation" name="my_location" />
        </template>

        <template v-slot:append>
          <q-btn icon="search" @click="getWeatherBySearch" dense flat round />
        </template>
      </q-input>
    </div>
    <template v-if="weatherData">
      <div class="col text-center text-white">
        <div class="text-h4 text-weight-light">{{ weatherData.name }}</div>
        <div class="text-h6 text-weight-light">{{ weatherData.weather[0].main }}</div>
        <div class="text-h1 text-weight-thin q-my-lg relative-position">
          <span>{{ Math.round(weatherData.main.temp) }}</span>
          <span class="text-h4 relative-position degree">&deg;C</span>
        </div>
      </div>
      <div class="col text-center">
        <img
          :src="`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`"
        />
      </div>
    </template>
    <template v-else>
      <div class="col column text-center text-white">
        <div class="col text-h2 text-weight-thin">Quasar<br />Weather</div>
        <q-btn @click="getLocation" class="col" flat>
          <q-icon left size="3em" name="my_location" />
          <div>Find my location</div>
        </q-btn>
      </div>
    </template>
    <div class="col skyline"></div>
  </q-page>
</template>

<script>
import axios from "axios";
export default {
  name: "PageIndex",
  data() {
    return {
      search: "",
      weatherData: null,
      lat: null,
      lon: null,
      apiUrl: "api.openweathermap.org/data/2.5/weather?",
      apiKey: "19900fed5552f0ae45914991aa5cb3ad",
    };
  },
  methods: {
    getLocation() {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("position", position);
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
        this.getWeatherByCoords();
      });
    },
    getWeatherByCoords() {
      this.$axios(
        `${this.apiUrl}lat=${this.lat}&lon=${this.lon}&appid=${this.apiKey}`
      ).then((response) => {
        console.log("response", response);
        this.weatherData = response.data;
      });
    },
  },
};
</script>

<style lang="sass">
.q-page
  background: linear-gradient(to right, #44a08d, #093637)
.degree
  top: -44px
.skyline
  flex: 0 0 100px
  background: url(../../public/icons/vector.png)
  background-size: contain
  background-position: center bottom
</style>
