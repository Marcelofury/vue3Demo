<template>
  <div class="container">
  <div>{{ message }}</div>
  
  <Contact name="Bhrugen" :phone="123455554432" :ownername="contactsOwner" email="gutenbag@gmail.com"></Contact>
  
  </div>
   
</template>

<script setup>
import ButtonCount from "./components/ButtonCount.vue"
import Contact from "./components/Contact.vue"

  const message = "Hello Vue";
  const contactsOwner="dotnetmastery"
     
</script>

<style>

</style>