<template>
  <q-page class="flex column">
    <div class="col  q-pt-lg q-px-md">
       <q-input 
       v-model="text" 
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
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

<style lang="sass">
  .q-page 
    background: linear-gradient(to right, #44a08d, #093637)
  
</style>