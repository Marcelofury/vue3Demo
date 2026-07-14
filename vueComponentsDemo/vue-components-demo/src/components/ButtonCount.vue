<template>
    <button @click="count++">Clicked {{ count }} times</button>

</template>
<script setup>

import {ref,  onBeforeMount, onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from "vue";

onBeforeMount(()=>{
  console.log("onBeforeMount - ButtonCount.vue")
});

onMounted(()=>{
  console.log("onMounted - ButtonCount.vue")
});

onBeforeUpdate(()=>{
  console.log("onBeforeUpdate - ButtonCount.vue")
});

onUpdated(()=>{
  console.log("onUpdated - ButtonCount.vue")
});

onBeforeUnmount(()=>{
  console.log("onBeforeUnmount - ButtonCount.vue")
});

onUnmounted(()=>{
  console.log("onUnmounted - ButtonCount.vue")
});

    const count = ref(0)

        
</script>