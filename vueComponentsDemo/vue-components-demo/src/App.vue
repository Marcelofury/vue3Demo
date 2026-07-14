<template>
<button @click="increment">Increment</button>
<button @click="decrement">Decrement</button>
<p>{{ count }}</p>

</template>

<script setup>
import { useCounter} from "./composible/useCounter.js"

const {count,increment,decrement} = useCounter();


</script>