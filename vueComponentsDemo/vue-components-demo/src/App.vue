<template>
  <div class="bg-black text pt-3" :style="{ height: '100vh'}">
    <h1 class="text-center text-success">ContactOPedia</h1>
  <div class="container">
    <LuckyNumber></LuckyNumber>
    <br>
    <LuckyNumberV2></LuckyNumberV2>
    

  </div>
  </div>
  
  
  
   
</template>

<script setup>
import { ref, reactive, provide } from "vue"
import ButtonCount from "./components/ButtonCount.vue"
import LuckyNumberV2 from "./components/LuckyNumberV2.vue"
import LuckyNumber from "./components/LuckyNumber.vue"



 
     
</script>

<style>

</style>