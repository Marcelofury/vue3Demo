<template>
  <div class="bg-black text pt-3" :style="{ height: '100vh'}">
    <h1 class="text-center text-success">ContactOPedia</h1>
  <div class="container">
    <div class="row text-white p-2 mb-2">
      <div class="col-6">
        Owner Name: <input v-model="ownerName">
      </div>
      <div class="col-6 text-end">
        Max Lucky Number : <input v-model.number="maxNumber">
      </div>
    </div>
  
  <br><br>
  
  <AddContact @add-contact="onAddContact"></AddContact>
  <div class="row">
  <div class="col-12 " v-for="contact in contacts":key="contact.name">
    <Contact 
    :name="contact.name"
     :phone="contact.phone" 
     :ownername="contact.ownerName" 
     :email="contact.email"
      :isFavorite="contact.isFavorite"
      
      @update-favorite="contact.isFavorite = onUpdateFavorite($event,contact.phone)"></Contact>
      

  </div>
  </div>
  
  
  </div>
  </div>
   
</template>

<script setup>
import { ref, reactive, provide } from "vue"
import ButtonCount from "./components/ButtonCount.vue"
import Contact from "./components/Contact.vue"
import AddContact from "./components/AddContact.vue"



  const maxNumber = ref(100)
  provide("maxLuckyNumber" , maxNumber);
  const ownerName=ref("dotnetmastery")

  const contacts = reactive([
    {name:"Bhrugen",
      phone: 1233333334,
      ownerName: ownerName,
      isFavorite: false,
    },
    {name:"Bella",
      phone: 5512344334,
      ownerName: ownerName,
      isFavorite: true,
    },
    {name:"Sam",
      phone: 5003023789,
      ownerName: "",
      isFavorite: false,
    } 
  ])

  function onAddContact(contact){
    contact.ownerName = ownerName.value;
    contact.isFavorite = false;
    contacts.push(contact);
  }


  function onUpdateFavorite(oldValueFromChildComponent, phoneNumberFromParent){
    console.log(oldValueFromChildComponent)
    return !oldValueFromChildComponent.isFavorite;

  }
     
</script>

<style>

</style>