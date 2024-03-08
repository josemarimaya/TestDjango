<template>
    <div class="post">
        <h3> {{ props.title}}</h3>
        <p> {{ props.content }}</p>
        <button @click="handleClick()"> Di hola</button>
    </div>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
    name : 'PostDetail',
    props: {
        title:{
            type: String,
            required: true
        },
        content:{   
            type: String,
            required: false,
            default: "Este post no tiene contenido"
        }
    },
    emits: ["sayHi"],
    setup(props) {
        const handleClick = () => {
            alert("Hola desde el hijo")
        }
        return{props, handleClick}
    }
})

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