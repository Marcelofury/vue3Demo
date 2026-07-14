<template>
<LuckyNumberParentComponent>
  <p class="pt-2"> We have two version for picking lucky number</p>
  <p>Click the button to toggle between the two versions</p>
  <button @click="showMessage">What will we learn</button>
  <h4 class="text-success">{{ message }}</h4>
</LuckyNumberParentComponent>
</template>

<script setup>
import { ref } from "vue";

import LuckyNumberParentComponent from "./components/LuckyNumberParentComponent.vue"

const message = ref("");

function showMessage(){
  message.value = "We will learn how to use slots"
}

</script>