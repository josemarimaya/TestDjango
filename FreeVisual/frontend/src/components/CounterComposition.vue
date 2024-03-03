<template>
    <h3> {{ counter }}</h3>
    <button @click="addCounter"> Va incrementando jeje </button>
</template>

<script>
import {defineComponent, ref} from 'vue'
export default defineComponent({
    name: 'CounterComposition',
        components: {},
        setup() {
            let counter = ref(0);
            const addCounter = () =>{
                counter.value++
            }
            return{counter, addCounter}
        }
})
</script>