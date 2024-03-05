<template>
    <form >
        <input type="text" v-model="inputText">
        <input type="checkbox" v-model="agree">

        <select v-model="country">
            <option value="Spain">Spain</option>
            <option value="UK">UK</option>
            <option value="Italy">Italy</option>
        </select>
    </form>

    <h3>{{ inputText }}</h3>
</template>

<script setup>
    import {ref} from 'vue'

    let inputText = ref('')
    let agree = ref(true)
    let country = ref('Spain')
</script>

<style scoped>
</style>