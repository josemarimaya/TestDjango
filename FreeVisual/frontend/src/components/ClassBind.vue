<template>
    <!--<p v-bind:class="{'danger': hasError}"> El mensaje se ha enviado correctamente</p>-->
    <p v-bind:style="{backgroundColor : '#ccc', color:c}"> El mensaje se ha enviado correctamente</p>
    <button v-on:click="handleClick()"> Cambiar color</button>
</template>

<script setup>
   
   import {ref} from 'vue'

   let c = ref('#fff')
   const handleClick = () => {c.value = '#ff0000'}
</script>

<style scoped>
.danger{
    color: red;
}
</style>