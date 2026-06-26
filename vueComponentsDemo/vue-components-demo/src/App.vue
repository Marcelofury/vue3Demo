<template>
  <div class="container">
  <div>{{ message }}</div>
  
  <ContactUs></ContactUs>
  
  </div>
   
</template>

<script setup>
import ButtonCount from "./components/ButtonCount.vue"
import ContactUs from "./components/ContactUs.vue"

  const message = "Hello Vue";
     
</script>

<style>

</style>