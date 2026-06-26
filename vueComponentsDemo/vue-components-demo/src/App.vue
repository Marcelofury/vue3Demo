<template>
  <div>{{ message }}</div>
  <contact-us></contact-us>
  <button-count></button-count>
</template>

<script>

export default{
  setup(){
     const message = "Hello Vue";
     return {
      message
     }
  }
}
</script>

<style>

</style>