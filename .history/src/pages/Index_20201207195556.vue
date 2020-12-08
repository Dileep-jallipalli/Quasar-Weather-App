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
      <div class="text-h1 text-weight-thin q-my-lg">
        <span>8</span>
        <span>&deg</span>;
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data(){
    return {
      search: ''
    }
  }
}
</script>

<style lang="sass">
  .q-page 
    background: linear-gradient(to right, #44a08d, #093637)
  
</style>