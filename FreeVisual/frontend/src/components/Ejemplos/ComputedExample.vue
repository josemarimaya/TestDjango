<template>
    <div>
        <input type="text" name="" id="" v-model="message">
        <h3> {{ message }}</h3>
        <h3>{{ message_reverse }}</h3>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    let message = ref('')
    const message_reverse = computed(() => message.value.split('').reverse().join(''))
</script>

<style scoped>

</style>