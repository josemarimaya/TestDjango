<template>
    <div class="container">
        <PostDetail v-for="elm in info" :key="elm.title" 
        :title="elm.title" :content="elm.content" @sayHi="showAlert()"/>
    </div>
</template>

<script setup>

import PostDetail from './PostDetail.vue';

let info = [
    {title:"Post 1", content:"1"},
    {title:"Post 2", content:"2"},{title:"Post 3", content:"3"},{title:"Post 4", content:"4"},{title:"Post 5", content:"5"}]

function showAlert(msg) {
    alert(msg)
}
</script>

<style scoped>

.container{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
}
</style>