<template>
    <div class="bg-info rounded p-4 m-2">
        <h1>Name: {{ name }}</h1>
        <p>Email: {{ email }}</p>
        <p>Phone : {{ phone }}</p>
        <p class="float-end small" v-if="ownername!= ''">*this contact info belongs to {{ ownername }}</p>
</div>
</template>
<script setup>
import { ref, defineProps } from "vue";
        //const email = ref("hello@dotnetmastery.com")
        const props = defineProps({name:{type:String, required:true},phone:Number,ownername:String, email:{type: String, required: false, default: "-n/a-"}})
        
    
</script>
<style></style>