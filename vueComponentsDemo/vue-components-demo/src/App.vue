<template>
  <div>{{ message }}</div>
  <!--Local component-->
  <ContactUs></ContactUs>
  <ButtonCount></ButtonCount>
  
</template>

<script setup>
import ButtonCount from "./components/ButtonCount.vue"
import ContactUs from "./components/ContactUs.vue"

  const message = "Hello Vue";
     
</script>

<style>

</style>