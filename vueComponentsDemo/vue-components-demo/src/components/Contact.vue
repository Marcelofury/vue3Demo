<template>
    <div class="bg-info rounded p-2 m-2">
        <h1>Name: {{ name }}</h1>
        <p>Email: {{ email }}</p>
        <p>Phone : {{ phone }}</p>
</div>
</template>
<script setup>
import { ref, defineProps } from "vue";
        const email = ref("hello@dotnetmastery.com")
        const props = defineProps(["name", "phone"])
        
    
</script>
<style></style>