<template lang="">
    <div class="post-card">
        <h3>Título</h3>
        <p> Noseque</p>
        <PostButton/>
    </div>
</template>

<script setup>
import PostButton from "./PostButton.vue";
</script>

<style scoped>

.post-card{
    border-radius: 15px;
    padding: 10px;
    margin: 5px;
    border: 1px solid #ccc;
}
</style>