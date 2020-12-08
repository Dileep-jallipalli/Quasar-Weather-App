<template>
  <q-page class="flex column">
    <div class="col  q-pt-lg q-px-md">
       <q-input 
       v-model="search" 
       placeholder="search"
       dark
       borderless
       >
        <template v-slot:before>
          <q-icon name="my_location"/>
        </template>

        <template v-slot:append>
          <q-btn round dense flat icon="add" />
        </template>
      </q-input>
    </div>
    <div class="col text-center text-white">
      <div class="text-h4 text-weight-light">
        Manchester
      </div>
      <div class="text-h6 text-weight-light">
        Rain
      </div>
      <div class="text-h1 text-weight-thin q-my-lg relative-position">
        <span>8</span> 
        <span class="text-h4 relative-position degree">&deg;</span>
      </div>
    </div>
    <div class="col text-center">
      <img src="https://www.fillmurray.com/100/100" alt="Bill">
    </div>
    <div class="col skyline">

    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data(){
    return {
      search: '',
      weatherData: null
    }
  }
}
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