<template>
    <h3> {{ counter }}</h3>
    <button @click="addCounter"> Va incrementando jeje </button>
</template>

<script>
    import { defineComponent } from "vue";
    export default defineComponent({
        name: 'CounterOption',
        components: {},
        data(){
            let counter = 0;
            return {counter}
        },
        methods:{
            addCounter(){
                this.counter++
            }
        }
    })

</script>

<style>
</style>