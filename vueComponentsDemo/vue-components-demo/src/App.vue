<template>
  <div>{{ message }}</div>
  <!--Local component-->
  <contact-us></contact-us>
  <ButtonCount></ButtonCount>
  
</template>

<script setup>
import ButtonCount from "./components/ButtonCount.vue"

  const message = "Hello Vue";
     
</script>

<style>

</style>