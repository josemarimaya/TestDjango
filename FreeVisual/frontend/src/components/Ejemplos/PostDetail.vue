<template>
    <div class="post">
        <h3> {{ props.title}}</h3>
        <p> {{ props.content }}</p>
        <input type="text" v-model="message">
        <button @click="handleClick()"> Di hola</button>
    </div>
</template>

<script setup>

import { defineProps, defineEmits, ref } from 'vue';

const handleClick = () => {
    emit("Hola desde el hijo")
}

const props = defineProps({title: String, content:String})

const emit = defineEmits(['sayHi'])

let message = ref("")
</script>

<style scoped>
.post{
    width: 300px;
    border-radius: 10px;
    height: 100%;
    background-color: blueviolet;
    margin: 10px;
    padding: 10px;
}
</style>