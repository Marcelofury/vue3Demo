<template>
    <div class="bg-info rounded p-1 m-1">
        <div class="row">

        <div class="col-12">
        <h1>Name: {{ name }}</h1>
        <p>Email: {{ email }}</p>
        <p>Phone : {{ phone }}</p>
        <p class="float-end small" v-if="ownername!='' ">*this contact info belongs to {{ ownername }}</p>

        </div>
        </div>
        
</div>
</template>
<script setup>
import { ref } from "vue";
        
        const props = defineProps({
                name:{type:String, required:true},
                phone:Number,
                ownername: String, 
                email:{type: String, required: false, default: "-n/a-"},
                isFavorite: Boolean})
        
    
</script>
<style></style>