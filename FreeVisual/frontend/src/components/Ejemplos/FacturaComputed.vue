<template>
    <div>
        <label v-font-size:lg> Subtotal</label>
        <input type="number" v-model="subtotal" />
        <h3 v-custom-size:xl> Total impuestos a pagar: {{ totalVat }} ({{ vat }}%)</h3>
    </div>
</template>

<script setup>
    import {ref, computed} from 'vue'
    const vat = 21 
    let subtotal = ref(0)
    const totalVat = computed(() => (vat * subtotal.value)/100)
</script>

<style scoped>

</style>