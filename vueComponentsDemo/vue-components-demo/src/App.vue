<template>
  <div class="bg-black text pt-3">
  <div class="container">
  <div class="text-white float-end">Contact owner Name: <input v-model="ownerName"></div>
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
import { ref, reactive } from "vue"
import ButtonCount from "./components/ButtonCount.vue"
import Contact from "./components/Contact.vue"
import AddContact from "./components/AddContact.vue"


  
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